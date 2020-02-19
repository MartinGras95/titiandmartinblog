/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  // Metadata
  siteMetadata:{
    title: "Martin Gras",
    description:"My name is Martin and i'm a full time web development student at Napier University :)",
    author: "Martin Gras",
    email: "martin.gras95@gmail.com",
    portfolio:"https://martingras95.github.io/"
  },

  // Plugins
  plugins:[
    // scss
    'gatsby-plugin-sass',
    // filesystem, because it is an object it need resolve to name it
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        //source directory
        name: 'src',
        // path to the src directory
        path: `${__dirname}/src/`
      }
    }
  ]
}
