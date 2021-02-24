import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { signUpStart } from "../../redux/user/user.actions";
import CustomButton from "../../utils/Custom-button.component";
import FormInput from "../../utils/Form-input.component";

const SignUp = () => {
  const dispatch = useDispatch();

  const signUp = (userCredentials) => {
    dispatch(signUpStart(userCredentials));
  };
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    signUp({ displayName, email, password });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <StyledSignUp>
      <Title>I do not have a account</Title>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <center>
          <CustomButton type="submit">SIGN UP</CustomButton>
        </center>
      </form>
    </StyledSignUp>
  );
};

const StyledSignUp = styled.div`
  @media (min-width: 560px) {
    width: 380px;
  }
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 10px 0;
`;

export default React.memo(SignUp);
