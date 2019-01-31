import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import styled from "styled-components";

const ServicesWrapper = styled.section`
  display: grid;
  align-items: center;
`;

const ServiceInner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 20px;
`;

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <ServicesWrapper>
      <ServiceInner>
        <h1>Services</h1>
        <p>
          We take a partnership approach from discovery to delivery, focusing on
          knowledge transfer as we design, develop, demonstrate and deploy our
          solutions.
        </p>
        <h2>Our Approach to Service Delivery</h2>
        <ul>
          <li>Measure Outcomes /Results</li>
          <li>Protect assets</li>
          <li>Architect for Business value</li>
          <li>Provide Cost and Time sensitive delivery</li>
          <li>Automate Business processes in and across the systems</li>
          <li>Optimize overall Operations</li>
          <li>Deliver Managed Services</li>
        </ul>
      </ServiceInner>
    </ServicesWrapper>
  </Layout>
);

export default Services;
