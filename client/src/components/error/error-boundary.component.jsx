import React from "react";

import styled from "styled-components";
import { Redirect } from "react-router-dom";
import CustomButton from "../../utils/Custom-button.component";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
      redirect: false,
    };
  }

  static getDerivedStateFromError(error) {
    // Process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    if (this.state.hasErrored) {
      return (
        <div>
          <ErrorImageOverlay
            imageUrl={
              "https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png"
            }
          >
            {/*<ErrorImageContainer />
          <ErrorImageText>This page is under construction</ErrorImageText>
          <ErrorImageText className="small">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            libero unde at vel quaerat nisi quia fugit corporis quae earum?
          </ErrorImageText>*/}
          </ErrorImageOverlay>
          <center>
            <CustomButton onClick={this.setRedirect}>
              Back to homepage
            </CustomButton>
          </center>
        </div>
      );
    }
    return this.props.children;
  }
}
const ErrorImageOverlay = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
`;

/*
const ErrorImageContainer = styled.div`
  display: inline-block;

  width: 40vh;
  height: 40vh;
`;

const ErrorImageText = styled.h2`
  margin: 2rem;
  font-size: 3rem;
  color: black;

  &.small {
    font-size: 1.5rem;
  }
`;*/

export default ErrorBoundary;
