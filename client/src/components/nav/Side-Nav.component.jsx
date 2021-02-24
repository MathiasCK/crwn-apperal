import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { signOutStart } from "../../redux/user/user.actions";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart/SideCart-icon.component";

const SideNav = () => {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  const pathname = useLocation();

  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(signOutStart());
  };
  return (
    <>
      <Navbar>
        <h1>
          <Link id="logo" to="/">
            <Logo className="logo"></Logo>
          </Link>
        </h1>
        <Link to="#" className="menu-icon">
          <i onClick={showSideBar}>
            {""}
            {sideBar ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
          </i>
        </Link>
      </Navbar>
      <StyledNav>
        <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
          <ul>
            <li>
              <Link to="/checkout" onClick={showSideBar}>
                <CartIcon />
              </Link>
            </li>
            <li>
              <Link to="/shop" onClick={showSideBar}>
                SHOP
              </Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/shop" ? "100%" : "0%" }}
              />
            </li>
            <li>
              <Link to="/contact" onClick={showSideBar}>
                CONTACT
              </Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
              />
            </li>
            <li>
              {currentUser ? (
                <div onClick={signOut}>SIGN OUT</div>
              ) : (
                <Link to="/signin" onClick={showSideBar}>
                  SIGN IN
                </Link>
              )}
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/signin" ? "100%" : "0%" }}
              />
            </li>
          </ul>
        </nav>
      </StyledNav>
    </>
  );
};

const Navbar = styled(motion.div)`
  @media (min-width: 560px) {
    display: none;
  }
  backdrop-filter: saturate(180%) blur(5px);
  opacity: 0.9;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: fixed;
  z-index: 10;
  background: white;
  top: 0;
  left: 0;
  .menu-icon {
    font-size: 2rem;
    color: black;
  }
  #logo {
    font-size: 2rem;
    color: black;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

const StyledNav = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .menu-icon {
    margin-right: 2rem;
    font-size: 2rem;
    color: black;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  a {
    color: black;
    text-decoration: none;
  }
  li {
    padding: 2rem 0;
    position: relative;
  }
  .nav-menu {
    backdrop-filter: saturate(180%) blur(5px);
    opacity: 0.9;
    z-index: 20;
    background: white;
    width: 300px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 70px;
    right: -100%;
    transition: 850ms;
    &.active {
      right: 0;
      transition: 350ms;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  background: #ff033e;
  width: 0%;
  position: absolute;
  bottom: 0% !important;
  left: 0%;
`;

export default React.memo(SideNav);
