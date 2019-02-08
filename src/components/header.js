import React from "react";
// import { Link } from "gatsby";
import Nav from "./nav";
import styled from "styled-components";

const MainHeader = styled.header`
  background: pink;
`;

const Logo = styled.div``;
const LogoInner = styled.h1``;

const Header = () => (
  <MainHeader>
    <Logo>
      <LogoInner>Header</LogoInner>
    </Logo>
    <Nav />
  </MainHeader>
);

export default Header;
