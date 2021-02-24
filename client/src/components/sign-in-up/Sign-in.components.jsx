import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions";
import CustomButton from "../../utils/Custom-button.component";
import FormInput from "../../utils/Form-input.component";

const SignIn = () => {
  const dispatch = useDispatch();

  const emailSignIn = (email, password) => {
    dispatch(emailSignInStart({ email, password }));
  };

  const googleSignIn = () => {
    dispatch(googleSignInStart());
  };

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignIn(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <StyledSignIn>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <Button>
          <CustomButton type="submit">sign in</CustomButton>
          <CustomButton type="button" onClick={googleSignIn} isGoogleSignIn>
            google
          </CustomButton>
        </Button>
      </form>
    </StyledSignIn>
  );
};

const StyledSignIn = styled.div`
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

const Button = styled.div`
  @media (min-width: 911px) {
    flex-direction: row;
    button {
      width: 100%;
    }
  }
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    margin: 1rem 0;
    width: 50%;
  }
`;

export default React.memo(SignIn);
