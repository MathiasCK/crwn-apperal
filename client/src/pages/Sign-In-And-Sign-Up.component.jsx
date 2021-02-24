import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import SignIn from "../components/sign-in-up/Sign-in.components";
import SignUp from "../components/sign-in-up/Sign-up.component";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations/animations";

const SignInAndSignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>CRWN Apperal | Sign In</title>
      </Helmet>
      <SignInAndSignUp
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <SignIn />
        <SignUp />
      </SignInAndSignUp>
    </>
  );
};

const SignInAndSignUp = styled(motion.div)`
  /*width: 850px;
  display: flex;
  flex-direction: column !important;
  justify-content: space-between;
  margin: 30px auto;

  @media (min-width: 1000px) {
    flex-direction: row !important;
  }*/
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 5rem;
  justify-items: center;
  padding-top: 10px;
`;

export default SignInAndSignUpPage;
