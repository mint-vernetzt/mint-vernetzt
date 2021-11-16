import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";

import { ContactCard, Icon, IconType } from "@mint-vernetzt/react-components";

export function Mintvernetzt({
  data,
}: {
  data: GatsbyTypes.MintvernetztPageQuery;
}) {
  const pageContact = data.PageContact.contactInformations;

  return (
    <Layout>
      <SEO
        title="MINTvernetzt informiert"
        slug="/mintvernetzt"
        description=""
        image=""
        children=""
      />

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap md:-mx-4">
          <div className="flex-100 md:flex-5/12 md:px-4">
            <img
              src="../images/mintvernetzt_header.svg"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-100 md:flex-7/12 md:px-4 md: self-center">
            <h1 className="text-5xl leading-tight lg:text-7xl lg:leading-none mb-2 lg:mb-4">
              MINT<span className="font-normal">vernetzt</span> informiert
            </h1>

            <p className="lg:text-xl">
              Mit Wissensaustausch zu besserer MINT-Bildung: Um Euch stets über
              Neuigkeiten, Ideen und Innovationen zu informieren und Euch
              Möglichkeiten zu geben, Eure Erkenntnisse untereinander zu teilen,
              haben wir verschiedene Kanäle aufgebaut, auf denen Ihr aktuelle
              Informationen aus der MINT-Welt findet.
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
        <div className="flex flex-wrap md:-mx-4 lg:-mx-20">
          <div className="flex-100 pb-8 md:pb-0 md:flex-1/2 md:px-4 lg:px-20">
            <Img
              fluid={data.NewsImage.childImageSharp.fluid}
              className="w-full h-auto rounded-2xl shadow-md mb-6"
            />

            <h3 className="text-5xl leading-tight lg:text-6xl lg:leading-none mb-2">
              MINTnews
            </h3>
            <p className="lg:text-3xl font-bold mb-2">Der MINTvernetzt-Blog</p>
            <p className="lg:text-xl">
              Mit Wissensaustausch zu besserer MINT-Bildung: Um Euch stets über
              Neuigkeiten, Ideen und Innovationen zu informieren und Euch
              Möglichkeiten zu geben, Eure Erkenntnisse untereinander zu teilen,
              haben wir verschiedene Kanäle aufgebaut, auf denen Ihr aktuelle
              Informationen aus der MINT-Welt findet.
            </p>
            <p>
              <Link to="/news" className="text-lilac-500 font-bold">
                Zu den Neuigkeiten
              </Link>
            </p>
          </div>

          <div className="flex-100 md:flex-1/2 md:px-4 lg:px-20">
            <Img
              fluid={data.BlogImage.childImageSharp.fluid}
              className="w-full h-auto rounded-2xl shadow-md mb-6"
            />

            <h3 className="text-5xl leading-tight lg:text-6xl lg:leading-none mb-2">
              Community Blog
            </h3>
            <p className="lg:text-3xl font-bold mb-2">
              Infos von Euch für Euch
            </p>
            <p className="lg:text-xl">
              Informieren, inspirieren, Emotionen wecken: Wir geben Euch
              Einblicke in die MINT-Welt und schauen auch über den Tellerrand,
              stellen Euch interessante Persönlichkeiten vor und Erkenntnisse
              aus der Forschung. Immer mit dem Fokus, einen Mehrwert für Eure
              Arbeit zu schaffen.
            </p>
          </div>
        </div>
      </section>

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap md:-mx-4 lg:-mx-20">
          <div className="flex-100 pb-8 md:pb-0 md:flex-1/2 md:px-4 lg:px-20">
            <Img
              fluid={data.SocialmediaImage.childImageSharp.fluid}
              className="w-full h-auto rounded-2xl shadow-md mb-6"
            />

            <h3 className="text-5xl leading-tight lg:text-6xl lg:leading-none mb-2">
              #SocialMedia
            </h3>
            <p className="lg:text-xl">
              Ohne das I aus MINT wäre wohl auch hier nichts los: Social Media!
              Zum Glück hat Tim Berners-Lee schon 1989 die Grundlage für das
              moderne WWW geschaffen, damit wir Euch auch dort mit Informationen
              versorgen können: #MINTvernetzt
            </p>
            <div className="flex">
              <div className="icon w-8 h-8 mb-2 border border-secondary-500 rounded-full mr-2">
                <a href="https://twitter.com/mintvernetzt" target="_blank">
                  <Icon type={IconType.Twitter} width="32" height="32" />
                </a>
              </div>
              <div className="icon w-8 h-8 mb-2 border border-secondary-500 rounded-full mr-2">
                <a
                  href="https://www.instagram.com/mintvernetzt/"
                  target="_blank"
                >
                  <Icon type={IconType.Instagram} width="32" height="32" />
                </a>
              </div>
              <div className="icon w-8 h-8 mb-2 border border-secondary-500 rounded-full mr-2">
                <a
                  href="https://www.linkedin.com/company/mintvernetzt"
                  target="_blank"
                >
                  <Icon type={IconType.LinkedIn} width="32" height="32" />
                </a>
              </div>
              <div className="icon w-8 h-8 mb-2 border border-secondary-500 rounded-full">
                <a
                  href="https://www.youtube.com/channel/UCVQSAkscPmmPmjYWDVuvQYg"
                  target="_blank"
                >
                  <Icon type={IconType.Youtube} width="32" height="32" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-100 md:flex-1/2 md:px-4 lg:px-20">
            <Img
              fluid={data.NewsletterImage.childImageSharp.fluid}
              className="w-full h-auto rounded-2xl shadow-md mb-6"
            />

            <h3 className="text-5xl leading-tight lg:text-6xl lg:leading-none mb-2">
              #Newsletter
            </h3>
            <p className="lg:text-xl">
              Alle acht Wochen schicken wir Euch digitale Grüße mit Einblicken
              in die Community, Hinweisen zu Neuigkeiten und Veranstaltungen,
              die Euch interessieren.
            </p>
            <div className="">
              <iframe
                loading="lazy"
                width="100%"
                height="700px"
                src="https://ce0c4c32.sibforms.com/serve/MUIEADIw3mjL_TRpeKjMOqlVzfZeBFxOlaMblMiGnRTPjm2qdRgiZ1_Ot8EiKwf77H3Pe7c8sTq2BcYsphUq4BtTdaILzAONTZrS1F0zJx7hdFaexKl84ZxgoGoUFDMvhFTM9DRmjJW2a6Y1YS7-DhkWJrby6GmL7KDuegzukDXFhwkB_hftIUGRSSI3Ka4aU4i_LNUPdgFosFmp"
                frameBorder="0"
                scrolling="auto"
                allowFullScreen={true}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "100%",
                  maxHeight: "3234px",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Mintvernetzt;

export const pageQuery = graphql`
  query MintvernetztPage {
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

    NewsImage: file(relativePath: { eq: "mood_news.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    BlogImage: file(relativePath: { eq: "mood_wuerfel.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    SocialmediaImage: file(relativePath: { eq: "mood_social-media.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    NewsletterImage: file(relativePath: { eq: "mood_newsletter.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
