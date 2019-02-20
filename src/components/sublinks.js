import React from "react";
import styled from "styled-components";
import { graphql, StaticQuery, Link } from "gatsby";

const SubNav = styled.nav``;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li``;

const SubHeader = styled.header`
  font-weight: 700;
  font-size: 1.2em;
`;

const SubLink = styled(Link)`
  text-decoration: none;
  color: #212529;
  &:hover {
    color: #24b7db;
  }
`;

const Sublinks = props => {
  const { menuLinks, subLinks } = props.data.site.siteMetadata;
  return (
    <SubNav>
      <SubHeader>Links</SubHeader>
      <Ul>
        {subLinks.map(sublink => (
          <Li key={sublink.name}>
            <SubLink to={sublink.link}>{sublink.name}</SubLink>
          </Li>
        ))}
        {menuLinks.map(menulink => (
          <Li key={menulink.name}>
            <SubLink to={menulink.link}>{menulink.name}</SubLink>
          </Li>
        ))}
      </Ul>
    </SubNav>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query querySubLinks {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
            subLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <Sublinks data={data} />}
  />
);
