import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import TeamSVG from "../images/team.svg";
import { graphql } from "gatsby";
import { Linkedin } from "styled-icons/boxicons-logos/Linkedin";
import Img from "gatsby-image";

const MainAbout = styled.section`
  padding: 20px;
  min-height: 100vh;
  margin-top: 2.5em;
`;

const AboutHeader = styled.header`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  align-content: center;
  grid-gap: 20px;
  h1 {
    font-size: 3.5em;
  }
  p {
    font-size: 1.2em;
  }
`;

const HeroImage = styled.div`
  img {
    max-width: 100%;
  }
  @media (max-width: 1000px) {
    margin-top: -10em;
  }
`;

const CoreValues = styled.div`
  margin-top: -5em;
  height: 100vh;
  display: grid;
  align-content: center;
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    text-align: center;
  }
  h2 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 1.5em;
  }
`;

const ValuesLetter = styled.span`
  font-size: 2.5em;
  color: #24b7db;
  font-weight: bolder;
`;

const TeamWrapper = styled.div`
  height: 100vh;
  h2 {
    text-align: center;
    font-size: 2em;
  }
`;

const TeamCard = styled.article`
  h3 {
  }
  span {
  }
  p {
  }
  a {
    padding: 20px;
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    color: #24b7db;
  }
`;

const Linked = styled(Linkedin)`
  height: 45px;
  width: 45px;
`;

const Contracts = styled.div`
  h3 {
    font-size: 1.5em;
  }
  p {
    font-size: 1.2em;
  }
  ul {
    margin: 0;
  }
`;

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <MainAbout>
        <AboutHeader>
          <div>
            <h1>About Us</h1>
            <p>
              Zenius represents over 20 years of expertise developing and
              providing Grants Management systems and solutions, IT Assessment
              and Optimization systems and services, Financial Management
              systems and consulting, and Higher Education domain support and
              expertise. Our consultants have designed and managed complex
              information technology programs, center-of-excellence-designated
              grants management systems, and e-Business solutions which are
              optimized to reduce service costs and operating expenses while
              maximizing system efficiencies. Their clients have included
              commercial companies, government agencies, and state and local
              governments. Domain expertise includes civilian agency operations,
              healthcare, defense and higher education.
            </p>
          </div>

          <HeroImage>
            <img src={TeamSVG} alt="team illustration" />
          </HeroImage>
        </AboutHeader>
        <CoreValues>
          <h2>Our Core Values</h2>
          <ul>
            <li>
              <ValuesLetter>H</ValuesLetter>
              <p>Honesty</p>
            </li>
            <li>
              <ValuesLetter>I</ValuesLetter>
              <p>Integrity</p>
            </li>
            <li>
              <ValuesLetter>T</ValuesLetter>
              <p>Teamwork</p>
            </li>
            <li>
              <ValuesLetter>E</ValuesLetter>
              <p>Expertise</p>
            </li>
            <li>
              <ValuesLetter>Q</ValuesLetter>
              <p>Quality</p>
            </li>
          </ul>
        </CoreValues>

        <TeamWrapper>
          <h2>Meet The Team</h2>
          <TeamCard>
            <header>
              <Img fixed={image1} />
              <h3>Prasanna Amitabh</h3>
              <span>CEO</span>
              <a href="https://www.linkedin.com/in/prasanna-amitabh-31a4751/">
                <Linked />
              </a>
            </header>
            <p>
              Prasanna brings more than 18 years of experience developing and
              supervising complex information technology (IT) programs, rolling
              out e-Business solutions while overseeing multi-million-dollar
              budgets. He is hands-on, a solution-oriented technology leader,
              skilled in reducing service costs and delivering projects on time
              and within budget for commercial clients and government agencies.
              He has documented success in turning around underperforming
              programs, is a patent-holder for “Customer Relationship Management
              System with Compliance Tracking Capabilities” program, and a
              multiple service-excellence award-winner.Prior to founding Zenius,
              Prasanna worked as Associate Partner at IBM, leading
              technologically and strategically complex programs for many
              government agencies. Prasanna has a Bachelor’s degree in
              Electronics and Telecommunications Engineering from National
              Institute of Technology, Durgapur (India), and holds a Master’s in
              Business Administration from University of Georgia, Terry College
              of Business.
            </p>
          </TeamCard>
          <TeamCard>
            <header>
              <h3>Dr. Danny Harris</h3>
              <span>Advisor</span>
              <a href="https://www.linkedin.com/in/danny-harris-74573b9/">
                <Linked />
              </a>
            </header>
            <p>
              Dr. Danny Harris is a retired Federal Executive (SES) with 34
              years of experience in information technology and financial
              management. Dr Harris is now the owner of a Single Member LLC
              named DA Harris Consulting, LLC., specializing in Executive
              Advisory Services in areas such as IT Investment Management,
              Financial Management Systems, Information Systems Implementations,
              and Project Management. Dr. Harris served as the Chief Information
              Officer (CIO) at the Department of Education from 2008 until 2016.
              As the CIO, he managed the Department’s enterprise-wide IT
              services, including its IT infrastructure, desktops, network,
              disaster recovery, and printing services, representing a billion
              dollars in annual IT spend. Additionally, he maintained the
              Department’s most mission critical Financial Management Systems,
              including the Accounting System, Contracts and Purchasing System,
              Travel Management System, the Department’s award winning Grants
              Management System, and its Web presence. Prior to becoming the
              CIO, Dr. Harris served as the Deputy CFO from 2004 –2008. He
              oversaw financial management, internal control and audit
              resolution, financial systems, contracts and procurement, and
              grants policy issues. He managed staff responsible for ensuring
              Department funds were spent appropriately, and staff responsible
              for the Department daily financial operations. Dr. Harris has
              served on the Board of Advisors for the Information Technology
              (IT) Department at the College of Southern Maryland from 1994 to
              present. He is also currently an adjunct professor at Howard
              University, teaching courses in Computer Technology. Prior to his
              tenure at Howard University, he taught at George Mason University,
              in disciplines such as Organizational Communications Management,
              Research Methodology and Design. Dr. Harris was recognized as one
              of the Top 100 Information Technology Leaders for 2012 by
              ComputerWorld. A native of North Carolina, Dr. Harris holds a B.A.
              in Communications from North Carolina A&T State University, and an
              M.A. and PhD. in Organizational Management from Howard University
            </p>
          </TeamCard>
          <TeamCard>
            <header>
              <h3>Vernon Fernandez</h3>
              <span>Advisor</span>
              <a href="https://www.linkedin.com/in/vernon-fernandes-6290565/">
                <Linked />
              </a>
            </header>
            <p>
              Vernon is an experienced Business Development and Program Delivery
              executive. He is passionate about leveraging technology to achieve
              business and mission results. He has spent the last 25 years of
              his career pursuing this goal – at NASA, leveraging Flight
              Dynamics technologies to fly satellites, at the IRS, directing a
              portfolio of transformation programs to lead the IRS into the
              digital age (electronic services for tax payers, and tax payer
              relationship management), at the EPA, building out an
              environmental electronic exchange between the EPA and the
              ecosystem of states, tribes and other partners, at DHS helping an
              agency leverage cloud technology to transform its mission
              operations and at USDA, advising clients on Business Intelligence
              and Mission Analytics to enhance their services. Vernon has worked
              at Deloitte and CSC serving clients across a number of federal
              agencies and at Link Simulation Systems helping clients in the
              utility industry. He is a founder and principal of HVF Consulting,
              which helps firms develop and execute on their growth strategies
              and is an adjunct professor at American University’s Kogod School
              of Business
            </p>
          </TeamCard>
        </TeamWrapper>
        <Contracts>
          <h3>Contract Vehicles</h3>
          <p>
            We are actively looking to broaden our role as government
            contractor. We currently have access to many contract vehicles as a
            subcontractor. With access to these contract vehicles, we continue
            to increase our ability to respond to business requests and expand
            our presence in the Federal space.
          </p>
          <ul>
            <li>GSA Alliant - Large Business</li>
            <li>CIO-SP3 – Large Business</li>
            <li>OASIS – Large Business</li>
            <li>OASIS - Small Business</li>
            <li>DLA JETS</li>
            <li>CMS SPARC</li>
            <li>DSS ConFLASC</li>
            <li>DISA SETI</li>
            <li>Seaport-NxG</li>
          </ul>
        </Contracts>
      </MainAbout>
    </Layout>
  );
};

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fixed(width: 125, height: 125) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "teamImages/ceo.jpg" }) {
      ...squareImage
    }
    image2: file(relativePath: { eq: "teamImages/advisor1.jpg" }) {
      ...squareImage
    }
    image3: file(relativePath: { eq: "teamImages/advisor2.jpg" }) {
      ...squareImage
    }
  }
`;

export default About;
