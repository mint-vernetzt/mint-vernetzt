import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { getNewsItems, getOrganizationsData } from "../utils/dataTransformer";

import {
  NewsFeed,
  OrganizationBoxProps,
} from "@mint-vernetzt/react-components";
import { OrganizationBoxContainer } from "@mint-vernetzt/react-components";

export function Index({ data }) {
  const newsItems = getNewsItems(data.newsItems);
  const organisations = getOrganizationsData(data.organizationsData);

  return (
    <Layout>
      <SEO
        title="Willkommen"
        slug="/"
        image="https://placeimg.com/300/300"
        description={""}
        children={""}
      />
      <section className="hero container py-10">
        <div
          className="hero bg-gray-300 px-20 py-40 rounded-3xl"
          style={{ height: "550px" }}
        >
          <h1>Hero-Section</h1>
        </div>
      </section>

      <section className="container py-20">
        <header>
          <h2>Aktiv werden</h2>
          <p className="lead">
            Proin id turpis quis massa mattis consequat. Maecenas semper, et
            laoreet risus lorem id lorem. Etiam imperdiet. Felis vel auctor
            consequatProin id turpis quis massa mattis consequat.{" "}
          </p>
        </header>

        <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              image: `https://picsum.photos/id/101/420/210`,
              title: `Aktiv werden`,
              text: `Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr.`,
              link: `/project `,
            },
            {
              image: `https://picsum.photos/id/1053/420/210`,
              title: `Mintvernetzt informiert`,
              text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat`,
              link: `/project `,
            },
            {
              image: `https://picsum.photos/id/24/420/210`,
              title: `Werde teil der MINTcommunity`,
              text: `Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr. Lorem ipsum dolor sit amet.`,
              link: `/topics `,
            },
          ].map((teaserbox, index) => (
            <div
              key={`teaserbox-${index}`}
              className="p-2 rounded-lg bg-beige-500"
            >
              <a href={`${teaserbox.link}`} className="flex flex-col h-100">
                <div className="rounded-lg overflow-hidden mb-4">
                  <img
                    src={`${teaserbox.image}`}
                    alt={`${teaserbox.title}`}
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="text-blue-500 mx-1 mb-2">{teaserbox.title}</h4>
                <p className="text-sm text-neutral-600 mx-1 mb-4">
                  {teaserbox.text}
                </p>
              </a>
            </div>
          ))}
        </div>
      </section>

      <div className="container py-10">
        <div className="flex flex-wrap md:-mx-2 lg:-mx-4">
          <div className="flex-100 md:flex-2/3 md:px-2 lg:px-4">
            <NewsFeed
              headline="Neuigkeiten"
              body="Wir blicken in die MINT-Welt und darüber hinaus und informieren Euch regelmäßig über Erkenntnisse, Ereignisse und Innovationen, die für Eure tägliche Arbeit interessant sind."
              linkToOverview="/news/"
              newsFeedItemsProps={newsItems}
            />
          </div>
          <div className="flex-100 md:flex-1/3 pb-8 md:pb-0 md:px-2 lg:px-4">
            <div className="bg-yellow-300 p-20 rounded-3xl">Events-Modul</div>
          </div>
        </div>
      </div>

      <section className="container py-10">
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
