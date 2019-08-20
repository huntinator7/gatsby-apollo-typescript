module.exports = {
  siteMetadata: {
    title: 'Suited Connector Compliance',
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
  ],
};
