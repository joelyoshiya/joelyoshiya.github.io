import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="flex min-h-screen">
        <div className="m-auto mt-10 max-w-4xl">
          <div className="text-center">
            <p className="mt-5 text-3xl font-semibold">
              {data.mdx.frontmatter.title}
            </p>
            <p className="mb-3 mt-3 text-slate-500">
              {data.mdx.frontmatter.date}
            </p>
            <div className="flex justify-center">
              <GatsbyImage
                className="max-w-xs"
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
              />
            </div>
            <p className="mb-3 mt-1 text-xs text-slate-500">
              Photo Credit:{" "}
              <a href={data.mdx.frontmatter.hero_image_credit_link}>
                {data.mdx.frontmatter.hero_image_credit_text}
              </a>
            </p>
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
