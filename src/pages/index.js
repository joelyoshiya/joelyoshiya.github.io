import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProfileImage from "../components/profileImage";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Joelyoshiya.me">
        <ProfileImage />
        <p className="text-3xl text-emerald-500">
          I'm Joel, a product-driven software engineer and thinker
        </p>
        <p className="text-lg">
          I love to both explore the performance, scalability, and extensibility
          facets of a solution and
          <span className="font-semibold">
            {" "}
            always consider who we're building for.{" "}
          </span>
        </p>
      </Layout>
    </main>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
