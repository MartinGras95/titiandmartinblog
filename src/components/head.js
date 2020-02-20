import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql} from  'gatsby'


const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        // setting the site title
        // title is the passed in title from the head in the page
        // second title is from the metadata query above
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`}/>
    )
}

export default Head