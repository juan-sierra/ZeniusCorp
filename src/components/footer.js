import React from "react";
import styled from "styled-components";
import Sublinks from "./sublinks";

const MainFooter = styled.footer`
  background: #eee;
`;

const Footer = () => (
  <MainFooter>
    <h1>footer</h1>{" "}
    <p>Copyright © {new Date().getFullYear()} Zenius Corporation</p>
    <Sublinks />
  </MainFooter>
);

export default Footer;
