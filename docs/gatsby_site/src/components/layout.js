import React from "react"
//import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'


import GitIcon from "../images/iconmonstr-github-1.svg"
// import InstaIcon from "../images/iconmonstr-instagram-11.svg"
import LinkedInIcon from "../images/iconmonstr-linkedin-3.svg"
import SpotifyLink from '../images/iconmonstr-spotify-1.svg'

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className={container}>
      <header>
        <h1 className={heading}>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
      </header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/about/" className={navLinkText}>
              about
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/projects/" className={navLinkText}>
              projects
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog/" className={navLinkText}>
              blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact/" className={navLinkText}>
              contact
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>
        <a
            href="https://github.com/joelyoshiya"
            target="_blank"
            rel="noreferrer"
          >
          <GitIcon />
          {''}
        </a>
        <a
          href="https://www.linkedin.com/in/joel-yoshiya-foster/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
          {' '}
        </a>
        <a
          href="https://open.spotify.com/user/1229025912"
          target="_blank"
          rel="noreferrer"
        >
          <SpotifyLink />
        </a>
        <p>
          Built with{" "}
          <span role="img" aria-labelledby="jsx-ally/accessible-emoji">
            💚
          </span>{" "}
          by Joel Yoshiya Foster
        </p>
      </footer>
    </div>
  )
}
