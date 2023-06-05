import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

// Step 2: Define your component
const BlogPage = () => {
  return (
    <main>
      <Layout pageTitle="Yoshi's Word  Island - a blog by Joel Yoshiya Foster">
        <p>This is the start of my blog</p>
      </Layout>
    </main>
  );
};

// Step 2.5: Add a page title to the <Head>
export const Head = () => (
  <>
    <Seo title="Blog" />
    <meta name="description" content="Describes how this site was built" />
  </>
);

// Step 3: Export your component
export default BlogPage;
