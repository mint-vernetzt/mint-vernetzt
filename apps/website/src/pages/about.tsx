import {
  Icon,
  IconType,
  UserCardContainer,
} from "@mint-vernetzt/react-components";
import { graphql, Link } from "gatsby";
import { useEffect } from "react";
import "../../../../libs/design-system/src/styles.css";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { ReactComponent as Logo } from "../images/logo-mint-vernetzt.svg";

import { getUserCardsProps } from "../utils/dataTransformer";

export function About({ data }: { data: GatsbyTypes.AboutPageQuery }) {
  const userCardsProps = getUserCardsProps(data.usersData);

  return (
    <Layout>
      <SEO title="Über uns" slug="/about" description="" image="" children="" />
      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap content-center items-center md:-mx-6 lg:-mx-10">
          <div className="flex-100 md:flex-1/3 pb-8 md:pb-0 md:px-6 lg:px-10">
            <Logo />
          </div>

          <div className="flex-100 md:flex-2/3 md:px-6 lg:px-10">
            <h1 className="text-5xl leading-tight lg:text-7xl lg:leading-none mb-2">
              Was ist
              <br />
              MINT<span className="font-normal">vernetzt</span>?
            </h1>

            <p className="lg:text-3xl text-neutral-600 mb-4 font-bold">
              Die Service- und Anlaufstelle für MINT-Akteur:innen in Deutschland
            </p>

            <p className="lg:text-xl text-neutral-600 mb-4">
              Die MINT-Vernetzungsstelle, kurz MINTvernetzt, ist das Dach für
              die außerschulische MINT-Bildung in Deutschland. MINTvernetzt wird
              vom Bundesministerium für Bildung und Forschung gefördert und von
              Mitarbeitenden der Körber-Stiftung, der matrix gGmbH, dem
              Nationalen MINTForum e.V., dem Stifterverband und der Universität
              Regensburg als Verbund gemeinsam umgesetzt.
            </p>
          </div>
        </div>
      </section>

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap md:items-stretch md:-mx-6 -mb-6 lg:-mx-10">
          {[
            {
              icon: <Icon type={IconType.LightBulb} width="32" height="32" />,
              title: `Motivation`,
              text: `MINT-Kompetenzen sind Zukunftskompetenzen. Ohne die Stärkung der MINT-Bildung und Aktivierung neuer MINT-Talente wird Deutschland als Innovationsstandort an Bedeutung verlieren und
              wichtige Beiträge zur Lösungsfindung globaler Herausforderungen wie des Klimawandels nicht leisten können. Kindern und Jugendlichen Kompetenzen in Mathematik, Informatik,
              Naturwissenschaften und Technik zu vermitteln und ihnen den Zugang zu MINT-Arbeitsplätzen zu ermöglichen, sind zentrale Schlüssel für mehr Gleichberechtigung und Teilhabe.`,
            },
            {
              icon: <Icon type={IconType.Magic} width="32" height="32" />,
              title: `Mission`,
              text: `Das Netzwerk der MINT-Netzwerke: Mit MINTvernetzt schaffen wir ein Netzwerk für die MINT-Bildungslandschaft, das bestehende Initiativen und Akteur:innen aktiv einbindet und unterstützt. Wir wollen daran mitwirken, dass MINT-Akteur:innen sich als Gemeinschaft begreifen, für ihr Engagement und ihre Leistungen mehr Sichtbarkeit bekommen und ihr Angebot noch stärker mit schulischen Aktivitäten verzahnen können. Gemeinsam mit der Community werden wir Impulse für neue Themen, innovative Angebote und diversere Zielgruppen setzen, um zusammen eine bessere MINT-Bildungslandschaft zu schaffen.`,
            },
            {
              icon: <Icon type={IconType.Flag} width="32" height="32" />,
              title: `Ziel`,
              text: `Wir unterstützen Engagierte der MINT-Bildung durch Vernetzungsräume, Transferangebote und Innovationsimpulse darin, noch bessere Bildungsangebote für Kinder und Jugendliche zu machen und dabei breitere und diversere Zielgruppen anzusprechen. Hierzu zählen insbesondere Mädchen und junge Frauen.`,
            },
            {
              icon: <Icon type={IconType.Gem} width="32" height="32" />,
              title: `Vision`,
              text: `Wir möchten die MINT-Akteur:innen Deutschlands zu einer bundesweiten lebendigen, diversen und nachhaltig wachsenden Gemeinschaft zusammenführen, um allen Kindern und Jugendlichen eine gute MINT-Bildung zu ermöglichen, die schulisches und außerschulisches Lernen miteinander verzahnt und anwendungsorientiert sowie praxisorientiert gestaltet ist. Unsere Vision ist es, dass Mädchen und junge Frauen sowie bislang benachteiligte Gruppen durch zielgruppenorientierte, klischeefreie und attraktive Angebote Zugang zur MINT-Bildung erhalten und Chancen in MINT-Berufen erkennen, die sie mit ihrem eigenen Selbstkonzept in Verbindung bringen können. Dadurch entsteht mehr Chancengerechtigkeit und Teilhabe in Deutschland.`,
            },
          ].map((teaser, index) => (
            <div
              key={`teaser-${index}`}
              className="flex-100 mb-6 lg:flex-1/2 md:px-6 lg:px-10"
            >
              <div className="icon w-8 h-8 mb-2 border border-secondary-500 rounded-full">
                {teaser.icon}
              </div>
              <h4 className="text-2xl text-blue-500 mb-1">{teaser.title}</h4>
              <p className="text-neutral-600">{teaser.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="container my-8 md:my-10 lg:my-20"
        id="contact-details"
      >
        <header>
          <h2>Für jede Frage die richtige Adresse</h2>
          <p className="lead">
            Ihr habt eine Frage, sucht Informationen oder möchtet eine Idee mit
            uns teilen? Wir sind als Ansprechpartner:innen von MINTvernetzt
            gerne für Euch da.
          </p>
        </header>

        <div
          data-testid="grid"
          className="flex flex-wrap justify-center lg:mx-3 items-stretch"
        >
          {[
            {
              title: `Leitung`,
              text: `Stephanie Kowitz-Harms ist der strategische Kopf bei MINTvernetzt. Für Anfragen als Speakerin oder die Umsetzung gemeinsamer Bildungsvisionen im MINT-Bereich erreicht Ihr sie auf diesen Kanälen.`,
              phone: `040 808192152`,
              mail: `stephanie.kowitz-harms@mint-vernetzt.de`,
            },
            {
              title: `Service-Hotline`,
              text: `Ihr habt allgemeine Fragen, Informationen oder Ideen? Dann richtet sie gerne an Ina Liebmann, unser Gesicht hinter der Service-Hotline.`,
              phone: `040 88215690`,
              mail: `info@mint-vernetzt.de`,
            },
            {
              title: `Community`,
              text: `Erste Ansprechperson für alle Belange rund um unsere digitale Community-Plattform ist Anna Schröter. Ihr erreicht sie auf diesem Wege:`,
              phone: `0211 7570762`,
              mail: `anna.schroeter@mint-vernetzt.de`,
            },
            {
              title: `Veranstaltungen`,
              text: `Julia Novik erweckt unsere Veranstaltungen zum Leben und freut sich über Eure Fragen und Tipps.`,
              phone: `0160 94406027 `,
              mail: `julia.novik@mint-vernetzt.de`,
            },
            {
              title: `Kommunikation`,
              text: `Den Blick nach außen hat bei uns Anna Kellner. Für Presse- und Öffentlichkeitsarbeit, Kooperationen und Kampagnen ist sie die richtige Adresse.`,
              phone: `0175 8411669`,
              mail: `anna.kellner@mint-vernetzt.de`,
            },
          ].map((contactbox, index) => (
            <div
              key={`contactbox-${index}`}
              data-testid="gridcell"
              className="md:w-1/2 lg:w-1/3 px-2 lg:px-3 mb-6"
            >
              <div className="flex flex-wrap content-between items-stretch px-4 pt-4 pb-8 rounded-3xl shadow h-full">
                <div className="mb-4">
                  <h4 className="text-4xl text-blue-500 mb-2 leading-tight">
                    {contactbox.title}
                  </h4>
                  <p className="text-neutral-600 mb-3 md:mb-6">
                    {contactbox.text}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-neutral-800 font-semibold mb-4">
                    <a
                      href={`tel:${contactbox.phone}`}
                      className="flex items-center"
                    >
                      <span className="icon w-4 h-4 mr-2">
                        <Icon type={IconType.Telephone} />
                      </span>
                      <span>{contactbox.phone}</span>
                    </a>
                  </p>
                  <p className="text-xs text-neutral-800 font-semibold">
                    <a
                      href={`mailto:${contactbox.mail}`}
                      className="flex items-center"
                    >
                      <span className="icon w-4 h-4 mr-2 ">
                        <Icon type={IconType.Envelope} />
                      </span>
                      <span>{contactbox.mail}</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container my-8 md:my-10 lg:my-20">
        <UserCardContainer
          headline="Das Team"
          body="Wir sind MINTvernetzt – ein junges, engagiertes Team mit unterschiedlichen Erfahrungen, Kompetenzen und Hintergründen. Hier findet Ihr alle Teammitglieder mit ihren Aufgaben. Wir freuen uns auf den Austausch mit Euch."
          userCardsProps={userCardsProps}
        />
      </section>
    </Layout>
  );
}

export default About;

export const pageQuery = graphql`
  query AboutPage {
    usersData: allWpContact(
      sort: { fields: contactInformations___lastName, order: ASC }
    ) {
      nodes {
        contactInformations {
          firstName
          lastName
          email
          title
          position
          organization {
            ... on WpOrganization {
              id
              title
              organizationInformations {
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
          phone
          photo {
            localFile {
              childImageSharp {
                fluid(maxWidth: 300) {
                  src
                }
              }
            }
            altText
          }
        }
      }
    }
  }
`;
