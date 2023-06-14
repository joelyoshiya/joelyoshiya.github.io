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
    <div className="min-h-screen bg-gradient-to-br from-white from-30% to-emerald-100 dark:bg-gradient-to-br dark:from-black dark:from-30% dark:to-emerald-900">
      <main>
        <Navbar siteTitle={data.site.siteMetadata.title} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
