import React from 'react'
import { graphql,useStaticQuery,Link } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'


// Create component
const BlogPage = () =>{
    // // Query getting the markdown files from the file system
    // const data = useStaticQuery(graphql`
    // query blogInfoQuery {
    //   allMarkdownRemark {
    //     edges {
    //       node {
    //         frontmatter {
    //           title
    //           date
    //         }
    //         html
    //         excerpt
    //         fields {
    //           slug
    //         }
    //       }
    //     }
    //   }
    // }    
    // `)

    // Contentful query
    const data = useStaticQuery(graphql`
      query {
        allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
          edges {
            node {
              title
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    `)

    // content
    return (
        <Layout>
            <Head title="Blog" />
            <h1>Our Blogs</h1>
            <ol className={blogStyles.posts}>
                {/* 1. fetching data from the query above
                    2. using map function to iterate through all posts
                    3. for each post return the post title and date as a list item
                */}
                {data.allContentfulBlogPost.edges.map((edge) =>{
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

// Export component
export default BlogPage