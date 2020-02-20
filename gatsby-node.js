// This file is a node config file which allows to tap into node api which gatsby exposes

const path = require('path')

// Whenever server starts this is executed
// Tapping into all of the nodes of the website
module.exports.onCreateNode = ({node,actions}) =>{
    const { createNodeField } = actions

    // if the type of the node is "internal" and is called "MarkdownRemark"
    // get the slug which is the name of the file which is located in the absolute path of each node
    if(node.internal.type ==='MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md')

        // create a slug for each blog post which can now be accesed in graphql
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

// Dynamic generation of pages

module.exports.createPages = async ({ graphql,actions}) =>{
    const { createPage } = actions

    // 1. get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js')

    // 2. get markdown data slug
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    // 3. create new pages.
    res.data.allMarkdownRemark.edges.forEach((edge) =>{
        createPage({
            // the template path
            component: blogTemplate,
            // path of new created page
            path: `/blog/${edge.node.fields.slug}`,
            // Things to pass down to the template
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}