import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About This Site">
        <p>This site was built with Gatsby.js.</p>
      </Layout>
    </main>
  );
};

export const Head = () => (
  <>
    <Seo title="About" />
    <meta name="description" content="Describes how this site was built" />
  </>
);

export default AboutPage;
