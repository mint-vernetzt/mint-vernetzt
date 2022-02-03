import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import { ReactComponent as Header } from "../images/mintcommunity_header.svg";
import { ContactCard, H1, H2, H3 } from "@mint-vernetzt/react-components";

export function Mintcommunity({
  data,
}: {
  data: GatsbyTypes.MintCommunityPageQuery;
}) {
  const pageContact = data.PageContact.contactInformations;
  return (
    <Layout>
      <SEO
        title="Werde Teil der MINTcommunity"
        slug="/mintcommunity"
        description=""
        image=""
        children=""
      />

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap items-center md:-mx-4">
          <div className="flex-100 pb-4 md:pb-0 md:flex-5/12 md:px-4">
            <Header />
            {/* <img
              src="../images/mintcommunity_header.svg"
              className="w-full h-auto"
              alt="Werde Teil der MINTcommunity"
            />
            */}
          </div>
          <div className="flex-100 md:flex-7/12 md:px-4">
            <H1 like="h0">
              Werde Teil der MINT<span className="font-normal">community</span>
            </H1>

            <p className="lg:text-xl">
              Die bundesweite MINT-Community lebt davon, sich auszutauschen,
              (Erfahrungs-)Wissen zu teilen und von- und miteinander zu lernen.
              Um dies im digitalen Raum zu ermöglichen, entwickeln wir gemeinsam
              mit Euch einen Bereich für Kommunikation und Ko-Kreation auf der
              MINTvernetzt-Plattform. Schon im Frühjahr 2022 wird eine erste
              Version veröffentlicht. Ihr möchtet Euch einbringen und direkt zur
              Beta-Version eingeladen werden?
            </p>
            <p>
              <a
                href="mailto:community@mint-vernetzt.de"
                className="text-lilac-500 font-bold"
              >
                community@mint-vernetzt.de
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap md:-mx-4">
          <div className="flex-100 pb-4 md:pb-0 md:flex-1/2 lg:flex-5/12 md:px-4 md:order-2 relative">
            <div className="raketeimage md:absolute md:left-4 md:top-0">
              <Img
                fixed={data.RaketeImage.childImageSharp.fixed}
                className="rounded-2xl shadow-md"
                alt=""
              />
            </div>

            <div className="zoomimage md:absolute ml-auto text-right -mt-8 md:m-0">
              <Img
                fixed={data.ZoomImage.childImageSharp.fixed}
                className="rounded-2xl shadow-md"
                alt=""
              />
            </div>
            <div className="puzzleimage md:absolute -mt-8 md:m-0">
              <Img
                fixed={data.PuzzleImage.childImageSharp.fixed}
                className="rounded-2xl shadow-md absolute"
                alt=""
              />
            </div>
          </div>
          <div className="flex-100 md:flex-1/2 lg:flex-7/12 md:px-4 md:self-center md:order-1">
            <H2>Partizipation als Schlüssel für eine starke MINT-Community</H2>

            <p className="lg:text-xl mb-8 lg:mb-16">
              Damit die Features des Community-Bereichs genau da ansetzen, wo
              sie benötigt werden, setzen wir in der Entwicklung auf
              Partizipation und Ko-Kreation auf zwei Ebenen: MINT-Akteur:innen
              wirken aktiv auf die Tools und das Design ein. Ihre Bedarfe stehen
              im Fokus, sodass Programmierer:innen aus der Community passende
              Features entwickeln, die durch das MINTvernetzt-Webteam geprüft
              und in die Entwicklung eingebunden werden.
            </p>

            <H3 like="h4">
              Ihr seid MINT-Akteur:in oder Programmierer:in und möchtet die
              Plattform aktiv mitgestalten?
            </H3>

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
          </div>
        </div>
      </section>

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap md:-mx-4">
          <div className="flex-100 md:flex-1/2 lg:flex-7/12 md:px-4 md:self-center md:order-1">
            <H2>MINTvernetzt Ausblick</H2>

            <p className="lg:text-xl">
              Schon bald könnt Ihr hier ganz konkret sehen, an welchen Features
              wir arbeiten. Bereits jetzt gibt es einen Vorgeschmack auf Ideen,
              die für und mit der Community entwickelt wurden. Der Inhalt kommt
              aus qualitativen Leitfadeninterviews, die wir seit Mai mit ganz
              verschiedenen Vertreter:innen der MINT-Community durchführen.
            </p>

            <ul className="list-disc list-inside leading-6 mb-6 lg:text-xl">
              <li>Feature „Institutionen, Netzwerke und MINT-Akteur:innen“</li>
            </ul>

            <p className="lg:text-xl">
              Was mache ich und meine Institution im MINT-Bereich? Welche
              weiteren Institutionen, Netzwerke und MINT-Akteur:innen sind
              regional und überregional aktiv?
            </p>

            <ul className="list-disc list-inside leading-6 mb-6 lg:text-xl">
              <li>Feature „Best Practise-Beispiele“</li>
            </ul>

            <p className="lg:text-xl">
              Welches Projekt hat bei mir besonders gut funktioniert? Welche
              Best Practise-Beispiele anderer MINT-Akteur:innen kann ich nutzen?
            </p>
          </div>
        </div>
      </section>

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap md:-mx-4">
          <div className="flex-100 pb-4 md:pb-0 md:flex-1/2 md:px-4">
            <Img
              fluid={data.HackathonImage.childImageSharp.fluid}
              className="w-full h-auto rounded-2xl shadow-md"
            />
          </div>
          <div className="flex-100 md:flex-1/2 md:px-4 md:self-center">
            <p className="lg:text-xl">
              In einem Hackathon zum Kick-off der Entwicklung des
              Community-Bereichs im Herbst 2021 hat die Community der
              MINT-Akteur:innen und Programmierer:innen bereits intensiv an
              Feature-Ideen gearbeitet, erste Präsentationen und kleine Mockups
              entwickelt und in einem großen Pitch zum Ende des Hackathons
              vorgestellt.
            </p>

            <p className="lg:text-xl">
              Welche Features verfolgen wir daraus nun weiter? Das könnt Ihr
              hier schon zeitnah in einem Blog-Beitrag nachlesen.
            </p>

            <p className="lg:text-xl">
              Ihr habt den ersten Hackathon verpasst? Keine Sorge, wir
              wiederholen das Event im Spätsommer 2022. Alle Informationen
              bekommt Ihr vorab über unseren Veranstaltungsbereich.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Mintcommunity;

export const pageQuery = graphql`
  query MintCommunityPage {
    HackathonImage: file(relativePath: { eq: "mintcommunity_hackathon.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 728, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    PuzzleImage: file(relativePath: { eq: "mintcommunity_puzzle.jpg" }) {
      childImageSharp {
        fixed(width: 280, height: 200, quality: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    RaketeImage: file(relativePath: { eq: "mintcommunity_rakete.jpg" }) {
      childImageSharp {
        fixed(width: 280, height: 200, quality: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ZoomImage: file(relativePath: { eq: "mintcommunity_zoom.png" }) {
      childImageSharp {
        fixed(width: 280, height: 200, quality: 80) {
          ...GatsbyImageSharpFixed
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
