import React from 'react' 
// To link between pages for optimization. Clicking on a link the content will load instantly.
import { graphql,useStaticQuery } from 'gatsby' 

// component imports
import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'
import Image from 'gatsby-image'

const homeImage = require('../images/backpack.jpg')

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
            <h1 className={indexStyles.title}>Life is out there.</h1>
            <img className={indexStyles.image} src={ homeImage } alt="Titi and martin"/>
            <Image fluid = {homeImage} />
            {/* <p>Check out <a target="_blank" href={data.site.siteMetadata.youtube} rel="noopener noreferrer">our youtube channel!</a> </p> */}
        </Layout>
    )
}

// Export Component
export default IndexPage