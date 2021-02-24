import React from "react";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const clearItem = (item) => {
    dispatch(clearItemFromCart(item));
  };
  const add = (item) => {
    dispatch(addItem(item));
  };
  const remove = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <StyledCheckoutItem>
      <div className="image-container">
        <img src={imageUrl} alt="Checkout Item" />
      </div>
      <div className="description">
        <span className="name">{name}</span>
        <span className="quantity">
          <div className="arrow" onClick={() => remove(cartItem)}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={() => add(cartItem)}>
            &#10095;
          </div>
        </span>
        <span className="price">NOK {price}</span>
        <div className="remove-button" onClick={() => clearItem(cartItem)}>
          &#10005;
        </div>
      </div>
    </StyledCheckoutItem>
  );
};

const StyledCheckoutItem = styled.div`
  @media (min-width: 840px) {
    flex-direction: row;
    .image-container {
      padding-right: 0rem;
      width: 50% !important;
    }
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  justify-content: space-between;
  .image-container {
    width: 100%;
    height: 500px;
    padding: 1rem;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .name {
    padding: 1rem 0;
  }

  .quantity {
    display: flex;
    padding: 1rem 0;
    .arrow {
      cursor: pointer;
    }
    .value {
      margin: 0 10px;
    }
  }

  .remove-button {
    padding: 1rem 0;
    cursor: pointer;
  }

  .description {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default React.memo(CheckOutItem);
