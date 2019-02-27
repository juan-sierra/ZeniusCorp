import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import NewsSVG from "../images/news.svg";

const NewsWrapper = styled.div`
  padding: 20px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: center;
  h1 {
    font-size: 3.5em;
  }
  p {
    font-size: 1.5em;
  }
  img {
    max-width: 100%;
  }
`;

const News = () => {
  return (
    <Layout>
      <SEO title="News" />
      <NewsWrapper>
        <header>
          <h1>Latest News & Updates</h1>
          <p>Latest News, Updates and Press Releases about Zenius Corporaton</p>
        </header>
        <div>
          <img src={NewsSVG} />
        </div>
      </NewsWrapper>
    </Layout>
  );
};

export default News;
