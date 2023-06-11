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
    <div>
      <main>
        <Navbar siteTitle={data.site.siteMetadata.title} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
