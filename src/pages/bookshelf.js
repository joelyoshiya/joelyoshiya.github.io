import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BookShelfPage = () => {
  return (
    <main>
      <Layout pageTitle="Yoshi's Word  Island - a blog by Joel Yoshiya Foster">
        <ol>
          <li>Ametora</li>
          <li>Figuring</li>
          <li>Zero To One</li>
        </ol>
      </Layout>
    </main>
  );
};

export const Head = () => (
  <>
    <Seo title="Bookshelf" />
    <meta name="description" content="some recommended books" />
  </>
);

export default BookShelfPage;
