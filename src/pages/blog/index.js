import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  return (
    <main>
      <Layout pageTitle="Yoshi's Word  Island - a blog by Joel Yoshiya Foster">
        <p className="mt-10 flex justify-center font-semibold md:text-lg lg:text-3xl">
          Yoshi's Word Island - a blog by Joel Yoshiya Foster
        </p>
        <div className="mt-20 grid grid-rows-none justify-center">
          {data.allMdx.nodes.map((node) => (
            <div className="m-2">
              <article key={node.id}>
                <p className="font-medium">
                  <Link to={`/blog${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </p>
                <p className="text-sm text-slate-500">
                  Posted: {node.frontmatter.date}
                </p>
              </article>
            </div>
          ))}
        </div>
      </Layout>
    </main>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`;

export const Head = () => (
  <>
    <Seo title="Blog" />
    <meta name="description" content="blog portion of my portfolio site" />
  </>
);

export default BlogPage;
