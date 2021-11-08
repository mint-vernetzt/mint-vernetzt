import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { getNewsItems } from "../utils/dataTransformer";

import {
  NewsFeed,
  OrganizationBoxProps,
} from "@mint-vernetzt/react-components";
import { OrganizationBoxContainer } from "@mint-vernetzt/react-components";

export function Index({ data }) {
  const newsItems = getNewsItems(data.newsItems);
import {
  getOrganizationsDataForLandingPage,
} from "../utils/dataTransformer";

export function Index({ data }) {
  const newsItems = getNewsItemsForLandingPage(data.newsItems);
  const organisations: OrganizationBoxProps[] =
    getOrganizationsDataForLandingPage(data.organizationsData);

  return (
    <Layout>
      <SEO
        title="Willkommen"
        slug="/"
        image="https://placeimg.com/300/300"
        description={""}
        children={""}
      />
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
        <OrganizationBoxContainer
          headline="Der Verbund"
          body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"
          organisations={organisations}
        />
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
    organizationsData: allWpOrganization(
      sort: { fields: organizationInformations___name, order: ASC }
    ) {
      nodes {
        organizationInformations {
          name
          description
          url
          logo {
            altText
            localFile {
              childImageSharp {
                fluid {
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
