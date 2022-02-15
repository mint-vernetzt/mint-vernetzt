import * as React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import {
  H1,
  Icon,
  IconType,
  Testimonial,
} from "@mint-vernetzt/react-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const hasCite =
    frontmatter.citeAuthor &&
    frontmatter.citeAuthorFunction &&
    frontmatter.citeQuote;

  let htmlWithAllLinksTargetBlank = html.replace(
    /(<a [^>]*)(>)/gi,
    '$1 rel="noopener noreferrer" target="_blank"$2'
  );
  const categoryHash = frontmatter.slug.split("/")[0] ?? "/";

  return (
    <Layout>
      <SEO
        title={`Partner: ${frontmatter.name}`}
        slug={`/pakt/${frontmatter.slug}`}
        description={""}
        image={""}
        children={""}
      />
      <section className="container py-8">
        <a
          className="inline-block border border-neutral-400 py-3 px-4 mb-4 text-neutral-800 text-semibold uppercase rounded-lg"
          href={`/pakt/#${categoryHash}`}
        >
          <span className="flex items-center">
            <span className="mr-2">
              <Icon type={IconType.ChevronLeft} />
            </span>
            zur Übersicht
          </span>
        </a>

        <div className="flex flex-wrap items-center md:-mx-4 lg:-mx-6 ">
          <div className="flex-100 md:flex-1/3 pb-8 md:pb-0 md:px-4 lg:px-6 md:order-2">
            {frontmatter.logo && (
              <Img fluid={frontmatter.logo.childImageSharp.fluid} />
            )}
          </div>
          <div className="flex-100 md:flex-2/3 pb-8 md:pb-0 md:px-4 lg:px-6 md:order-1">
            <H1>{frontmatter.name}</H1>
          </div>
        </div>

        <div className="flex flex-wrap md:-mx-4 lg:-mx-6">
          <div className="flex-100 md:flex-2/3 pb-8 md:pb-0 md:px-4 lg:px-6 md:order-1">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: htmlWithAllLinksTargetBlank }}
            />
          </div>

          <div className="flex-100 md:flex-1/3 pb-8 md:pb-0 md:px-4 lg:px-6 md:order-2">
            {hasCite && (
              <Testimonial
                name={frontmatter.citeAuthor}
                jobTitle={frontmatter.citeAuthorFunction}
                description={frontmatter.citeQuote}
              />
            )}
          </div>
        </div>

        <div>{/* -- MAIN CONTENT -- */}</div>
      </section>
    </Layout>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        name
        citeAuthor
        citeAuthorFunction
        citeQuote
        logo {
          childImageSharp {
            fluid(maxWidth: 600, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
