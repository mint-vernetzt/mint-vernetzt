import { GatsbyGraphQLType, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import { ReactComponent as Header } from "../images/mintmachen_header.svg";
import { ReactComponent as BadgeRocket } from "../images/Badge_02Rocket.svg";

import { ContactCard, H1, H2 } from "@mint-vernetzt/react-components";

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

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap md:-mx-4">
          <div className="flex-100 pb-4 md:pb-0 md:flex-5/12 md:px-4">
            <Header />
            {/* <img
              src="../images/mintmachen_header.svg"
              className="w-full h-auto"
              alt="MI(N)Tmachen"
            /> */}
          </div>
          <div className="flex-100 md:flex-7/12 md:px-4">
            <H1 like="h0">
              MI(N)T&shy;<span className="font-normal">machen</span>
            </H1>

            <p className="lg:text-xl">
              Wir machen die MINT-Akteur:innen Deutschlands sichtbar und
              vernetzen Euch. Aber dafür brauchen wir Eure Hilfe! Bringt Euch
              jetzt aktiv ein und helft einander mehr und bessere MINT-Angebote
              zu schaffen.
            </p>
            <div className="lg:-mx-8">
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
          </div>
        </div>
      </section>

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap md:-mx-4">
          <div className="flex-100 pb-4 md:pb-0 md:flex-1/2 md:px-4 md:order-2">
            <Img
              fluid={data.RocketImage.childImageSharp.fluid}
              className="w-full h-auto rounded-2xl shadow-md"
            />
          </div>
          <div className="flex-100 md:flex-1/2 md:px-4 md:self-center md:text-right md:order-1">
            <H2>
              <strong>MINT</strong>rakete
            </H2>

            <p className="lg:text-xl">
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

      <section id="survey" className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap md:-mx-4">
          <div className="flex-100 pb-4 md:pb-0 md:flex-1/2 md:px-4">
            <Img
              fluid={data.SurveyImage.childImageSharp.fluid}
              className="w-full h-auto rounded-2xl shadow-md"
            />
          </div>
          <div className="flex-100 md:flex-1/2 md:px-4 md:self-center">
            <H2>Anmeldung zum MINTvernetzt-Verteiler</H2>

            <p className="lg:text-xl">
              Seid dabei und werdet Teil von MINTvernetzt, der wachsenden,
              deutschlandweiten Community für MINT-Akteur:innen! Um in unseren
              MINTvernetzt-Verteiler aufgenommen zu werden und damit wir Euch
              ein bisschen besser kennenlernen, beantwortet bitte ein paar kurze
              Fragen. So können wir Euch mit MINTvernetzt bestmöglich
              unterstützen und informieren. Es dauert nur 5 Minuten!
            </p>
            <p>
              <a
                href="https://survey.lamapoll.de/Anmeldung-MINTvernetzt-Verteiler/"
                className="text-lilac-500 font-bold"
                target="_blank"
                rel="noreferrer"
              >
                Zur Anmeldung
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap md:-mx-4">
          <div className="flex-100 pb-4 md:pb-0 md:flex-1/2 md:px-4 md:order-2">
            <Img
              fluid={data.PlatformImage.childImageSharp.fluid}
              className="w-full h-auto rounded-2xl shadow-md"
            />
          </div>
          <div className="flex-100 md:flex-1/2 md:px-4 md:order-1 md:text-right">
            <H2>Die Erstellung der MINTvernetzt-Plattform</H2>

            <p className="lg:text-xl">
              Wir bauen einen Marktplatz für die MINT-Community Deutschlands.
              Und zwar mit Euch! Bringt Euch jetzt aktiv ein. Entweder als
              MINT-Akteur:in und gebt uns Eure Feature-Ideen oder entwickelt sie
              gemeinsam beim Hackathon mit Programmierer:innen. Ihr seid selbst
              Coder:in und wollt aktiv werden? Dann pushed uns Eure
              Feature-Ideen und arbeitet mit uns an der
              Open-Source-Community-Plattform.
            </p>
            <p>
              <a href="/mintcommunity/" className="btn-primary">
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
    RocketImage: file(relativePath: { eq: "badge_rocket.png" }) {
      childImageSharp {
        fluid(maxWidth: 728, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    SurveyImage: file(relativePath: { eq: "mintmachen_survey.png" }) {
      childImageSharp {
        fluid(maxWidth: 728, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    PlatformImage: file(relativePath: { eq: "mintmachen_platform.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 728, quality: 80) {
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
