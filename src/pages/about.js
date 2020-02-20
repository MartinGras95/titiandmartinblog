import React from 'react'
import { Link } from 'gatsby'

// Component imports
import Layout from '../components/layout'

// Create component
const AboutPage = () => {
    return (
        <Layout>
            <h1>About Us</h1>
            <p>Contact details <Link to="/contact">here</Link></p>
        </Layout>
    )
}

// Export component
export default AboutPage