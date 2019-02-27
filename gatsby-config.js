module.exports = {
  siteMetadata: {
    title: `Zenius Corporation`,
    description: `United States Small Business Administration (SBA) program for small companies that operate and employ people in Historically Underutilized Business Zones.`,
    author: "@juan-sierra",
    menuLinks: [
      {
        name: "About",
        link: "/about"
      },
      {
        name: "Services",
        link: "/services"
      },
      {
        name: "Clients",
        link: "/clients"
      },
      {
        name: "Contact",
        link: "/contact"
      }
    ],
    subLinks: [
      {
        name: "Careers",
        link: "/careers"
      },
      {
        name: "News",
        link: "/news"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
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
        name: `zenius logo`,
        short_name: `zenius corp`,
        start_url: `/`,
        icon: `src/images/zenius_1.jpg`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `team`,
        path: `${__dirname}/src/data/about/team`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services`,
        path: `${__dirname}/src/data/services`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `teamImages`,
        path: `${__dirname}/src/images/team`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `clientsLogos`,
        path: `${__dirname}/src/images/clients-logos`
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
