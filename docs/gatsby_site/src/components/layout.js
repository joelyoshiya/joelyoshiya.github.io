import React from "react"
//import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styles from "./layout.module.css"

import GitIcon from "../images/iconmonstr-github-1.svg"
// import InstaIcon from "../images/iconmonstr-instagram-11.svg"
import LinkedInIcon from "../images/iconmonstr-linkedin-3.svg"
import SpotifyLink from "../images/iconmonstr-spotify-1.svg"

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
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li className={styles.navLinkItem}>
              <Link to="/" className={styles.navLinkText}>
                Portfolio
              </Link>
            </li>
            <li className={styles.navLinkItem}>
              <Link to="/projects/" className={styles.navLinkText}>
                Projects
              </Link>
            </li>
            <li className={styles.navLinkItem}>
              <Link to="/blog/" className={styles.navLinkText}>
                Blog
              </Link>
            </li>
            <li className={styles.navLinkItem}>
              <Link to="/contact/" className={styles.navLinkText}>
                Contact
              </Link>
            </li>
            <li className={styles.navLinkItem}>
              <Link to="/about/" className={styles.navLinkText}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/joelyoshiya"
          target="_blank"
          rel="noreferrer"
        >
          <GitIcon />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/joel-yoshiya-foster/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />{" "}
        </a>
        <a
          href="https://open.spotify.com/user/1229025912"
          target="_blank"
          rel="noreferrer"
        >
          <SpotifyLink />{" "}
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
