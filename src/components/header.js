import React from 'react'
import { Link,graphql,useStaticQuery } from 'gatsby'

// styles import
// css modules styling.
// explicitly importing styles and using them on specific tags
// prevents global styling messing up other components
// class names are generated for every time a class is used to keep it unique
import headerStyles from './header.module.scss'

const Header = () =>{
    // graphql query grabbing title attribute from metadata
    const data = useStaticQuery(graphql`
        query titleQuery {
            site {
            siteMetadata {
                title
            }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/" >Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/events">Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header