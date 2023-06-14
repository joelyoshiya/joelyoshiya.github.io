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
    <div className="h-screen bg-gradient-to-br from-white to-emerald-100 dark:bg-gradient-to-tl dark:from-emerald-900 dark:to-black">
      <main>
        <Navbar siteTitle={data.site.siteMetadata.title} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
