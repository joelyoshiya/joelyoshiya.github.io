import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = () => {
  return (
    <main>
      <Layout pageTitle="Yoshi's Word  Island - a blog by Joel Yoshiya Foster">
        <p>This is the start of my blog</p>
      </Layout>
    </main>
  );
};

export const Head = () => (
  <>
    <Seo title="Blog" />
    <meta name="description" content="blog portion of my portfolio site" />
  </>
);

export default BlogPage;
