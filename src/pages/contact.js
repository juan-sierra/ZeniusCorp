import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import EmailSVG from "../images/email.svg";

const ContactWrapper = styled.div`
  padding: 20px;
  min-height: 100vh;
`;

const ContactIntro = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  h1 {
    font-size: 3.5em;
  }
  img {
    max-width: 100%;
  }
  div {
    display: flex;
    align-items: center;
    a {
      color: inherit;
      padding: 0.5em;
    }
    a:hover {
      color: #24b7db;
    }
    p {
      padding: 0.5em;
    }
  }
`;

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactWrapper>
        <ContactIntro>
          <header>
            <h1>Contact Us</h1>
            <h2>Address</h2>
            <p>305 Harrison St SE #200C Leesburg, VA 20175</p>
            <h2>Contacts</h2>
            <div>
              <span>Email:</span>
              <a href="mailto:info@zeniuscorp.com" target="_top">
                info@zeniuscorp.com
              </a>
            </div>
            <div>
              <span>Phone:</span>
              <p>+1 (855) ZENIUSC</p>
            </div>
            <div>
              <span>Fax:</span>
              <p>+1 (855) 936 4872</p>
            </div>
          </header>
          <div>
            <img src={EmailSVG} />
          </div>
        </ContactIntro>
      </ContactWrapper>
    </Layout>
  );
};

export default Contact;
