module.exports = {
  siteMetadata: {
    title: "Gatsby-Apollo-Typescript",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     typeName: 'RMAPI',
    //     fieldName: 'rickAndMorty',
    //     url: 'https://rickandmortyapi-gql.now.sh/',
    //   },
    // },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-apollo-typescript`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
  ],
};
