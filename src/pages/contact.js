import React from 'react'

// Components imports
import Footer from '../components/footer'
import Header from '../components/header'

const ContactPage = () =>{
    return(
        <div>
            <Header />
            <h1>Contact Me</h1>
            <h2>Tweet at me <a href="https://www.twitter.com" target="_blank">MartinGras</a></h2>
            <Footer />
        </div>
    )
}

export default ContactPage