import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import DLA from "../images/clients-logos/dla.png";
import DMDC from "../images/clients-logos/dmdc.png";
import DOE from "../images/clients-logos/DOE.png";
import FM from "../images/clients-logos/fannie-mae.png";
import IRS from "../images/clients-logos/irs.png";
import JSP from "../images/clients-logos/JSP.jpg";
import PGC from "../images/clients-logos/Pr_George_County.png";
import SAM from "../images/clients-logos/samhsa.png";
import USPTO from "../images/clients-logos/US_PTO.png";

import styled from "styled-components";

const ClientsWrapper = styled.section`
  min-height: 100vh;
  h1 {
    text-align: center;
    margin-bottom: 1.5em;
  }
`;

const ClientsInner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 20px;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const ClientCard = styled.article`
  text-align: center;
`;

const CardHeader = styled.header`
  flex-flow: column;
  h2 {
    text-transform: uppercase;
  }
  img {
    height: 130px;
    width: 130px;
  }
`;

const CardBody = styled.div``;

const Clients = () => (
  <Layout>
    <SEO title="Clients" />
    <ClientsWrapper>
      <ClientsInner>
        <h1>Our Clients</h1>
        <CardWrapper>
          <ClientCard>
            <CardHeader>
              <img src={DOE} />
              <h2>Department of Education</h2>
            </CardHeader>
            <CardBody>
              Providing business analysis and SME support for Grants Management
              System and Enterprise Data Warehouse
            </CardBody>
          </ClientCard>
          <ClientCard>
            <CardHeader>
              <img src={DLA} />
              <h2>Defense Logistics Agency</h2>
            </CardHeader>
            <CardBody>
              Providing Project Management, Enterprise Architecture, Technology
              Advisory, and Application Portfolio Management services
            </CardBody>
          </ClientCard>
          <ClientCard>
            <CardHeader>
              <img src={IRS} />
              <h2>Internal Revenue Service</h2>
            </CardHeader>
            <CardBody>
              Providing Systems Development and Integrations Support services to
              deliver a modern tax processing system at IRS
            </CardBody>
          </ClientCard>
          <ClientCard>
            <CardHeader>
              <img src={JSP} />
              <h2>Joint Service Provider</h2>
            </CardHeader>
            <CardBody>
              Providing Enterprise Configuration Management services
            </CardBody>
          </ClientCard>
          <ClientCard>
            <CardHeader>
              <img src={FM} />
              <h2>Fannie Mae</h2>
            </CardHeader>
            <CardBody>
              Providing Java UI and Server Development Services
            </CardBody>
          </ClientCard>
          <ClientCard>
            <CardHeader>
              <img src={DMDC} />
              <h2>Defense Manpower Data Center</h2>
            </CardHeader>
            <CardBody>
              Providing Project Management, Enterprise Architecture, Technology
              Advisory, and Application Portfolio Management services
            </CardBody>
          </ClientCard>
          <ClientCard>
            <CardHeader>
              <img src={SAM} />
              <h2>Samhsa</h2>
            </CardHeader>
            <CardBody>Providing Cybersecurity services</CardBody>
          </ClientCard>
          <ClientCard>
            <CardHeader>
              <img src={USPTO} />
              <h2>US Patent and Trademark Office</h2>
            </CardHeader>
            <CardBody>Providing Oracle Data Modeling services</CardBody>
          </ClientCard>
          <ClientCard>
            <CardHeader>
              <img src={PGC} />
              <h2>Prince George County, Maryland</h2>
            </CardHeader>
            <CardBody>Providing SAP Solutions</CardBody>
          </ClientCard>
        </CardWrapper>
      </ClientsInner>
    </ClientsWrapper>
  </Layout>
);

export default Clients;
