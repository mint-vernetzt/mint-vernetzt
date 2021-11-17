import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { getNewsItems, getOrganizationsData } from "../utils/dataTransformer";
import Img from "gatsby-image";

import { NewsFeed, EventTeaser } from "@mint-vernetzt/react-components";
import { OrganizationBoxContainer } from "@mint-vernetzt/react-components";

export function Index({ data }: { data: GatsbyTypes.LandingPageQuery }) {
  const newsItems = getNewsItems(data.newsItems);
  const organisations = getOrganizationsData(data.organizationsData);
  const linkWrapper = (url: string, children: React.ReactNode) => {
    return <Link to={url}>{children}</Link>;
  };

  return (
    <Layout>
      <SEO
        title="Willkommen"
        slug="/"
        image=""
        description={""}
        children={""}
      />
      <section className="container my-8 md:my-10 lg:my-20">
        <div className="hero hero-index flex items-end rounded-3xl relative overflow-hidden">
          <Img
            fluid={data.HeroImage.childImageSharp.fluid}
            className="w-full h-3/4 md:h-full"
          />
          <div className="hero-text absolute top-0 left-0 min-h-3/4 md:min-h-full right-0 pt-12 px-4 md:pt-20 md:px-12 lg:pt-60 lg:px-20">
            <div>
              <h1 className="text-6xl lg:text-7xl leading-none text-blue-500 mb-2">
                MINT
                <span className="font-normal block md:inline">vernetzt</span>
              </h1>
              <p className="font-bold mb-4 md:max-w-1/2 lg:text-3xl lg:leading-snug">
                die Service- und Anlaufstelle der MINT-
                <br />
                Akteur:innen in Deutschland.
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

      <section className="container my-8 md:my-10 lg:my-20">
        <header>
          <h2>Aktiv werden</h2>
          <p className="lead md:px-8 lg:px-20 ">
            Wir entwickeln MINTvernetzt mit Euch (weiter)! Hier könnt Ihr Euch
            vernetzen, gute Praxis teilen und Kooperationen aufbauen. So machen
            wir zusammen MINT-Bildungsangebote in Deutschland sichtbar, helfen
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

                <h4 className="text-base lg:text-3xl lg:leading-snug lg:mx-2 mb-2">
                  {teaserbox.title}
                </h4>
                <p className="lg:mx-2">{teaserbox.text}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap md:-mx-2 lg:-mx-4">
          <div className="flex-100 md:flex-2/3 md:px-2 lg:px-4">
            <NewsFeed
              headline={
                <>
                  MINT<span className="font-normal">news</span>
                </>
              }
              body="Wir blicken in die MINT-Welt und darüber hinaus und informieren Euch regelmäßig über Erkenntnisse, Ereignisse und Innovationen, die für Eure tägliche Arbeit interessant sind."
              linkToOverview="/news/"
              newsFeedItemsProps={newsItems}
            />
          </div>
          <div className="event-teaser flex-100 md:flex-1/3 pb-8 md:pb-0 md:px-2 lg:px-4">
            <EventTeaser
              headline={
                <>
                  MINT<span className="font-normal">events</span>
                </>
              }
              linkToOverview="/events/"
              linkWrapper={linkWrapper}
              items={data.events.nodes.map((event) => ({
                headline: event.title,
                body: event.excerpt.replace(/<[^>]*>/g, "").substr(0, 100),
                date: new Date(event.eventInformations.startDate),
                url: `/event/${event.slug}/`,
              }))}
            />
          </div>
        </div>
      </section>
      <section className="container my-8 md:my-10 lg:my-20">
        <OrganizationBoxContainer
          headline="Der Verbund"
          body="Herausforderungen lösen wir gemeinsam. MINT-Potenziale heben wir im Team. MINTvernetzt ist ein Verbundprojekt, das gemeinsam von Mitarbeitenden der Körber-Stiftung, der matrix gGmbH, des Nationalen MINTForums e.V., des Stifterverbands und der Universität Regensburg umgesetzt wird. Zusammen blicken wir auf viel Erfahrung in der MINT-Bildung, die wir bei MINTvernetzt bündeln und weiterentwickeln wollen. Hier findet Ihr die unterschiedlichen Zuständigkeiten der Verbundpartner bei MINTvernetzt."
          organisations={organisations}
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
      sort: { fields: eventInformations___startDate, order: DESC }
      limit: 4
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
  }
`;
