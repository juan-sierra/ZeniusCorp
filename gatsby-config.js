module.exports = {
  siteMetadata: {
    title: `Zenius Corp`,
    description: `United States Small Business Administration (SBA) program for small companies that operate and employ people in Historically Underutilized Business Zones.`,
    author: `@juan-sierra`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        icon: `src/images/company-logos/zenius_1.jpg`
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Nunito:400,700,800"]
        }
      }
    }
  ]
};
