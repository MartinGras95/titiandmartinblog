import React from 'react' 
// To link between pages for optimization. Clicking on a link the content will load instantly.
import { Link } from 'gatsby' 

// Create Component
const IndexPage = () => {
    return(
        <div>
            <h1>Hello</h1>
            <h2>Hey, name's Martin :) I'm a web deve student.</h2>
            <p>Find out more about me <Link to="/about">here</Link></p>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </div>
    )
}

// Export Component
export default IndexPage