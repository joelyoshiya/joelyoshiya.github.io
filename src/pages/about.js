// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About This Site">
        <p>This site was built with Gatsby.js.</p>
      </Layout>
    </main>
  );
};

// Step 2.5: Add a page title to the <Head>
export const Head = () => (
  <>
    <title>About This Site</title>
    <meta name="description" content="Describes how this site was built" />
  </>
);

// Step 3: Export your component
export default AboutPage;
