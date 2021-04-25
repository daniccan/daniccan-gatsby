import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import SOCIALMEDIAICONS from "../constants/socialMediaIcons"

const Footer = _ => {
  const data = useStaticQuery(graphql`
    query SocialMediaQuery {
      site {
        siteMetadata {
          title
          socialMedia {
            twitter
            linkedIn
            github
            stackOverflow
          }
        }
      }
    }
  `)

  return (
    <footer className="w-full h-48 bg-secondary text-footerSecondary">
      <div className="container h-full m-auto px-5 md:px-20 py-12 max-w-screen-xl">
        <div className="container flex-col justify-between md:space-y-8">
          <nav className="hidden md:flex flex-row items-center space-x-6 justify-center md:justify-end text-sm tracking-widest">
            <Link to="/">HOME</Link>
            <Link to="/blog">BLOG</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/about">ABOUT</Link>
          </nav>
          <div className="flex flex-col-reverse md:flex-row md:justify-between space-y-reverse space-y-8 md:space-y-0">
            <span className="text-xs tracking-wider self-center md:self-end">
              © {data.site.siteMetadata.title}. ALL RIGHTS RESERVED.
            </span>
            <div className="flex flex-row items-center space-x-4 justify-center md:justify-end">
              <span>
                <a href={data.site.siteMetadata.socialMedia.twitter}>
                  {SOCIALMEDIAICONS.twitter}
                </a>
              </span>
              <span>
                <a href={data.site.siteMetadata.socialMedia.linkedIn}>
                  {SOCIALMEDIAICONS.linkedIn}
                </a>
              </span>
              <span>
                <a href={data.site.siteMetadata.socialMedia.github}>
                  {SOCIALMEDIAICONS.github}
                </a>
              </span>
              <span>
                <a href={data.site.siteMetadata.socialMedia.stackOverflow}>
                  {SOCIALMEDIAICONS.stackOverflow}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
