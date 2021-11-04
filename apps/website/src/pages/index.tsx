import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export function Index({ data }) {
  return (
    <Layout>
      <SEO title="Willkommen" slug="/" image="https://placeimg.com/300/300" />
      <section className="hero container my-10">
        <div
          className="hero bg-gray-300 px-20 py-40 rounded-3xl"
          style={{ height: "550px" }}
        >
          <h1>Hero-Section</h1>
        </div>
      </section>

      <section className="container my-10">
        <div className="bg-yellow-300 p-20 rounded-3xl">
          <h1>Aktiv werden</h1>
        </div>
      </section>

      <section className="container my-10">
        <div className="bg-yellow-300 p-20 rounded-3xl">
          <h1>News</h1>
          {data.allWpNewsItem.nodes.map((node, index) => (
            <div key={`news-${index}`}>
              <Link to={node.slug}>
                <h2>{node.title}</h2>
              </Link>
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
            </div>
          ))}
        </div>
      </section>

      <section className="container my-10">
        <div className="bg-yellow-300 p-20 rounded-3xl">
          <h1>Verbundpartner</h1>
        </div>
      </section>
    </Layout>
  );
}

export default Index;

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
      }
    }
  }
`;
