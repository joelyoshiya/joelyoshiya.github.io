import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Joel Yoshiya Foster">
        <p>
          I'm a product-driven engineer who loves to both explore the
          performance, scalability, and extensibility facets of a solution while
          also considering the people we're building for every stop along the
          way.
        </p>
        <StaticImage
          alt="a creative coding generated gradient image"
          src="../images/profile.jpeg"
        />
      </Layout>
    </main>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
