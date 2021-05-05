import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { ThemeProvider } from "../context/themeContext"
import Header from "./header"
import Footer from "./footer"
import MobileNav from "./mobileNav"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider>
        <MobileNav siteTitle={data.site.siteMetadata.title} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="min-h-screen container m-auto px-5 md:px-20 pb-40 max-w-screen-xl">
          {children}
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
