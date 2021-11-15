import { GatsbyGraphQLType, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";

import { ContactCard } from "@mint-vernetzt/react-components";

export function Mintmachen({
  data,
}: {
  data: GatsbyTypes.MintmachenPageQuery;
}) {
  const pageContact = data.PageContact.contactInformations;
  return (
    <Layout>
      <SEO
        title="MI(N)Tmachen"
        slug="/mintmachen"
        description=""
        image=""
        children=""
      />

      <section className="container my-10 lg:my-20">
        <div className="flex flex-wrap items-center md:-mx-4">
          <div className="flex-100 pb-4 md:pb-0 md:flex-5/12 md:px-4">
            <Img
              fluid={data.HeroImage.childImageSharp.fluid}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-100 md:flex-7/12 md:px-4">
            <h1 className="text-5xl leading-tight lg:text-7xl lg:leading-none mb-2 lg:mb-4">
              MI(N)Tmachen
            </h1>

            <p className="lg:text-xl">
              Wir machen die MINT-Akteur:innen Deutschlands sichtbar und
              vernetzen Euch. Aber dafür brauchen wir Eure Hilfe! Bringt Euch
              jetzt aktiv ein und helft einander mehr und bessere MINT-Angebote
              zu schaffen.
            </p>
            <p>
              <a
                href="mailto:community@MINT-vernetzt.de"
                className="text-lilac-500 font-bold"
              >
                community@MINT-vernetzt.de
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="container my-10 lg:my-20">
        <div className="flex flex-wrap content-center items-center md:-mx-6 lg:-mx-10">
          <div className="flex-100 pb-4 md:pb-0 md:flex-1/3 lg:flex-1/4 md:px-6 lg:px-10">
            <img
              className="w-full h-auto"
              src="/images/Badge_02Rocket.svg"
              alt="MINTrakete"
            />
          </div>

          <div className="flex-100 md:flex-1/2 md:px-6 lg:px-10">
            <h2 className="text-5xl leading-tight lg:text-6xl lg:leading-none mb-2">
              MINT<span className="font-normal">rakete</span>
            </h2>

            <p>
              Es gibt schon viele gute Praxis-Beispiele in der MINT-Bildung.
              Reicht jetzt Eure MINTrakete des Monats ein und helft der
              MINT-Community mit Eurem Wissen und Euren Erfahrungen
              durchzustarten.
            </p>
            <p>
              <Link
                to="/news/mintrakete-didaktik-als-schluessel-jetzt-bewerben"
                className="btn-primary"
              >
                Teilnehmen
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="container my-10 lg:my-20">
        <div className="flex flex-wrap md:-mx-4">
          <div className="flex-100 pb-4 md:pb-0 md:flex-1/2 md:px-4 md:order-2">
            <Img
              fluid={data.SurveyImage.childImageSharp.fluid}
              className="w-full h-auto rounded-2xl shadow-md"
            />
          </div>
          <div className="flex-100 md:flex-1/2 md:px-4 md:self-center md:text-right md:order-1">
            <h3 className="text-5xl leading-tight lg:leading-none mb-2 lg:mb-4">
              Befragungen
            </h3>

            <p className="lg:text-xl">
              Wir vermessen die MINTcommunity Deutschlands und möchten Eure
              Bedürfnisse ermitteln. Nehmt jetzt an der aktuellen Befragung
              teil.
            </p>
            <p>
              <a
                href="mailto:community@MINT-vernetzt.de"
                className="text-lilac-500 font-bold"
              >
                community@MINT-vernetzt.de
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="container my-10 lg:my-20">
        <div className="flex flex-wrap md:-mx-4">
          <div className="flex-100 pb-4 md:pb-0 md:flex-1/2 md:px-4">
            <Img
              fluid={data.PlatformImage.childImageSharp.fluid}
              className="w-full h-auto rounded-2xl shadow-md"
            />
          </div>
          <div className="flex-100 md:flex-1/2 md:px-4">
            <h3 className="text-5xl leading-tight lg:leading-none mb-2 lg:mb-4">
              Die Erstellung der MINTvernetzt-Plattform
            </h3>

            <p className="lg:text-xl">
              Wir bauen einen Marktplatz für die MINT-Community Deutschlands.
              Und zwar mit Euch! Bringt Euch jetzt aktiv ein. Entweder als
              MINT-Akteur:in und gebt uns Eure Feature-Ideen oder entwickelt sie
              gemeinsam beim Hackathon mit Programmierer:innen. Ihr seid selbst
              Coder:in und wollt aktiv werden? Dann pushed uns Eure
              Feature-Ideen und arbeitet mit uns an der
              Open-Source-Community-Plattform.
            </p>
            <div className="lg:-mx-8 pb-6">
              <ContactCard
                headline=""
                name={`${pageContact.firstName} ${pageContact.lastName}`}
                position={pageContact.position}
                phone={pageContact.phone}
                email={pageContact.email}
                avatar={{
                  src: pageContact.photo.localFile.childImageSharp.fluid.src,
                  alt: `${pageContact.firstName} ${pageContact.lastName}`,
                }}
              />
            </div>
            <p>
              <a href="/mintvernetzt" className="btn-primary">
                Mehr erfahren
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Mintmachen;

export const pageQuery = graphql`
  query MintmachenPage {
    HeroImage: file(relativePath: { eq: "mintmachen_header.png" }) {
      childImageSharp {
        fluid(maxWidth: 560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    SurveyImage: file(relativePath: { eq: "mintmachen_survey.png" }) {
      childImageSharp {
        fluid(maxWidth: 560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    PlatformImage: file(relativePath: { eq: "mintmachen_platform.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    PageContact: wpContact(
      contactInformations: { lastName: { eq: "Klauke" } }
    ) {
      contactInformations {
        firstName
        lastName
        position
        email
        phone
        photo {
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
`;
