import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const ContactPage = () => {
  return (
    <main>
      <Layout pageTitle="Contact">
        <p>joel.foster@gmail.com</p>
      </Layout>
    </main>
  );
};

export const Head = () => (
  <>
    <Seo title="Contact" />
    <meta name="description" content="My contact info" />
  </>
);

export default ContactPage;
