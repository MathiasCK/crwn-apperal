import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { signOutStart } from "../../redux/user/user.actions";
import { motion } from "framer-motion";
import CartDropDown from "../cart/Cart-dropdown.component";
import CartIcon from "../cart/Cart-icon.component";

const Navbar = () => {
  const { pathname } = useLocation();
  const [ddMenu, setDdMenu] = useState(false);
  const handleHover = () => setDdMenu(!ddMenu);

  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(signOutStart());
  };
  return (
    <StyledHeader>
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <Options>
        <div className="relative">
          <Link
            className="option"
            to="/shop"
            onMouseEnter={handleHover}
            onClick={() => setDdMenu(false)}
          >
            Shop
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/shop" ? "100%" : "0%" }}
          />
        </div>

        {ddMenu ? (
          <StyledDropdown onMouseLeave={handleHover}>
            <Link to="/shop/mens" onClick={handleHover}>
              Mens
            </Link>
            <Link to="/shop/womens" onClick={handleHover}>
              Womens
            </Link>
            <Link to="/shop/hats" onClick={handleHover}>
              Hats
            </Link>
            <Link to="/shop/jackets" onClick={handleHover}>
              Jackets
            </Link>
            <Link to="/shop/sneakers" onClick={handleHover}>
              Sneakers
            </Link>
          </StyledDropdown>
        ) : null}
        <div className="relative">
          <Link className="option" to="/contact">
            Contact
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
          />
        </div>
        <div className="relative">
          {currentUser ? (
            <div className="option" onClick={signOut}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )}
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/signin" ? "100%" : "0%" }}
          />
        </div>
        <CartIcon />
      </Options>
      {hidden ? null : <CartDropDown />}
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  @media (min-width: 560px) {
    backdrop-filter: saturate(180%) blur(5px);
    opacity: 0.9;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    padding: 0 1rem;
    background: white;
    position: fixed;
    z-index: 10;
    width: 100%;
    top: 0;
    left: 0;
    & .logo-container {
      width: 70px;
      padding: auto 10px;
    }
  }
  display: none;
`;

const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & .relative {
    position: relative;
  }

  & .option {
    text-transform: uppercase;
    padding: 10px 15px;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.1rem;
  background: black;
  width: 0%;
  position: absolute;
  bottom: 0% !important;
  left: 0%;
`;

const StyledDropdown = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  padding: 1rem 3rem;
  top: 70px;
  a {
    font-size: 1.5rem;
    padding: 0.5rem;
  }
`;

export default React.memo(Navbar);
