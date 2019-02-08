import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const MainPage = styled.main``;

const H1 = styled.h1``;

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
        `applications development`
      ]}
    />
    <MainPage>
      <H1>Turning Visions into Solutions</H1>
      <h2>something</h2>
    </MainPage>
  </Layout>
);

export default IndexPage;
