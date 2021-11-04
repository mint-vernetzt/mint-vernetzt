import { graphql } from "gatsby";
import React from "react";

function News({ data }) {
  const props = data.allWpNewsItem.nodes[0];
  return (
    <div>
      <h1>{props.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
    </div>
  );
}

export default News;

export const query = graphql`
  query ($slug: String!) {
    allWpNewsItem(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
      }
    }
  }
`;
