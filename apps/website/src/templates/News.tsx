import { graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";

function News({ data }) {
  const props = data.allWpNewsItem.nodes[0];
  return (
    <div>
      <p>{props.date}</p>
      <ul>
        {props.tags.nodes.map((tag, index) => {
          return <li key={`tag-${index}`}>{tag.name}</li>;
        })}
      </ul>
      <Img fluid={props.featuredImage.node.localFile.childImageSharp.fluid} />
      <h1>{props.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
      <h2>Documents</h2>
      <ul>
        {props.documents.documentList.map((documentListItem, index) => {
          const { document } = documentListItem;
          return (
            <li key={`document-${index}`}>
              {document.mimeType}
              <br />
              <a
                href={document.localFile.publicURL}
                target="_blank"
                dangerouslySetInnerHTML={{
                  __html: document.caption,
                }}
              ></a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default News;

export const query = graphql`
  query ($slug: String!) {
    allWpNewsItem(filter: { slug: { eq: $slug } }) {
      nodes {
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
