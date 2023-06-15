import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProfileImage from "../components/profileImage";
import ChatBubbleDialogue from "../components/chatBubbleDialogue";
import ProjectCarousel from "../components/projectCarousel";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="joelyoshiya.me">
        <div className="px-16">
          <ProfileImage />
          <p className="pb-1 text-3xl text-emerald-500 dark:text-emerald-300 md:text-5xl lg:text-6xl">
            Hi! ✌️ I'm Joel, a product-driven software engineer and thinker
          </p>
          <p className="mb-10 mt-2 text-lg md:text-xl lg:text-3xl">
            I love to both explore the performance, scalability, and
            extensibility facets of a solution and
            <span className="font-semibold">
              {" "}
              always consider who we're building for.{" "}
            </span>
          </p>
          <ChatBubbleDialogue text={"Tell me more about yourself!"} />
          {/* <ProjectCarousel /> */}
        </div>
      </Layout>
    </main>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
