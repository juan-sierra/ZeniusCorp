import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

import "../css/reset.css";

import styled from "styled-components";

const Container = styled.div`
  min-height: 100%;
  color: #2d2926;
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
