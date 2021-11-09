import { NewsFeed } from "@mint-vernetzt/react-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { getNewsItems } from "../utils/dataTransformer";
import Img from "gatsby-image";

export function News({ data }) {
  const newsItems = getNewsItems(data.allItems);

  return (
    <Layout>
      <SEO
        title="Neuigkeiten"
        slug="/news"
        children=""
        description=""
        image=""
      />
      <section className="container pt-2 md:pt-10">
        <div className="hero hero-news flex items-end rounded-3xl relative overflow-hidden">
          <Img
            fluid={data.HeroImage.childImageSharp.fluid}
            className="w-full h-auto md:h-full"
          />
          <div className="absolute w-full h-full opacity-50 bg-gradient-to-r from-white to-transparent" />

          <div className="hero-text absolute top-0 left-0 min-h-3/4 md:min-h-full right-0 pt-12 px-4 md:px-12 md:flex md:items-center lg:px-20">
            <div className="md:flex-100">
              <h1 className="text-6xl lg:text-7xl leading-none text-blue-500 mb-2">
                MINT<span className="font-normal">news</span>
              </h1>
              <p className="font-bold md:max-w-1/2 lg:text-3xl lg:leading-snug">
                TODO: die Service- und Anlaufstelle der MINT-Akteur:innen in
                Deutschland.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container my-10">
        <NewsFeed headline="Neuigkeiten" newsFeedItemsProps={newsItems} />
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query NewsFeed {
    HeroImage: file(relativePath: { eq: "news_overview.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1488) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allItems: allWpNewsItem(sort: { fields: [date] }) {
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
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 300) {
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

export default News;
