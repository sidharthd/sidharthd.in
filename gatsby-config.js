module.exports = {
  siteMetadata: {
    title: `Sidharth D | Co-Founder and CTO of Firstbyte Digital Solutions`,
    description: `Sidharth is a software engineer and entrepreneur. He builds custom applications for businesses. Being the Co-Founder and CTO of Firstbyte Digital Solutions, Sidharth can help your business to transform digitally.`,
    author: `@sidarthdin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sidharth D`,
        short_name: `Sidharth D`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#FFF`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
