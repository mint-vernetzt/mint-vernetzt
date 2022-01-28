import { H1, H2, NewsFeed } from "@mint-vernetzt/react-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { useRef } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useTagFilter } from "../hooks/useTagFilter";
import { getNewsItems } from "../utils/dataTransformer";
import { getAllowedTags } from "../utils/tagUtils";

export function News({ data }: { data: GatsbyTypes.NewsFeedQuery }) {
  let [filterTags, filterClickHandler, tagClickHandler] = useTagFilter("tags");
  let scrollToRef = useRef<HTMLHeadingElement>(null);

  let allNewsItems = getNewsItems(data.allItems).map((item) => {
    item.body = (
      <span dangerouslySetInnerHTML={{ __html: item.body as string }} />
    );
    return item;
  });

  let allowedTags = getAllowedTags(
    allNewsItems.map((item) => item.tagsProps.map((tag) => tag))
  );
  let allowedTagSlugs = allowedTags.map((tag) => tag.slug);

  const newsItems =
    filterTags.length === 0
      ? allNewsItems
      : allNewsItems.filter((item) => {
          return item.tagsProps.some(
            (tag) => filterTags.indexOf(tag.slug) !== -1
          );
        });
  let afterTagClick = () => {
    scrollToRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
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
              <H1 like="h0" ref={scrollToRef}>
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
          newsFeedItemsProps={newsItems}
          filterTags={allowedTags.filter(
            (tag) => filterTags.indexOf(tag.slug) !== -1
          )}
          onTagClick={(slug) => {
            tagClickHandler(slug, allowedTagSlugs, afterTagClick);
          }}
          onFilterClick={(slug) => filterClickHandler(slug, allowedTagSlugs)}
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
