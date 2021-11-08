import { EventFeed } from "@mint-vernetzt/react-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { getParentEventItems } from "../utils/dataTransformer";

export function Events({ data }: { data: GatsbyTypes.EventFeedQuery }) {
  const events = getParentEventItems(data.events);
  return (
    <Layout>
      <SEO
        title="Veranstaltungen"
        slug="/events"
        children=""
        image=""
        description=""
      />

      <EventFeed
        headline="Headline"
        linkToOverview=""
        eventFeedItemsProps={events}
      />
    </Layout>
  );
}
export const pageQuery = graphql`
  query EventFeed {
    events: allWpEvent(
      filter: { parentId: { eq: null } }
      sort: { fields: eventInformations___startDate, order: DESC }
    ) {
      nodes {
        excerpt
        content
        eventInformations {
          startTime
          startDate
          endTime
          endDate
        }
        eventCategories {
          nodes {
            name
          }
        }
        title
        slug
      }
    }
  }
`;

export default Events;
