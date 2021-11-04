import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

export function News({ data }) {
  const nodes = data.allWpNewsItem.nodes;

  return (
    <Layout>
      <SEO title="Neuigkeiten" slug="/news" />
      <section className="hero container my-10">
        <div className="hero bg-yellow-300 px-20 py-40 rounded-3xl">
          <h1>News-Hero</h1>
        </div>
      </section>

      <section className="container my-10">
        <header>
          <h2>Neuigkeiten</h2>
        </header>
      </section>

      <section className="container my-10">
        <div className="bg-yellow-300 p-20 rounded-3xl">
          <h1>News List Modul</h1>
          <ul>
            {nodes.map((node) => {
              return (
                <li>
                  <h4>
                    <a href={node.slug}>{node.title}</a>
                  </h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: node.excerpt,
                    }}
                  />
                  <p>{node.date}</p>
                  <ul>
                    {node.tags.nodes.map((tag, index) => {
                      return <li key={`tag-${index}`}>{tag.name}</li>;
                    })}
                  </ul>
                  <Img
                    fluid={
                      node.featuredImage.node.localFile.childImageSharp.fluid
                    }
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allWpNewsItem(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
        date
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default News;
