import React from "react"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <h1>About this site</h1>
      <p>
        This site was built using <a href="https://www.gatsbyjs.com/">Gatsby</a>
        , a static site generator based on React.
      </p>
      <p>
        The site is hosted via an integration with{" "}
        <a href="https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/">
          Github pages.
        </a>
      </p>
    </Layout>
  )
}
