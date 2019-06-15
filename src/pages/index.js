import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import heroImage from "../images/data.jpg";

const MainPage = styled.main``;

const MainContent = styled.section`
    max-width: 970px;
    margin: auto;
    height: 100vh;
    padding-top: 3em;
`;

const IMAGE = styled.div`
    background-image: url(${heroImage});
    height: 100%;
    width: 100%;
    position: absolute;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    left: 0;
    right: 0;
    top: 11.2em;
    z-index: -2;
`;

const HeroCard = styled.article`
    padding: 15px;
    background: #162e51;
    max-width: 20rem;
    padding: 20px;
    color: #fff;
    h1 {
        font-size: 3em;
    }
    p {
        font-size: 1.06471rem;
    }
    button {
        background: #005ea2;
        padding: 15px;
        color: #fff;
        border: none;
        font-size: 1.06471rem;
        border-radius: 0.25rem;
        text-align: center;
    }
`;

const IndexPage = ({ siteTitle }) => (
    <Layout>
        <SEO
            title="Home"
            keywords={[
                `small business`,
                `IT`,
                `financial management`,
                `hubzone`,
                `leesburg, va`,
                `united states`,
                `cloud`,
                `data`,
                `systems development`,
                `applications development`,
                `Zenius Corporation`,
                `Zenius Corp`,
                `federal IT`,
                `federal IT services`
            ]}
        />
        <MainPage>
            <MainContent>
                <IMAGE />
                <HeroCard>
                    <h1>Turning Visions into Solutions</h1>
                    <p>
                        As a trusted advisors to our clients, we offer expertise
                        in solving complex and multi-dimensional operational and
                        technical challenges.{" "}
                    </p>
                    <button>Learn more about us</button>
                </HeroCard>
            </MainContent>
            <div>
                <h1>Tag Line Right Here</h1>
            </div>
        </MainPage>
    </Layout>
);

export default IndexPage;
