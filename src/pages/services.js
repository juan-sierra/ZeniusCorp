import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import ServicesSVG from "../images/services.svg";
import SyncSVG from "../images/sync.svg";

const ServicesWrapper = styled.div`
  padding: 20px;
  min-height: 100vh;
`;

const ServicesIntro = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  h1 {
    font-size: 3.5em;
  }
  p {
    font-size: 1.2em;
  }
  img {
    max-width: 100%;
  }
`;

const ExpertiseIntro = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  min-height: 100vh;
  h2 {
    font-size: 2em;
  }
  li {
    font-size: 1.2em;
  }
  img {
    max-width: 100%;
  }
  div {
    p {
      font-size: 1.2em;
      text-align: center;
    }
  }
`;

const Services = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <ServicesWrapper>
        <ServicesIntro>
          <header>
            <h1>Our Services</h1>
            <p>
              We take a partnership approach from discovery to delivery,
              focusing on knowledge transfer as we design, develop, demonstrate
              and deploy our solutions.
            </p>
          </header>
          <div>
            <img src={ServicesSVG} alt="" />
          </div>
        </ServicesIntro>
        <ExpertiseIntro>
          <header>
            <h2>Our Domain Expertise</h2>
            <ul>
              <li>Grants Management systems and solutions</li>
              <li>IT Assessment and Optimization services</li>
              <li>Financial Management systems and consulting</li>
              <li>Higher Education domain support and expertise</li>
            </ul>
          </header>
          <div>
            <img src={SyncSVG} />
            <p>
              Proven track record in successfully managing large complex
              programs
            </p>
          </div>
        </ExpertiseIntro>
      </ServicesWrapper>
    </Layout>
  );
};

export default Services;
