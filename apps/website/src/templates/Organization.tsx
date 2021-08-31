import { graphql } from "gatsby";
import React from "react";

function Organization(props) {
  const { data } = props;
  const item = data.allWpOrganization.nodes[0];
  return (
    <>
      {item.featuredImage !== null ? (
        <img
          src={item.featuredImage.node.sourceUrl}
          alt={item.featuredImage.node.altText}
        />
      ) : null}
      <h1>{item.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: item.content,
        }}
      />
    </>
  );
}

export default Organization;

export const query = graphql`
  query ($slug: String!) {
    allWpOrganization(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`;
