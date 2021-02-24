import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    // Hjemmesiden
    <StyledMenu
      className={`${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  display: flex;
  height: 350px;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  //border: 1px solid black;
  margin: 0.1rem;
  overflow: hidden;
  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }
  .background-image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  .content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
    .title {
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
    }
    .subtitle {
      font-weight: lighter;
      font-size: 16px;
    }
  }
`;

export default withRouter(MenuItem);
