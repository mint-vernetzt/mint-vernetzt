import {
  filterProviderQS,
  H1,
  H2,
  NewsFeed,
  setQSParam,
  TagClickHandler,
  tagFilterReducer,
  TagProps,
} from "@mint-vernetzt/react-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { useEffect, useReducer, useRef } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { getNewsItems } from "../utils/dataTransformer";

export const TAGS_QS_PARAM = "tags";

export function News({ data }: { data: GatsbyTypes.NewsFeedQuery }) {
  const [filterTags, dispatch] = useReducer(
    tagFilterReducer,
    filterProviderQS(TAGS_QS_PARAM) ?? []
  );
  let headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setQSParam(TAGS_QS_PARAM, filterTags);
  }, [filterTags]);

  let allNewsItems = getNewsItems(data.allItems);

  let allowedTags: TagProps[] = [
    ...new Map(
      allNewsItems
        .map((item) => item.tagsProps.map((tag) => tag))
        .reduce((acc, cur) => acc.concat(cur))
        .map((item) => [item.slug, item])
    ).values(),
  ];

  let allowedTagSlugs = allowedTags.map((tag) => tag.slug);

  let tagClickHandler: TagClickHandler = (slug) => {
    if (
      allowedTagSlugs.indexOf(slug) !== -1 &&
      filterTags.indexOf(slug) === -1
    ) {
      dispatch({ slug, type: "ADD" });

      if (headlineRef.current) {
        headlineRef.current.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      }
    }
  };

  let filterClickHandler: TagClickHandler = (slug) => {
    if (allowedTagSlugs.indexOf(slug) !== -1) {
      dispatch({ slug, type: "REMOVE" });
    }
  };

  const newsItems = (
    filterTags.length === 0
      ? allNewsItems
      : allNewsItems.filter((item) => {
          return item.tagsProps.some(
            (tag) => allowedTagSlugs.indexOf(tag.slug) !== -1
          );
        })
  ).map((item) => {
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
              <H1 like="h0" ref={headlineRef}>
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
          onTagClick={tagClickHandler}
          onFilterClick={filterClickHandler}
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
