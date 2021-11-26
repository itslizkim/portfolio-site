import * as React from 'react';
import { Link } from 'gatsby';
import { 
    container,
    heading,
    body,
    navBar,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'


const Layout = ({ pageTitle, children }) => { 
    return (
    <div className={container}>
        <nav className={navBar}>
            <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link to="/" className={navLinkText}>
                        LizKim
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/projects" className={navLinkText}>
                        Projects
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/resume" className={navLinkText}>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
        <main className={body}>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
    </div>  
    )
}
export default Layout