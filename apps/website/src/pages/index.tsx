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
    allWpEvent {
      nodes {
        title
        excerpt
        slug
        tags {
          nodes {
            name
          }
        }
        duration {
          startDate
          startTime
          endDate
          endTime
        }
      }
    }
  }
`;
