import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import TeamSVG from "../images/team.svg";
import ContractSVG from "../images/contract.svg";
import { Linkedin } from "styled-icons/boxicons-logos/Linkedin";
import { data } from "../data/index.js";

const About = () => {
  const aboutObj = data.about[0];
  const teamObj = data.about[0].team;
  return (
    <Layout>
      <SEO title="About" />
      <h1>About</h1>
    </Layout>
  );
};

export default About;
