import React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'


// Create component
const BlogPage = () =>{
    return (
        <div>
            <Header />
            <h1>My Blog</h1>
            <p>Posts will show up here.</p>
            <Footer />
        </div>
    )
}

// Export component
export default BlogPage