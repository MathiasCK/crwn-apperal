import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CheckOutItem from "../components/checkout/Checkout-item.component";
import StripeCheckoutButton from "../utils/Stripe-button.component";
import { selectCartItems, selectCartTotal } from "../redux/cart/cart.selectors";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations/animations";
import { Helmet } from "react-helmet";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  return (
    <>
      <Helmet>
        <title>CRWN APPERAL | Checkout</title>
      </Helmet>
      <StyledCheckout
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        {/*<Header>
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </Header>*/}
        {cartItems.map((cartItem) => (
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        {cartItems.length ? (
          <div>
            <Total>
              <span>TOTAL: NOK {total}</span>
              <StripeCheckoutButton price={total} />
            </Total>
            <Warning>
              *Please use the following test credit card for payments*
              <br />
              4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
            </Warning>
          </div>
        ) : (
          <h3>Your cart is empty, nothing to see here</h3>
        )}
      </StyledCheckout>
    </>
  );
};

const StyledCheckout = styled(motion.div)`
  @media (min-width: 560px) {
    width: 75%;
  }
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  padding-top: 10px;
`;

const Total = styled.div`
  @media (min-width: 685px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  margin-top: 30px;
  font-size: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin-bottom: 1rem;
  }
`;

const Warning = styled.div`
  color: red;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
`;

export default React.memo(CheckoutPage);
