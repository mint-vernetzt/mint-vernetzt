import { graphql } from "gatsby";
import { NewsFeed } from "@mint-vernetzt/react-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { getNewsItems } from "../utils/dataTransformer";

export function Index({ data }) {
  const newsItems = getNewsItems(data.newsItems);

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
        <NewsFeed
          headline="Neuigkeiten"
          body="Wir blicken in die MINT-Welt und darüber hinaus und informieren Euch regelmäßig über Erkenntnisse, Ereignisse und Innovationen, die für Eure tägliche Arbeit interessant sind."
          linkToOverview="/news/"
          newsFeedItemsProps={newsItems}
        />
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
  query LandingPage {
    newsItems: allWpNewsItem(sort: { fields: [date] }) {
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
