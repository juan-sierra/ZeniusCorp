import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

import styled from "styled-components";

const Main = styled.main`
  padding-top: 0;
  max-height: 100vh;
  color: #505050;
`;

const Footer = styled.footer`
  max-width: 100%;
  padding: 20px;
  div {
    margin: 0 auto;
    max-width: 960px;
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>
          {children}
          <Footer>
            {" "}
            <div>Copyright © {new Date().getFullYear()} Zenius Corporation</div>
          </Footer>
        </Main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
