/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  // Metadata
  siteMetadata:{
    title: "Titi & Martin Blog",
    description:"Hey and welcome to our official blog!",
    authorMartin: "Martin Gras",
    authorTiti: "Titi Gras",
    email: "titilayo.martin@gmail.com",
    youtube:"https://www.youtube.com/channel/UCG3XCVHlLbSkLM5d5nxCcug"
  },

  // Plugins
  plugins:[
    // contentful
    {
      resolve: 'gatsby-source-contentful',
      options:{
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    // scss
    'gatsby-plugin-sass',
    // plugin for images
    'gatsby-plugin-sharp',
    // Helmet
    'gatsby-plugin-react-helmet',
    // filesystem, because it is an object it need resolve to name it
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        //source directory
        name: 'src',
        // path to the src directory
        path: `${__dirname}/src/`
      }
    },
    {
      // remark (convert markdown to html)
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            // using images in markdown
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }

        ]
      }
    }
  ]
}
