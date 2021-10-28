import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { EventFeed, EventFeedItemProps } from "@mint-vernetzt/react-components";

import "../../../../libs/design-system/src/styles.css";

export type EventData = {
  title: string;
  excerpt: string;
  slug: string;
  tags: {
    nodes: [string];
  };
  duration: {
    startDate: string;
    startTime: string | null;
    endDate: string | null;
    endTime: string | null;
  };
};

export function formatExcerpt(excerptString: string) {
  const expression = /<\/?[\w\s]*>|<.+[\W]>/g;
  const tagsRemoved = excerptString.replace(expression, "");
  const quotesAdded = tagsRemoved.replace(/(&#8220|&#8222);/g, '"');
  return quotesAdded;
}

export function transformEventData(eventData: EventData[]) {
  const transformedData: EventFeedItemProps[] = [];
  eventData.forEach((eventDataItem) => {
    transformedData.push({
      headline: eventDataItem.title,
      body: formatExcerpt(eventDataItem.excerpt),
      slug: eventDataItem.slug,
      date: new Date(eventDataItem.duration.startDate),
    });
  });
  return transformedData;
}

export function Index() {
  const data = useStaticQuery(graphql`
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
  `);
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
      <EventFeed
        headline="Veranstaltungen"
        linkToOverview="/"
        eventFeedItemsProps={transformEventData(data.allWpEvent.nodes)}
      />
    </>
  );
}

export default Index;

// export const pageQuery = graphql`
//   query {
//     allWpPost(sort: { fields: [date] }) {
//       nodes {
//         title
//         excerpt
//         slug
//       }
//     }
//     allWpEvent {
//       nodes {
//         title
//         excerpt
//         slug
//         tags {
//           nodes {
//             name
//           }
//         }
//         duration {
//           startDate
//           startTime
//           endDate
//           endTime
//         }
//       }
//     }
//   }
// `;
