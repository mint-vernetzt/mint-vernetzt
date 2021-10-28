import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { Testimonial } from "@mint-vernetzt/react-components";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const hasCite =
    frontmatter.citeAuthor &&
    frontmatter.citeAuthorFunction &&
    frontmatter.citeQuote;

  return (
    <>
      <div className="container">
        <Link className="border-2 p-4" to="/project">
          zur Übersicht
        </Link>

        <h1>{frontmatter.name}</h1>

        <div>
          {/* -- MAIN CONTENT -- */}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>

      <div>
        {/* -- ASIDE -- */}
        {frontmatter.logo && (
          <Img fluid={frontmatter.logo.childImageSharp.fluid} />
        )}

        {hasCite && (
          <Testimonial
            name={frontmatter.citeAuthor}
            jobTitle={frontmatter.citeAuthorFunction}
            description={frontmatter.citeQuote}
          />
        )}
      </div>
    </>
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
