import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

import styled from "styled-components";

const MainNav = styled.nav`
  @media (max-width: 1000px) {
    display: none;
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
  color: inherit;
  font-size: 1.2rem;
`;

const Nav = props => {
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <MainNav>
      <Ul>
        {menuLinks.map(link => (
          <Li key={link.name}>
            <NavLink to={link.link}>{link.name}</NavLink>
          </Li>
        ))}
      </Ul>
    </MainNav>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query queryMenuLinks {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <Nav data={data} />}
  />
);
