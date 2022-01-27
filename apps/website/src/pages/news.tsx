import {
  H1,
  H2,
  NewsFeed,
  TagClickHandler,
} from "@mint-vernetzt/react-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { getNewsItems } from "../utils/dataTransformer";
import { getQSParam, setQSParam } from "../utils/tagFilter";

export function News({ data }) {
  const [slugFilter, setSlugFilter] = useState<string>(() => getQSParam("q"));

  useEffect(() => {
    console.log("initial QS[q]:" + getQSParam("q"));
    console.log("initial slugFilter:" + slugFilter);
  });

  useEffect(() => {
    console.log("changed" + slugFilter);
  }, [slugFilter]);

  const tagClickHandler: TagClickHandler = (slug) => {
    setQSParam("q", slug);
    setSlugFilter(slug);
  };

  const newsItems = getNewsItems(data.allItems)
    .filter((item) => {
      if (!slugFilter) {
        return true;
      }
      return item.tagsProps.some((tag) => tag.slug === slugFilter);
    })
    .map((item) => {
      item.body = (
        <span dangerouslySetInnerHTML={{ __html: item.body as string }} />
      );
      return item;
    });

  return (
    <Layout>
      <SEO
        title="Neuigkeiten"
        slug="/news"
        children=""
        description=""
        image=""
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
              <H1 like="h0">
                MINT<span className="font-normal">news</span>
              </H1>
              <p className="font-bold md:max-w-1/2 lg:text-3xl lg:leading-snug">
                Informieren, inspirieren und Emotionen wecken mit MINT
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container my-8 md:my-10 lg:my-20">
        <H2>Neuigkeiten</H2>

        <NewsFeed
          headline="Neuigkeiten"
          newsFeedItemsProps={newsItems}
          onTagClick={tagClickHandler}
        />
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query NewsFeed {
    HeroImage: file(relativePath: { eq: "news_overview_large.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1488, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allItems: allWpNewsItem(sort: { fields: [date], order: DESC }) {
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
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 500, quality: 80) {
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
