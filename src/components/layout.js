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
    <div className="h-screen bg-inherit dark:bg-inherit md:bg-gradient-to-br md:from-white md:from-30% md:to-emerald-100 md:dark:bg-gradient-to-br dark:md:from-black dark:md:from-30% dark:md:to-emerald-900">
      <main>
        <Navbar siteTitle={data.site.siteMetadata.title} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
