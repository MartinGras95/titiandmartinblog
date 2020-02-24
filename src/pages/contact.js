import React from 'react'

// Components imports
import Layout from '../components/layout'
import Head from '../components/head'


const ContactPage = () =>{
    return(
        <Layout>
            <Head title="Contact" />
            <h1>Contact Us</h1>
            <p>Email: somemail@gmail.com</p>
            {/* <p>Tweet us <a href="https://www.twitter.com/titixmartin" target="_blank" rel="noopener noreferrer">@titixmartin</a></p> */}
        </Layout>
    )
}

export default ContactPage