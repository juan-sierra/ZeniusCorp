import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "HUBZONE.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Image2 fluid={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
);

const Image2 = styled(Img)`
  max-width: 50%;
  margin: 0 auto;
`;

export default Image;
