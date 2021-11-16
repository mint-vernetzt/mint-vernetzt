import { graphql, Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import { formatDate, Icon, IconType } from "@mint-vernetzt/react-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

// TODO: move to utility
const formatBytes = function (a: number, b = 2, k = 1024): string {
  // with (Math) {
  let d = Math.floor(Math.log(a) / Math.log(k));
  const result =
    0 == a
      ? "0 Bytes"
      : parseFloat((a / Math.pow(k, d)).toFixed(Math.max(0, b))).toLocaleString(
          "de-DE"
        ) +
        " " +
        ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d];
  return result;
  // }
};

function News({ data }) {
  const props = data.allWpNewsItem.nodes[0];

  return (
    <Layout>
      <SEO
        title={`${props.title}`}
        slug={`/news/${props.slug}`}
        description=""
        image=""
        children=""
      />

      <section className="container py-4 md:py-8">
        <Link
          className="inline-block border border-neutral-400 py-3 px-4 mb-6 text-neutral-800 text-semibold uppercase rounded-lg"
          to="/news"
        >
          <span className="flex items-center">
            <Icon type={IconType.ChevronLeft} />
            zur Übersicht
          </span>
        </Link>

        <div className="flex flex-wrap mb-8">
          <div className="mb-2 md:mb-0 md:mr-2 md:py-2 md:pr-3 font-semibold text-neutral-800 text-xs flex-100 md:flex-none md:order-2">
            {formatDate(new Date(props.date))}
          </div>
          <h1 className="flex-100 md:order-1 text-5xl lg:text-7xl leading-tight lg:leading-none mb-2">
            {props.title}
          </h1>
          <ul className="flex flex-wrap md:order-3">
            {props.tags.nodes.map((tag, index) => {
              return (
                <li
                  key={`tag-${index}`}
                  className="mr-2 mb-2 px-3 py-2 rounded-lg bg-secondary-300 text-neutral-800 text-sm text-bold"
                >
                  {tag.name}
                </li>
              );
            })}
          </ul>
        </div>

        <Img
          fluid={props.featuredImage.node.localFile.childImageSharp.fluid}
          className="rounded-3xl w-100 h-auto"
        />

        <div className="flex flex-wrap mt-4 md:mt-10 lg:mt-20 mb-8 md:-mx-2 lg:-mx-6 ">
          <div className="flex-100 md:flex-2/3 pb-8 md:pb-0 md:px-2 lg:px-6">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{
                __html: props.content,
              }}
            />
          </div>
          {props.documents && props.documents.documentList !== null && (
            <div className="flex-100 md:flex-1/3 md:px-2 lg:px-6">
              <h4 className="text-3xl leading-5 pb-4">Anhänge</h4>
              <ul className="document-list">
                {props.documents.documentList.map((documentListItem, index) => {
                  const { document } = documentListItem;

                  return (
                    <li key={`document-${index}`} className="mb-2">
                      <a
                        href={document.localFile.publicURL}
                        target="_blank"
                        className="flex item-center bg-beige-300 border border-neutral-400 rounded-lg"
                      >
                        <span className="icon w-8 h-8 mb-2 m-4 mr-0">
                          <Icon
                            type={IconType.FilePDF}
                            width="32"
                            height="32"
                          />
                        </span>
                        <div className="my-3 mx-4">
                          <span className="block text-xs text-neutral-600 uppercase">
                            {document.localFile.extension}{" "}
                            {formatBytes(document.localFile.size)}
                          </span>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: document.caption,
                            }}
                          />
                        </div>
                        <div className="icon w-8 h-8 mb-2 m-4 ml-auto">
                          <Icon
                            type={IconType.Download}
                            width="32"
                            height="32"
                          />
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default News;

export const query = graphql`
  query ($id: String!) {
    allWpNewsItem(filter: { id: { eq: $id } }) {
      nodes {
        id
        date
        title
        content
        excerpt
        slug
        tags {
          nodes {
            name
          }
        }
        documents {
          documentList {
            document {
              title
              mimeType
              caption
              fileSize
              localFile {
                size
                extension
                publicURL
              }
            }
          }
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1488, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
