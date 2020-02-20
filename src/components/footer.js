import React from 'react'
import { graphql,useStaticQuery} from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () =>{
    // graphql query grabbing author attribute from metadata
    const data = useStaticQuery(graphql`
        query authorQuery {
            site {
            siteMetadata {
                authorMartin
                authorTiti
            }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <p>Created by {data.site.siteMetadata.authorMartin}, copyright 2020</p>
        </footer>
    )
}

export default Footer