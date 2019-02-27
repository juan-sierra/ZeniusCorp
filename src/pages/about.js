import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import TeamSVG from "../images/team.svg";
import ContractSVG from "../images/contract.svg";
import { Linkedin } from "styled-icons/boxicons-logos/Linkedin";
import { data } from "../data/index.js";

const MainAbout = styled.section`
  padding: 20px;
  min-height: 100vh;
`;

const AboutHeader = styled.header`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
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
`;

const CoreValues = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  p {
    font-size: 1.5em;
  }
`;

const ValuesLetter = styled.span`
  font-size: 3em;
  color: #24b7db;
  font-weight: bolder;
`;

const TeamWrapper = styled.div`
  min-height: 100vh;
  h2 {
    text-align: center;
    font-size: 2em;
    margin-bottom: 25px;
  }
`;

const TeamCard = styled.article`
  text-align: center;
  margin-bottom: 2.5em;
  max-width: 70vw;
  header {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  a {
    padding: 20px;
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    color: #24b7db;
  }
  p {
    text-align: left;
  }
  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
  }
  &:nth-child(3n) {
    img {
      width: 150px;
      height: 168px;
    }
  }
`;

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Linked = styled(Linkedin)`
  height: 45px;
  width: 45px;
  margin-top: -1em;
`;

const Contracts = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: center;
  h3 {
    font-size: 1.5em;
  }
  p {
    font-size: 1.2em;
  }
  ul {
    margin: 0;
  }
  img {
    max-width: 100%;
  }
`;

const About = () => {
  const aboutObj = data.about[0];
  const teamObj = data.about[0].team;
  return (
    <Layout>
      <SEO title="About" />
      <MainAbout>
        <AboutHeader>
          <div>
            <h1>About Us</h1>
            <p>{aboutObj.description}</p>
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
          <header>
            <h2>Meet The Team</h2>
          </header>
          <CardContainer>
            {teamObj.map(team => (
              <TeamCard>
                <header>
                  <img src={team.img} />
                  <h3>{team.name}</h3>
                  <span>{team.title}</span>
                  <a href={team.linkedin} target="_blank">
                    <Linked />
                  </a>
                </header>
                <p>{team.description}</p>
              </TeamCard>
            ))}
          </CardContainer>
        </TeamWrapper>
        <Contracts>
          <div>
            <h3>Contract Vehicles</h3>
            <p>
              We are actively looking to broaden our role as government
              contractor. We currently have access to many contract vehicles as
              a subcontractor. With access to these contract vehicles, we
              continue to increase our ability to respond to business requests
              and expand our presence in the Federal space.
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
          </div>
          <div>
            <img src={ContractSVG} />
          </div>
        </Contracts>
      </MainAbout>
    </Layout>
  );
};

export default About;
