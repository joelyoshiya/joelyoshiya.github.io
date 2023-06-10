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
      <h1 className="text-3xl font-bold">{pageTitle}</h1>
      {children}
    </main>
  );
};

export default Layout;
