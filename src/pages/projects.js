import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

// Step 2: Define your component
const ProjectsPage = () => {
  return (
    <main>
      <Layout pageTitle="Projects">
        <p>Projects TBD</p>
      </Layout>
    </main>
  );
};

// Step 2.5: Add a page title to the <Head>
export const Head = () => (
  <>
    <Seo title="Projects" />
    <meta name="description" content="Projects I've completed" />
  </>
);

// Step 3: Export your component
export default ProjectsPage;
