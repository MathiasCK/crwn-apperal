import React from "react";
import styled from "styled-components";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <>
      <StyledCartItem>
        <img src={imageUrl} alt="item" />
        <ItemDetails>
          <span className="name">{name}</span>
          <span className="price">
            {quantity} x {price}
          </span>
        </ItemDetails>
      </StyledCartItem>
      <center>
        <Border />
      </center>
    </>
  );
};

const StyledCartItem = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin: 25px;
  img {
    width: 30%;
  }
`;

const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
  .name {
    font-size: 16px;
  }
`;

const Border = styled.div`
  height: 1px;
  width: 90%;
  background: #ccc;
`;

export default React.memo(CartItem); // Memorizes the quantity of cartitems so it doesn't re-render
