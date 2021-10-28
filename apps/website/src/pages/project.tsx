import Layout from "../components/layout";
import { graphql, Link } from "gatsby";

import {
  getPaktDataByCategory,
  PaktDataByCategory,
} from "../utils/dataTransformer";
import Img from "gatsby-image";

export function Project({ data }) {
  const paktDataByCategory: PaktDataByCategory = getPaktDataByCategory(
    data.paktData.edges
  );
  const categories = Object.keys(paktDataByCategory);

  return (
    <Layout>
      <section className="container my-16">
        <h1>Projekt</h1>

        <ul>
          {categories.map((category, index) => (
            <li key={category} id={`category${index}`}>
              <h2>
                <a href={`#category${index}`}>{category}</a>
              </h2>
              <ul>
                {paktDataByCategory[category].map((member) => (
                  <li>
                    <Link to={`/pakt/${member.slug}`}>{member.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="my-8">
          <Link
            to="/"
            className="m-1 px-4 py-2 border-2 inline-block rounded border-transparent text-white focus:border-fill focus:border-dotted focus:outline-none filter hover:brightness-75 bg-primary"
          >
            Home
          </Link>
        </p>
      </section>
    </Layout>
  );
}

export default Project;

export const pageQuery = graphql`
  query {
    paktData: allMarkdownRemark(
      sort: { fields: [frontmatter___category, frontmatter___name], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            slug
            name
            category
          }
        }
      }
    }
  }
`;
