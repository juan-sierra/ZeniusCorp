import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const SubNav = styled.nav``;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li``;

const SubHeader = styled.header`
  font-weight: 700;
`;

const SubLink = styled(Link)`
  text-decoration: none;
  color: pink;
`;

const Sublinks = () => (
  <SubNav>
    <Ul>
      <SubHeader>Company</SubHeader>
      <Li>
        <SubLink>sublink</SubLink>
      </Li>
    </Ul>
  </SubNav>
);

export default Sublinks;
