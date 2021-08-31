import { graphql } from "gatsby";
import React from "react";

function Post({ data }) {
  const post = data.allWpPost.nodes[0];
  return (
    <div>
      <h1>{post.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </div>
  );
}

export default Post;

export const query = graphql`
  query ($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
      }
    }
  }
`;
