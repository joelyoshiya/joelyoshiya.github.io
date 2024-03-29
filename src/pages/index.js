import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProfileImage from "../components/profileImage";
import Typed from "typed.js";
// import ChatBubbleDialogue from "../components/chatBubbleDialogue";
// import ProjectCarousel from "../components/projectCarousel";
import ExtLink from "../components/extLink";

const IndexPage = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hi! ✌️",
        "I'm Joel. A product-driven software engineer and thinker.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      cursorChar:
        '<span class="text-3xl text-emerald-500 dark:text-emerald-300 md:text-5xl lg:text-6xl">|</span>',
      onComplete: (self) => {
        self.cursor.remove();
      },
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <Layout pageTitle="joelyoshiya.me">
        <ProfileImage />
        <div className="mt-4">
          <span
            className="text-3xl text-emerald-500 dark:text-emerald-300 md:text-5xl lg:text-6xl"
            ref={el}
          />
        </div>
        <p className="leading-relaxed mb-10 mt-2 text-lg md:text-xl lg:text-2xl">
          I love to explore both the performance, scalability, and usability
          facets of a solution and
          <span className="font-semibold">
            {" "}
            always consider who we're building for.{" "}
          </span>
        </p>
        {/* <ChatBubbleDialogue
            text={"Tell me more about yourself!"}
            text2={"Sure!"}
          /> */}
        {/* <ProjectCarousel /> */}
        <p className="leading-relaxed mb-10 mt-2 text-lg md:text-xl lg:text-2xl">
          After graduating from the University of Wisconsin with a degrees in
          Computer Science and Japanese, I joined{" "}
          <ExtLink link="https://business.fetch.com/" linkText="Fetch" /> as a
          backend software engineer.
        </p>
        <p className="leading-relaxed mb-10 mt-2 text-lg md:text-xl lg:text-2xl">
          If you'd like to learn more, take a look at my{" "}
          <ExtLink
            link="https://drive.google.com/file/d/1n54uFZOBW6t7TRqGt0Tbqtcl7SkU7FqX/view?usp=sharing"
            linkText="Resume"
          />{" "}
          or contact me at{" "}
          <span className="font-semibold underline underline-offset-2">
            <a href="mailto:joel.foster@gmail.com">my email</a>
          </span>
        </p>
      </Layout>
    </main>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
