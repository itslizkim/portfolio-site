import * as React from 'react';
import { Link } from 'gatsby';
import { 
    container,
    main,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => { 
    return (
    <div className={container}>
        <title>{pageTitle}</title>

        <Link to={"/"} style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline`, fontSize: `30px` }}>
            LizKim
          </h3>
        </Link>
        <nav>
            <ul className={navLinks}>
                
                <li className={navLinkItem}>
                    <Link to="/projects" classname={navLinkText}>
                        Projects
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/resume" classname={navLinkText}>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
        <main className={main}>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
    </div>  
    )
}
export default Layout