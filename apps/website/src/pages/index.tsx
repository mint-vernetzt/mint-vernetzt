import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  getNewsItems,
  getOrganizationsData,
  getTeasersData,
} from "../utils/dataTransformer";
import Img from "gatsby-image";

import {
  NewsFeed,
  EventTeaser,
  SocialBar,
  H1,
  H2,
  H4,
} from "@mint-vernetzt/react-components";
import { OrganizationBoxContainer } from "@mint-vernetzt/react-components";
import HeroCarousel from "../components/hero-carousel";
import { EventTeaserItemProps } from "libs/react-components/src/lib/EventTeaser/EventTeaserItem";
import { isBeforeOneDayAfterDate } from "../utils/eventFilter";

export function Index({
  data,
  ...otherProps
}: {
  data: GatsbyTypes.LandingPageQuery;
}) {
  const newsItems = getNewsItems(data.newsItems).map((item) => {
    item.body = (
      <span dangerouslySetInnerHTML={{ __html: item.body as string }} />
    );
    return item;
  });
  const organisations = getOrganizationsData(data.organizationsData);

  const teasers =
    data.teasers.nodes.length > 0
      ? getTeasersData(data)
      : [
          {
            image: (
              <Img
                fluid={data.HeroImage.childImageSharp.fluid}
                className="w-full h-3/4 md:h-full"
              />
            ),

            headline: (
              <>
                MINT
                <span className="font-normal block md:inline">vernetzt</span>
              </>
            ),

            excerpt: (
              <>
                die Service- und Anlaufstelle der MINT-
                <br />
                Akteur:innen in Deutschland.
              </>
            ),

            url: (
              <Link to="/about/" className="btn-primary">
                Erfahre mehr
              </Link>
            ),
          },
        ];

  const caseInsensitiveSortedOrganization = organisations.sort((a, b) => {
    return a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase());
  });

  const now = new Date();

  const events: EventTeaserItemProps[] = data.events.nodes
    .filter((event) =>
      isBeforeOneDayAfterDate(now, new Date(event.eventInformations.endDate))
    )
    .map((event) => ({
      headline: event.title,
      body: (
        <span
          dangerouslySetInnerHTML={{
            __html: event.excerpt.replace(/<[^>]*>/g, "").substr(0, 150),
          }}
        />
      ),
      date: new Date(event.eventInformations.startDate),
      url: `/event/${event.slug}/`,
    }))
    .slice(0, 4);

  const linkWrapper = (url: string, children: React.ReactNode) => {
    return <Link to={url}>{children}</Link>;
  };

  return (
    <Layout {...otherProps}>
      <SEO
        title="Willkommen"
        slug="/"
        image=""
        description={""}
        children={""}
      />
      <section className="container relative my-8 md:my-10 lg:my-20">
        <HeroCarousel items={teasers} />
      </section>

      <section className="container z-10 relative flex justify-center">
        <div>
          <SocialBar className="flex flex-col md:flex-row mx-2 pt-4 md:pt-6 md:pb-8 px-6 pb-4 bg-white rounded-2xl lg:rounded-3xl shadow -mt-36 md:-mt-24 lg:-mt-36 lg:px-12 lg:pb-10" />
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <header>
          <H2 like="h1">Aktiv werden</H2>
          <p className="text-xl md:px-8 lg:px-20 ">
            Wir entwickeln MINTvernetzt mit Euch (weiter)! Hier könnt Ihr Euch
            vernetzen, gute Praxis teilen und Kooperationen aufbauen. So machen
            wir zusammen MINT-Bildungsangebote in Deutschland sichtbar, helfen
            Euch bei der Weiterentwicklung und schaffen Innovationsräume.
          </p>
        </header>

        <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-3">
          {[
            {
              image: data.MintmachenImage.childImageSharp.fluid,
              title: `MI(N)Tmachen`,
              text: `Wir machen die MINT-Akteur:innen Deutschlands sichtbar und vernetzen Euch. Aber dafür brauchen wir Eure Hilfe! Bringt Euch jetzt aktiv ein und helft einander mehr und bessere MINT-Angebote zu schaffen.`,
              link: `/mintmachen/`,
            },
            {
              image: data.MintvernetztImage.childImageSharp.fluid,
              title: `MINTvernetzt informiert`,
              text: `Informieren, inspirieren, Emotionen wecken: Wir geben Euch Einblicke in die MINT-Welt und schauen auch über den Tellerrand: Hier findet Ihr Newsletter, MINTNews & Co.`,
              link: `/mintvernetzt/`,
            },
            {
              image: data.MintcommunityImage.childImageSharp.fluid,
              title: `Werde Teil der MINTcommunity`,
              text: `Wir bauen einen Marktplatz für die MINTcommunity Deutschlands: die MINTvernetzt-Plattform. Und zwar mit Euch! Bringt Euch jetzt aktiv ein und werdet BETA-Tester:in.`,
              link: `/mintcommunity/`,
            },
          ].map((teaserbox, index) => (
            <div
              key={`teaserbox-${index}`}
              className="p-4 pb-8 md:p-2 md:pb-8 lg:p-4 lg:pb-8 rounded-lg bg-neutral-200 shadow-lg"
            >
              <Link to={`${teaserbox.link}`} className="flex flex-col h-100">
                <div className="rounded-lg overflow-hidden mb-2 lg:mb-4">
                  <Img fluid={teaserbox.image} className="w-full h-auto" />
                </div>
                <H4 className="lg:leading-snug lg:mx-2">{teaserbox.title}</H4>
                <p className="lg:mx-2">{teaserbox.text}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap md:-mx-2 lg:-mx-4">
          <div className="flex-100 pb-8 md:pb-0 md:flex-2/3 md:px-2 lg:px-4">
            <div className="flex items-baseline justify-between no-wrap">
              <H2 like="h1">
                <strong>MINT</strong>news
              </H2>
              <Link to="/news/" className="text-sm text-primary">
                Alle ansehen
              </Link>
            </div>
            <NewsFeed
              body="Wir blicken in die MINT-Welt und darüber hinaus und informieren Euch regelmäßig über Erkenntnisse, Ereignisse und Innovationen, die für Eure tägliche Arbeit interessant sind."
              linkToOverview="/news/"
              newsFeedItemsProps={newsItems}
              onChipClick={(slug) => {
                if (window) {
                  document.location.href = `/news/?tags=${slug}`;
                }
              }}
            />
          </div>
          <div className="event-teaser flex-100 md:flex-1/3 pb-8 md:pb-0 md:px-2 lg:px-4">
            <div className="flex flex-col p-4 pb-15 md:pb-5 py-6 rounded-lg bg-neutral-200 shadow-lg">
              <div className="flex items-baseline flex-wrap">
                <H2 className="whitespace-nowrap">
                  <strong>MINT</strong>events
                </H2>
                <Link
                  to="/events/"
                  className="text-sm text-primary whitespace-nowrap ml-auto mb-4"
                >
                  Alle ansehen
                </Link>
              </div>
              <EventTeaser
                linkToOverview="/events/"
                linkWrapper={linkWrapper}
                items={events}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container my-8 md:my-10 lg:my-20">
        <OrganizationBoxContainer
          headline="Der Verbund"
          body="Herausforderungen lösen wir gemeinsam. MINT-Potenziale heben wir im Team. MINTvernetzt ist ein Verbundprojekt, das gemeinsam von Mitarbeitenden der Körber-Stiftung, der matrix gGmbH, des Nationalen MINTForums e.V., des Stifterverbands und der Universität Regensburg umgesetzt wird. Zusammen blicken wir auf viel Erfahrung in der MINT-Bildung, die wir bei MINTvernetzt bündeln und weiterentwickeln wollen. Hier findet Ihr die unterschiedlichen Zuständigkeiten der Verbundpartner bei MINTvernetzt."
          organisations={caseInsensitiveSortedOrganization}
        />
      </section>
    </Layout>
  );
}

export default Index;

export const pageQuery = graphql`
  query LandingPage {
    HeroImage: file(relativePath: { eq: "home_hero_large.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1488, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    MaedchenImage: file(relativePath: { eq: "MINT_fuer_Maedchen.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1488, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    MintmachenImage: file(relativePath: { eq: "landingpage_mintmachen.png" }) {
      childImageSharp {
        fluid(maxWidth: 560, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    MintvernetztImage: file(
      relativePath: { eq: "landingpage_mintvernetzt.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 560, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    MintcommunityImage: file(
      relativePath: { eq: "landingpage_mintcommunity.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 560, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    newsItems: allWpNewsItem(sort: { fields: [date], order: DESC }, limit: 3) {
      nodes {
        title
        excerpt
        slug
        date
        tags {
          nodes {
            name
            slug
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
              publicURL
            }
          }
        }
      }
    }
    events: allWpEvent(
      filter: { parentId: { eq: null } }
      sort: { fields: eventInformations___startDate, order: ASC }
    ) {
      nodes {
        excerpt
        eventInformations {
          startTime
          startDate
          endTime
          endDate
        }
        title
        slug
      }
    }
    teasers: allWpTeaser(sort: { fields: date, order: ASC }) {
      nodes {
        title
        excerpt
        teaserInformations {
          buttonText
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1488, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          pagePath
          post {
            __typename
            ... on WpEvent {
              id
              slug
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1488, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
            ... on WpNewsItem {
              id
              slug
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1488, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
