import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
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
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {' '}
      <Link
        to={"/blog/"}
        css={css`
          float: right;
        `}
      >
        Blog
      </Link>
      <Link
        to={"/contact/"}
        css={css`
          float: right;
        `}
      >
        Contact
      </Link>
      <Link
        to={"/projects/"}
        css={css`
          float: right;
        `}
      >
        Projects
      </Link>
      {children}
      <div>
      <a href="https://github.com/joelyoshiya" target="_blank" rel="noreferrer" >
      <img
            src={'src/images/iconmonstr-github-1.svg'}
            alt="Github"
            style={{ width: '14em', height: '10em' }}
          />
      </a>
      <a href="https://www.instagram.com/yoshi._j/" target="_blank" rel="noreferrer" >
        Instagram
      </a>
      <a href="https://www.linkedin.com/in/joel-yoshiya-foster/" target="_blank" rel="noreferrer" >
        LinkedIn
      </a>
      <a href="https://open.spotify.com/user/1229025912" target="_blank" rel="noreferrer" >
        Spotify
      </a>
      <p>
        Built with{" "}  
        <span role="img" aria-labelledby="jsx-ally/accessible-emoji">
          💚
        </span>{" "}
          by Joel Yoshiya Foster
      </p>
    </div>
    </div>
  )
}
