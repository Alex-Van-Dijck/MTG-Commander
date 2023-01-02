module.exports = {
  siteMetadata: {
    title: "MTG: Commander",
    description: "Commander page desc",
    author: "@alexvandijck",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * De volledige URL van je Headless WordPress site's GraphQL API.
         * Voorbeeld : "https://www.example-site.com/graphql"
         */
        url: "http://mtg-commander.local/graphql",
        schema:{
          timeout: 5000000
        }
        
      },
    },
  ],
};