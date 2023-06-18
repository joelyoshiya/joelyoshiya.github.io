import * as React from "react";
import Navbar from "./navbar";
import { useStaticQuery, graphql } from "gatsby";
import Footer from "./footer";

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
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-white from-30% to-emerald-100 dark:bg-gradient-to-br dark:from-black dark:from-30% dark:to-emerald-900">
      <main className="flex-grow">
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <div className="px-16">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
