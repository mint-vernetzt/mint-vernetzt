import React from "react";
import { graphql, Link } from "gatsby";

import "../../../../libs/design-system/src/styles.css";

export function Index({ data }) {
  return (
    <>
      <h1>Welcome to website!</h1>
      <h4>Posts</h4>
      {data.allWpPost.nodes.map((node, index) => (
        <div key={`post ${index}`}>
          <Link to={node.slug}>
            <h2>{node.title}</h2>
          </Link>
          <div
            dangerouslySetInnerHTML={{
              __html: node.excerpt,
            }}
          />
        </div>
      ))}
      <h4>Partner </h4>
      {data.allWpOrganization.nodes.map((node, index) => {
        return (
          <div key={`organization ${index}`}>
            <Link to={node.slug}>
              <h2>{node.title}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default Index;

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
    allWpOrganization {
      nodes {
        slug
        title
      }
    }
  }
`;
