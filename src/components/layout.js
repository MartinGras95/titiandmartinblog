import React from 'react'

// component imports
import Header from '../components/header'
import Footer from '../components/footer'

// style sheets import
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

// "props" is anything passed in from where Layout is used
// "props.children" is the JSX passed in from where the Layout is being used
const Layout = (props) =>{
    return(
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout