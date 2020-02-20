import React from 'react' 
// To link between pages for optimization. Clicking on a link the content will load instantly.
import { Link,graphql,useStaticQuery } from 'gatsby' 

// component imports
import Layout from '../components/layout'


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
            <h1>Hello</h1>
            <h2>{data.site.siteMetadata.description}</h2>
            <p>Check out <a target="_blank" href={data.site.siteMetadata.youtube}>our youtube channel!</a> </p>
        </Layout>
    )
}

// Export Component
export default IndexPage