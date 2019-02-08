import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

import "../css/reset.css";

import styled from "styled-components";

const Container = styled.div`
  font-family: Nunito;
  div,
  main,
  section,
  footer {
    padding: 20px;
  }
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
          <Footer />
        </Container>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
