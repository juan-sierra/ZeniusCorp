import React from "react";
import { Link } from "gatsby";
import Nav from "./nav";
// import MobileMenu from "./mobileMenu";
import styled from "styled-components";
import { Menu } from "styled-icons/material/";

const MainHeader = styled.header`
  background: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
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
  &:hover {
    color: #24b7db;
  }
`;

// function to open and close menu, also to change to the icon to an x when the hamburger icon is clicked..
const toggleMenu = () => {
  console.log("this fn is working");
};

const Header = ({ siteTitle }) => (
  <MainHeader>
    <Logo to="/">{siteTitle}</Logo>
    <ButtonWrapper>
      <OpenBtn onClick={toggleMenu} />
    </ButtonWrapper>
    <Nav />
  </MainHeader>
);

export default Header;
