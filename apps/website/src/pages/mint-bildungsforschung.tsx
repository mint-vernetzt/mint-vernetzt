import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";

import {
  H1,
  H2,
  H3,
  H4,
  H6,
  Icon,
  IconType,
} from "@mint-vernetzt/react-components";

export function MintForschung({
  data,
}: {
  data: GatsbyTypes.MintForschungPageQuery;
}) {
  return (
    <Layout>
      <SEO
        title="MINT-Bildungsforschung"
        slug="/mint-bildungsforschung"
        description="Wissenschaftliche Untersuchungen und aktuelle Erkenntnisse, die die Bildungsarbeit konkret unterstützen."
        image=""
        children=""
      />
      <section className="container my-8 md:my-10 lg:my-20">
        <div className="hero hero-news flex items-end rounded-3xl relative overflow-hidden">
          <Img
            fluid={data.HeroImage.childImageSharp.fluid}
            className="w-full h-full"
            alt="MINTnews: Informieren, inspirieren und Emotionen wecken mit MINT"
          />

          <div className="hero-text absolute top-0 left-0 h-full right-0 pt-12 px-4 md:px-12 md:flex md:items-center lg:px-20">
            <div className="md:flex-100">
              <H1 like="h0">MINT-Bildungsforschung</H1>
              <p className="font-bold md:max-w-1/2 lg:text-3xl lg:leading-snug">
                Wissenschaftliche Untersuchungen und aktuelle Erkenntnisse, die
                die Bildungsarbeit konkret unterstützen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <header>
          <H2 like="h1">Gendersensible Lehrmethoden und -umgebungen</H2>
          <p className="text-xl md:px-8 lg:px-20 ">
            In unterschiedlichen Beiträgen bereiten wir Forschungserkenntnisse
            praxisorientiert auf und teilen Wissen miteinander. In diesem
            Themenschwerpunkt zeigen wir, mit welchen didaktischen Maßnahmen man
            Mädchen für einzelne MINT-Disziplinen begeistern kann und wie
            wichtige Formate der Begabtenförderung immer noch von Stereotypen
            beeinflusst werden. Diese Themenseiten sind ein stetig wachsender
            Wissensschatz, der sich immer wieder um weitere Artikel und
            Interviews erweitern wird.
          </p>
        </header>

        <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2">
          {[
            {
              image: data.Dossier1TeaserImage.childImageSharp.fluid,
              title: `Wie können Mädchen fürs Programmieren begeistert werden?`,
              text: `Welche didaktischen Maßnahmen sind besonders wirksam, um das Interesse von Mädchen an Informatik, Programmieren und Computern nachhaltig zu fördern? Der folgende Artikel bietet Euch konkrete Handlungsempfehlungen aus der Forschung.`,
              link: `/gender-didaktik-dossier_meta-review/`,
            },
            {
              image: data.Dossier2TeaserImage.childImageSharp.fluid,
              title: `Wettbewerbe sind für Mädchen weniger attraktiv als für Jungen – über Stereotype und Strukturen`,
              text: `Mathematik- und Wissenschaftsolympiaden sind für die Teilnehmenden oft ein Sprungbrett für die Zulassung zu Spitzenuniversitäten und für künftige Karrieren im MINT-Bereich. Wie Geschlechterstereotype die Teilnahme von Mädchen beeinflussen und warum man als Anbieter:in die eigenen Wettbewerbsstrukturen kritisch reflektieren sollte, lest Ihr hier.`,
              link: `/gender-didaktik-dossier_wettbewerbe/`,
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
                <p>
                  <button className="btn-primary">Jetzt lesen</button>
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <header>
          <H2 like="h1">Blogbeiträge und Events zum Thema</H2>
          <p className="text-xl md:px-8 lg:px-20 ">
            Wir möchten in Vernetzungsformaten darüber in Austausch kommen, wie
            wir als MINT-Community Mädchen und junge Frauen in diesem Bereich
            stärken können. Dafür gibt es Events wie das MINTcafé Gender, aber
            auch immer wieder Blogartikel über neue Erkenntnisse und
            Praxisperspektiven. Schaut mal rein!
          </p>
        </header>

        <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-3">
          {[
            {
              title: `Mädchen und Frauen in MINT – wie geht es von hier aus weiter?`,
              text: `Zwar gab es in den letzten Jahrzehnten einige positive Tendenzen – dennoch sind Mädchen und Frauen in MINT nach wie vor deutlich unterrepräsentiert. Wir werfen einen Blick auf die Ausgangssituation und entsprechende Zahlen.`,
              link: `/news/maedchen-und-frauen-in-mint-wie-geht-es-von-hier-aus-weiter`,
            },
            {
              title: `So begeistern diese Expert:innen Mädchen und Frauen von MINT entlang der Bildungskette`,
              text: `Drei Initiativen, drei Erfolgsgeschichten: wie die Ansprache von Mädchen und jungen Frauen den Funken der Begeisterung für MINT(-Berufe) entfachen kann.`,
              link: `/news/so-begeistern-diese-expertinnen-maedchen-und-frauen-von-mint-entlang-der-bildungskette`,
            },
            {
              title: `MINTcafé Gender`,
              text: `Wir möchten Euch herzlich zum „MINTcafé Gender“ einladen! Hier könnt Ihr Euch zum Thema „Mädchen und Frauen in MINT“ informieren und austauschen, vernetzen und Synergien entstehen lassen.`,
              link: `/event/mintvernetzt-mintcafe-gender`,
            },
          ].map((teaserbox, index) => (
            <div
              key={`teaserbox-${index}`}
              className="p-4 rounded-lg bg-neutral-200 shadow-lg"
            >
              <Link to={`${teaserbox.link}`} className="flex flex-col h-100">
                <H4 className="lg:leading-snug lg:mx-2">{teaserbox.title}</H4>
                <p className="lg:mx-2">{teaserbox.text}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default MintForschung;

export const pageQuery = graphql`
  query MintForschungPage {
    HeroImage: file(relativePath: { eq: "dossier_header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1488, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Dossier1TeaserImage: file(relativePath: { eq: "dossier_1_teaser.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 744, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Dossier2TeaserImage: file(relativePath: { eq: "dossier_2_teaser.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 744, quality: 80) {
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
  }
`;
