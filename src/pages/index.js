import React from 'react' 
// To link between pages for optimization. Clicking on a link the content will load instantly.
import { Link } from 'gatsby' 

// component imports
import Layout from '../components/layout'

// Create Component
const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello</h1>
            <h2>Hey, name's Martin :) I'm a web deve student.</h2>
            <p>Find out more about me </p>
        </Layout>
    )
}

// Export Component
export default IndexPage