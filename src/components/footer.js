import React from "react";
import styled from "styled-components";
import Sublinks from "./sublinks";
import Image from "./image";

const MainFooter = styled.footer`
  background: #eee;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  @media (max-width: 1000px) {
    display: block;
  }
  p {
    width: 50%;
  }
`;

const Footer = () => (
  <MainFooter>
    <div>
      <p>
        Zenius Corporation is a HUBZone-certified, Minority-Owned Small
        Disadvantaged Business (SDB) firm comprised of highly experienced and
        exceptionally knowledgeable industry experts.
      </p>
      <p>Copyright © {new Date().getFullYear()} Zenius Corporation</p>
      <Image />
    </div>
    <Sublinks />
  </MainFooter>
);

export default Footer;
