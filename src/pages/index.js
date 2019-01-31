import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import styled from "styled-components";

import HeroImg from "../images/team-meeting.jpg";

// background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);

const Index = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    height: inherit;
  }
`;

const HeroIMG = styled.div`
  img {
    width: 100vw;
    height: 100%;
  }
`;

const AboutUs = styled.div`
  @media (max-width: 1000px) {
    margin-bottom: 2.5em;
  }
`;

const IndexWrapper = styled.section`
  margin: 0 auto;
  max-width: 960px;
  padding: 20px;
  display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Index>
      <IndexWrapper>
        <HeroIMG>
          <img src={HeroImg} />
        </HeroIMG>
        <AboutUs>
          <h1>Zenius Corporation</h1>
          <p>
            We represent over 20 years of expertise developing and providing
            Grants Management systems and solutions, IT Assessment and
            Optimization systems and services, Financial Management systems and
            consulting, and Higher Education domain support and expertise.
          </p>
          <p>Lets build something great!</p>
        </AboutUs>
      </IndexWrapper>
    </Index>
  </Layout>
);

export default IndexPage;
