import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { Icon, IconType, Testimonial } from "@mint-vernetzt/react-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const hasCite =
    frontmatter.citeAuthor &&
    frontmatter.citeAuthorFunction &&
    frontmatter.citeQuote;

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
          href={`/project/#${categoryHash}`}
        >
          <span className="flex items-center">
            <Icon type={IconType.ChevronLeft} />
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
            <h1 className="text-5xl leading-tight lg:text-6xl lg:leading-none text-blue-500 mb-8">
              {frontmatter.name}
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap md:-mx-4 lg:-mx-6">
          <div className="flex-100 md:flex-2/3 pb-8 md:pb-0 md:px-4 lg:px-6 md:order-1">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
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
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
