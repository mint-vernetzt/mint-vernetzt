import { NewsFeed } from "@mint-vernetzt/react-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { getNewsItems } from "../utils/dataTransformer";

export function News({ data }) {
  const newsItems = getNewsItems(data.allItems);

  return (
    <Layout>
      <SEO
        title="Neuigkeiten"
        slug="/news"
        children=""
        description=""
        image=""
      />
      <section className="hero container my-10">
        <div className="hero bg-yellow-300 px-20 py-40 rounded-3xl">
          <h1>News-Hero</h1>
        </div>
      </section>
      <section className="container my-10">
        <NewsFeed headline="Neuigkeiten" newsFeedItemsProps={newsItems} />
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query NewsFeed {
    allItems: allWpNewsItem(sort: { fields: [date] }) {
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
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 300) {
                  src
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
