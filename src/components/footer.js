import React from 'react'
import { graphql,useStaticQuery} from 'gatsby'

const Footer = () =>{
    // graphql query grabbing author attribute from metadata
    const data = useStaticQuery(graphql`
        query authorQuery {
            site {
            siteMetadata {
                author
            }
            }
        }
    `)

    return (
        <footer>
            <p>Created by {data.site.siteMetadata.author}, copyright 2020</p>
        </footer>
    )
}

export default Footer