import React from 'react' 
// To link between pages for optimization. Clicking on a link the content will load instantly.
import { graphql,useStaticQuery } from 'gatsby' 

// component imports
import Layout from '../components/layout'
import Head from '../components/head'

// Create Component
const IndexPage = () => {
    // graphql query grabbing description attribute from metadata
    const data = useStaticQuery(graphql`
        query descriptionQuery {
            site {
            siteMetadata {
                description
                youtube
            }
            }
        }
    `)
    return (
        <Layout>
            <Head title="Home" />
            <h1>Hello</h1>
            <h2>{data.site.siteMetadata.description}</h2>
            <p>Check out <a target="_blank" href={data.site.siteMetadata.youtube} rel="noopener noreferrer">our youtube channel!</a> </p>
        </Layout>
    )
}

// Export Component
export default IndexPage