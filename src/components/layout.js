import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

import Header from "./header";
import "./layout.css";

import styled from "styled-components";

import HUB from "../images/HUBZoneCertified.png";

const Main = styled.main`
  padding-top: 0;
  max-height: 100vh;
  color: #505050;
  font-family: 'Rubik', sans-serif;
  line-height: 1.666em;
`;

const Footer = styled.footer`
  margin: 0 auto;
  max-width: 960px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    display: grid;
  }
`;

const Copyright = styled.div``

const HubLogo = styled.div`
  img {
    height: 100px;
    width: 220px;
  }
`

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
            <Copyright>
              <p>Copyright © {new Date().getFullYear()} Zenius Corporation</p>
            </Copyright>
            <HubLogo>
              <img src={HUB}/>
            </HubLogo>
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
