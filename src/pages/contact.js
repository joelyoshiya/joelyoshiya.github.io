import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

// Step 2: Define your component
const ContactPage = () => {
  return (
    <main>
      <Layout pageTitle="Contact">
        <p>joel.foster@gmail.com</p>
      </Layout>
    </main>
  );
};

// Step 2.5: Add a page title to the <Head>
export const Head = () => (
  <>
    <Seo title="Contact" />
    <meta name="description" content="My contact info" />
  </>
);

// Step 3: Export your component
export default ContactPage;
