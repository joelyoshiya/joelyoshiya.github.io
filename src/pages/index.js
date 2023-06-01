// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Joel Yoshiya Foster">
        <p>This is the start of my personal site.</p>
        <StaticImage
          alt="a creative coding generated gradient image"
          src="../images/gradient.png"
        />
      </Layout>
    </main>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
