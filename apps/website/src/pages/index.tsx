import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { getNewsItems, getOrganizationsData } from "../utils/dataTransformer";
import Img from "gatsby-image";

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
      <section className="container pt-2 md:pt-10">
        <div className="hero hero-index flex items-end rounded-3xl relative overflow-hidden">
          <Img
            fluid={data.HeroImage.childImageSharp.fluid}
            className="w-full h-auto md:h-full"
          />
          <div className="absolute w-full h-full opacity-50 bg-gradient-to-r from-white to-transparent" />
          <div className="hero-text absolute top-0 left-0 min-h-3/4 md:min-h-full right-0 pt-12 px-4 md:pt-20 md:px-12 lg:pt-60 lg:px-20">
            <div>
              <h1 className="text-6xl lg:text-7xl leading-none text-blue-500 mb-2">
                MINT
                <span className="font-normal block md:inline">vernetzt</span>
              </h1>
              <p className="font-bold mb-4 md:max-w-1/2 lg:text-3xl lg:leading-snug">
                die Service- und Anlaufstelle der MINT-Akteur:innen in
                Deutschland.
              </p>
              <p>
                <Link to="/project/" className="btn-primary">
                  Erfahre mehr
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-10 lg:pt-20">
        <header>
          <h2>Aktiv werden</h2>
          <p className="lead">
            Proin id turpis quis massa mattis consequat. Maecenas semper, et
            laoreet risus lorem id lorem. Etiam imperdiet. Felis vel auctor
            consequatProin id turpis quis massa mattis consequat.{" "}
          </p>
        </header>

        <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-3">
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
              className="p-4 pb-8 md:p-2 md:pb-8 lg:p-4 lg:pb-8 rounded-lg bg-beige-500"
            >
              <a href={`${teaserbox.link}`} className="flex flex-col h-100">
                <div className="rounded-lg overflow-hidden mb-2 lg:mb-4">
                  <img
                    src={`${teaserbox.image}`}
                    alt={`${teaserbox.title}`}
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="text-base lg:text-3xl lg:leading-snug lg:mx-2 mb-2">
                  {teaserbox.title}
                </h4>
                <p className="lg:mx-2">{teaserbox.text}</p>
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="container pt-10 lg:pt-20">
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
      </section>

      <section className="container py-10">
        <OrganizationBoxContainer
          headline="Der Verbund"
          body="Herausforderungen lösen wir gemeinsam. MINT-Potenziale heben wir im Team. MINTvernetzt ist ein Verbundprojekt, das gemeinsam von Mitarbeitenden der Körber-Stiftung, 
          der matrix gGmbH, des Nationales MINTForums e.V., des Stifterverbands und der Universität Regensburg umgesetzt wird. Zusammen blicken wir auf viel Erfahrung in der MINT-Bildung,
          die wir bei MINTvernetzt bündeln und weiterentwickeln wollen. Hier findet Ihr die unterschiedlichen Zuständigkeiten der Verbundpartner bei MINTvernetzt."
          organisations={organisations}
        />
      </section>
    </Layout>
  );
}

export default Index;

export const pageQuery = graphql`
  query LandingPage {
    HeroImage: file(relativePath: { eq: "home_hero.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1488) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
