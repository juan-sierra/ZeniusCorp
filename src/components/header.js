import { Link } from "gatsby";
import React from "react";

import styled from "styled-components";
import Image from "./image";

// margin-bottom: 1.45rem;
const MainNav = styled.nav`
  min-width: 100%;
  border-bottom: 2px solid #eee;
  box-shadow: 2px 2px 2px #eee;
  margin-bottom: 1.45rem;
`;

const InnerNav = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: end;
  font-family: Rubik, sans-serif;

`;

const LogoLink = styled(Link)`
  color: slategray;
  text-decoration: none;
  width: 50px;
  * {
    width: 150px;
    height: 150px;
    @media (max-width: 1000px) {
      width: 100px;
      height: 100px;
    }
  }
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const Li = styled.li`
  padding-right: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: slategray;
`;

const Header = ({ siteTitle }) => (
  <MainNav>
    <InnerNav>
      <LogoLink to="/">
        <Image />
      </LogoLink>
      <Ul>
        <Li>
          <NavLink to="/services">Services</NavLink>
        </Li>
        <Li>
          <NavLink to="/clients">Clients</NavLink>
        </Li>
        <Li>
          <NavLink to="/careers">Careers</NavLink>
        </Li>
        <Li>
          <NavLink to="/contact">Contact</NavLink>
        </Li>
      </Ul>
    </InnerNav>
  </MainNav>
);

export default Header;
