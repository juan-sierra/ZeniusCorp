import React from "react";
import Layout from "../components/layout";
import { data } from "../data/index.js";

import styled from "styled-components";

const ClientsWrapper = styled.section`
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 1.2em;
  }
`;

const ClientCard = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  div {
    background: #eee;
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      text-transform: uppercase;
    }
    img {
      height: 150px;
      width: 150px;
      margin: auto;
    }
  }
`;

const Clients = () => {
  const clientsObj = data.clients;
  return (
    <Layout>
      <ClientsWrapper>
        <h1>Our Clients</h1>
        <ClientCard>
          {clientsObj.map(client => (
            <div>
              <img src={client.img} />
              <h2>{client.title}</h2>
              <p>{client.description}</p>
            </div>
          ))}
        </ClientCard>
      </ClientsWrapper>
    </Layout>
  );
};

export default Clients;
