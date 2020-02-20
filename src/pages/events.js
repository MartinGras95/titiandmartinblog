import React from 'react'
import { graphql,useStaticQuery,Link } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'


// Create component
const EventPage = () =>{

    // Contentful query
    const data = useStaticQuery(graphql`
    query  {
        allContentfulEvents {
          edges {
            node {
              title
              slug
              eventDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
      
    `
    )

    // content
    return (
        <Layout>
            <Head title="Events" />
            <h1>Upcoming Events</h1>
            <ol className={blogStyles.posts}>
                {/* 1. fetching data from the query above
                    2. using map function to iterate through all posts
                    3. for each post return the post title and date as a list item
                */}
                {data.allContentfulEvents.edges.map((edge) =>{
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/event/${edge.node.slug}`}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.eventDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

// Export component
export default EventPage