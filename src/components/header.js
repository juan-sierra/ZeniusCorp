import React from "react";
import { Link } from "gatsby";
import Nav from "./nav";
// import MobileMenu from "./mobileMenu";
import styled from "styled-components";
import { Menu } from "styled-icons/material/";
import ZeniusLogo from "../images/Logo-4.png";

const MainHeader = styled.header`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid #eee;
  }
`;

const ButtonWrapper = styled.div``;

const OpenBtn = styled(Menu)`
  color: #212529;
  height: 50px;
  cursor: pointer;
  @media (min-width: 1000px) {
    display: none;
  }
`;

// const CloseBtn = styled(Close)`
//   color: #212529;
//   height: 50px;
//   display: none;
// `;

const Logo = styled(Link)`
  color: inherit;
  font-size: 1.8em;
  img {
    padding: 0;
    margin-bottom: -0.5em;
    width: 100px;
    height: 100px;
  }
`;

// function to open and close menu, also to change to the icon to an x when the hamburger icon is clicked..
const toggleMenu = () => {
  console.log("this fn is working");
};

const Header = ({ siteTitle }) => (
  <MainHeader>
    <Logo to="/">
      <img src={ZeniusLogo} />
    </Logo>
    <ButtonWrapper>
      <OpenBtn onClick={toggleMenu} />
    </ButtonWrapper>
    <Nav />
  </MainHeader>
);

export default Header;
