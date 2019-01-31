import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import styled from "styled-components";

const ContactWrapper = styled.section``;

const ContactInner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 20px;
`;

const Contact = () => (
  <Layout>
    <SEO title="Services" />
    <ContactWrapper>
      <ContactInner>
        <h1>Contact</h1>

        <h3>Address:</h3>
        <p>305 Harrison St SE #200C Leesburg, VA 20175</p>
        <h3>Contacts</h3>
        <p>
          Email: info@zeniuscorp.com Phone: +1 (855) ZENIUSC Fax: +1 (855) 936
          4872
        </p>
      </ContactInner>
    </ContactWrapper>
  </Layout>
);

export default Contact;
