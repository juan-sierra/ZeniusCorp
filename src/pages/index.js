import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import vision from "../images/vision.svg";

const MainPage = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  margin-bottom: 1.45em;
  padding: 20px;
  p {
    margin-top: 1.25em;
    font-size: 1.6em;
    @media (max-width: 1000px) {
      margin-top: 1.25em;
    }
  }
`;

const H1 = styled.h1`
  font-size: 4em;
  line-height: 1;
`;

const HeroImage = styled.div`
  img {
    max-width: 100%;
  }
`;

const IndexPage = ({ siteTitle }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `small business`,
        `IT`,
        `financial management`,
        `hubzone`,
        `leesburg, va`,
        `united states`,
        `cloud`,
        `data`,
        `systems development`,
        `applications development`,
        `Zenius Corporation`,
        `Zenius Corp`,
        `federal IT`,
        `federal IT services`
      ]}
    />
    <MainPage>
      <div>
        <H1>Turning Visions into Solutions</H1>
        <p>
          As a trusted advisors to our clients, we offer expertise in solving
          complex and multi-dimensional operational and technical challenges.{" "}
        </p>
      </div>
      <HeroImage>
        <img src={vision} alt="man adjusting graph on large ipad" />
      </HeroImage>
    </MainPage>
  </Layout>
);

export default IndexPage;
