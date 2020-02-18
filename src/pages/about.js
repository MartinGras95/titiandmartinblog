import React from 'react'
import { Link } from 'gatsby'

// Component imports
import Footer from '../components/footer'
import Header from '../components/header'


// Create component
const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Me</h1>
            <h2>Contact me by email: martin.gras95@gmail.com</h2>
            <p>Contact details <Link to="/contact">here</Link></p>
            <Footer />
        </div>
    )
}

// Export component
export default AboutPage