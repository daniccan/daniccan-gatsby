module.exports = {
  siteMetadata: {
    title: `DANICCAN VEERAPANDIAN`,
    description: `Personal Website of Daniccan`,
    author: `Daniccan`,
    socialMedia: {
      twitter: "https://twitter.com/PassionDani",
      linkedIn: "https://www.linkedin.com/in/daniccan-veerapandian-49921650/",
      github: "https://github.com/daniccan",
      stackOverflow: "https://stackoverflow.com/users/2764789/daniccan",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
  ],
}
