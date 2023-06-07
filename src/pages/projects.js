import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const ProjectsPage = () => {
  return (
    <main>
      <Layout pageTitle="Projects">
        <p>Projects TBD</p>
      </Layout>
    </main>
  );
};

export const Head = () => (
  <>
    <Seo title="Projects" />
    <meta name="description" content="Projects I've completed" />
  </>
);

export default ProjectsPage;
