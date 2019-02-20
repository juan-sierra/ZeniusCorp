import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        vision: file(relativePath: { eq: "vision.svg" }) {
          childImageSharp {
            fixed(height: 1000, width: 1000) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.vision.childImageSharp.fixed} />}
  />
);
export default HeroImage;
