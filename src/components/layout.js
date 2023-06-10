import * as React from "react";
import Navbar from "./navbar";
import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <main>
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <div className="ml-16">{children}</div>
    </main>
  );
};

export default Layout;
