// Step 1: Import React
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Joel Yoshiya Foster">
        <p>This is the start of my personal site.</p>
        <StaticImage
          alt="a creative coding generated gradient image"
          src="../images/profile.jpeg"
        />
      </Layout>
    </main>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />;

// Step 3: Export your component
export default IndexPage;
