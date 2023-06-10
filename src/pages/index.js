import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProfileImage from "../components/profileImage";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Joelyoshiya.me">
        <p>
          I'm a product-driven engineer who loves to both explore the
          performance, scalability, and extensibility facets of a solution while
          also considering the people we're building for every stop along the
          way.
        </p>
        <ProfileImage />
      </Layout>
    </main>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
