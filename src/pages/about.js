import React from 'react'
import { Link } from 'gatsby'

// Component imports
import Layout from '../components/layout'

// Create component
const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <h2>Contact me by email: martin.gras95@gmail.com</h2>
            <p>Contact details <Link to="/contact">here</Link></p>
        </Layout>
    )
}

// Export component
export default AboutPage