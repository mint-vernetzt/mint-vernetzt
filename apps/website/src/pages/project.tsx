import { graphql, Link } from "gatsby";

import "../../../../libs/design-system/src/styles.css";
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
    <>
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
      <Link to="/">Home</Link>
    </>
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
