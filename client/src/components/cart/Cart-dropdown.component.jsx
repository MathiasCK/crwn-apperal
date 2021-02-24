import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";
import CartItem from "./Cart-item.component";
import CustomButton from "../../utils/Custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);

  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <StyledDropdown>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your Cart Is Empty</EmptyMessage>
        )}
      </CartItems>
      <CustomButton
        disabled={!cartItems.length}
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  button {
    margin-top: auto;
  }
`;

const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
`;

const EmptyMessage = styled.span`
  font-size: 18px;
  margin: auto;
`;

export default React.memo(withRouter(CartDropDown));
