import React from "react";
import styled from "styled-components";

import * as FaIcons from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterColumns>
        <div className="row-column">
          <Title>About Us</Title>
          <div className="row">
            <FaIcons.FaMapPin className="icon" />
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Holmestrandgata+4,+0468+Oslo/data=!4m2!3m1!1s0x46416e11bfd564f5:0x62dbd3befcdb0090?sa=X&ved=2ahUKEwjGoouU5P_uAhX6isMKHTmnCEgQ8gEwAHoECAQQAQ"
            >
              Holmestrandgata 4, 0468 Oslo
            </a>
          </div>
          <div className="row">
            <FaIcons.FaMailBulk className="icon" />
            <a
              target="_blank"
              href="mailto:mathias.ck2000@gmail.com?subject=Crwn Apperal"
            >
              Mathias.ck2000@gmail.com
            </a>
          </div>
          <div className="row">
            <FaIcons.FaPhone className="icon" />
            <a target="_blank" href="tel:+47 47683559">
              +47 47683559
            </a>
          </div>
        </div>
        <div className="row-column">
          <Title>Stay In Touch</Title>
          <div className="row">
            <a href="www.facebook.com" target="_blank">
              <FaIcons.FaFacebook className="icon link" />
            </a>
            <a href="www.instagram.com" target="_blank">
              <FaIcons.FaInstagram className="icon link" />
            </a>
            <a href="www.twitter.com" target="_blank">
              <FaIcons.FaTwitter className="icon link" />
            </a>
          </div>
        </div>
        {/* 
        <div className="row-column">
          <Title>Happenings</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            pariatur. Voluptates consectetur rem, non maiores magnam reiciendis
            placeat fuga dolorem illum repellendus. Totam deserunt repellendus
            ab veritatis explicabo blanditiis sed doloribus incidunt ea eaque
            praesentium tempora, exercitationem beatae, culpa aperiam repellat
            nulla aliquid! Itaque laborum modi distinctio iure recusandae
            voluptatibus.
          </p>
        </div>
        */}
      </FooterColumns>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  margin-top: 3rem;
  width: 100%;
`;

const FooterColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  justify-items: center;
  .icon {
    margin: 1rem;
    font-size: 1.5rem;
    &.link {
      transition: all 0.3s ease;
      &:hover {
        color: #ff033e;
      }
    }
  }

  .row-column {
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    a {
      margin: auto 0;
    }
    p {
      margin: auto 0;
    }
  }
`;

const Title = styled.div`
  font-size: 2rem;
  padding: 1rem 0;
  text-align: center;
`;

export default Footer;
