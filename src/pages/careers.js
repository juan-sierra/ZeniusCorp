import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import styled from "styled-components";

const CareersWrapper = styled.section`
  display: grid;
  align-items: center;
`;

const CareersInner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 20px;
`;

const Careers = () => (
  <Layout>
    <SEO title="Services" />
    <CareersWrapper>
      <CareersInner>
        <h1>Careers</h1>
        <p>
          Explore our current opportunities and Consultants available for career
          opportunities with us. For careers related inquiries, please email us
          at hr@zeniuscorp.com.
        </p>
      </CareersInner>
    </CareersWrapper>
  </Layout>
);

export default Careers;
