import React from 'react'

// component imports
import Header from '../components/header'
import Footer from '../components/footer'

// "props" is anything passed in from where Layout is used
// "props.children" is the JSX passed in from where the Layout is being used
const Layout = (props) =>{
    return(
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout