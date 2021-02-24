import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router";
import styled from "styled-components";
import { db } from "../Firebase/Firebase.utils";
import CustomButton from "../utils/Custom-button.component";
import FormInput from "../utils/Form-input.component";

const Contact = () => {
  const history = useHistory();
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = userCredentials;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageSent = new Date();
    db.collection("messages")
      .add({
        name: name,
        email: email,
        message: message,
        messageSent: messageSent,
      })
      .then(() => {
        alert("Message has been sumbitted");
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
      <Helmet>
        <title>CRWN Apperal | Contact</title>
      </Helmet>
      <Title>
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
          soluta.
        </p>
      </Title>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          value={name}
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
          type="text"
          name="message"
          value={message}
          onChange={handleChange}
          label="Message"
          required
        />
        <CustomButton type="submit">Submit</CustomButton>
      </Form>
    </>
  );
};

const Form = styled.form`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  margin: 0 auto;
  input {
    width: 500px;
  }
`;

const Title = styled.div`
  text-align: center;
  h1 {
    font-size: 2rem;
    font-weight: lighter;
    padding-bottom: 1rem;
  }
  p {
    font-size: 1rem;
  }
`;

export default Contact;
