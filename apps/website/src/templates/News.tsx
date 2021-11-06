import { graphql, Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import { formatDate } from "@mint-vernetzt/react-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

function News({ data }) {
  const props = data.allWpNewsItem.nodes[0];
  return (
    <Layout>
      <SEO title={`${props.title}`} slug={`/news/${props.slug}`} />

      <section className="container my-4 md:my-8">
        <Link
          className="inline-block border border-neutral-400 py-3 px-4 mb-6 text-neutral-800 text-semibold uppercase rounded-lg"
          to="/news"
        >
          zur Übersicht
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
              dangerouslySetInnerHTML={{
                __html: props.content,
              }}
            />
          </div>
          <div className="flex-100 md:flex-1/3 md:px-2 lg:px-6">
            <h4 className="text-3xl leading-5 pb-4">Documents</h4>
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
                      <div className="icon w-8 h-8 mb-2 bg-red-600 m-4 mr-0"></div>
                      <div className="my-3 mx-4">
                        <span className="block text-xs text-neutral-600 uppercase">
                          {document.mimeType}
                        </span>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: document.caption,
                          }}
                        />
                      </div>
                      <div className="icon w-8 h-8 mb-2 bg-red-600 m-4 ml-auto"></div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
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
              localFile {
                publicURL
              }
            }
          }
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(maxWidth: 300) {
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
