import React from 'react'

import Layout from '../components/layout'
import { graphql,useStaticQuery} from 'gatsby'

// Create component
const BlogPage = () =>{
    // Query getting the markdown files from the file system
    const data = useStaticQuery(graphql`
    query blogInfoQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
            }
          }
        }
      }      
    `)

    // content
    return (
        <Layout>
            <h1>My Blog</h1>
            <ol>
                {/* 1. fetching data from the query above
                    2. using map function to iterate through all posts
                    3. for each post return the post title and date as a list item
                */}
                {data.allMarkdownRemark.edges.map((edge) =>{
                    return (
                        <li>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

// Export component
export default BlogPage