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
    <div className="h-screen bg-inherit from-white to-emerald-100 dark:bg-inherit dark:from-emerald-900 dark:to-black md:bg-gradient-to-br md:dark:bg-gradient-to-tl">
      <main>
        <Navbar siteTitle={data.site.siteMetadata.title} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
