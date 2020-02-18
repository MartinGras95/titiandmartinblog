import React from 'react'
import { Link } from 'gatsby'

// Create component
const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <h2>Contact me by email: martin.gras95@gmail.com</h2>
            <p>Contact details <Link to="/contact">here</Link></p>
        </div>
    )
}

// Export component
export default AboutPage