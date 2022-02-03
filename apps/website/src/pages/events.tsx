import { EventFeed, H1 } from "@mint-vernetzt/react-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { getParentEventItems } from "../utils/dataTransformer";
import { ReactComponent as EventsOverview } from "../images/events_overview.svg";

export function Events({ data }: { data: GatsbyTypes.EventFeedQuery }) {
  const events = getParentEventItems(data.events).map((item) => {
    item.body = (
      <span dangerouslySetInnerHTML={{ __html: item.body as string }} />
    );
    return item;
  });

  // filter past events
  const now = new Date();
  const futureEvents = events.filter((event) => {
    return event.date > now;
  });

  return (
    <Layout>
      <SEO
        title="Veranstaltungen"
        slug="/events"
        children=""
        image=""
        description=""
      />

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap md:-mx-6 lg:-mx-10">
          <div className="flex-100 md:flex-1/3 md:order-2 pb-4 md:pb-0 md:px-6 lg:px-10">
            <EventsOverview />
          </div>

          <div className="flex-100 md:flex-2/3 md:px-6 lg:px-10 md:order-1">
            <H1 like="h0">
              MINT<span className="font-normal">events</span>
            </H1>

            <p className="lg:text-3xl lg:leading-snug text-neutral-600 mb-4 font-bold">
              Gemeinsam die bunte Vielfalt der MINT-Bildungswelt zeigen.{" "}
            </p>

            <p className="lg:text-xl text-neutral-600 mb-4">
              Dafür entwickeln wir bedarfsorientiert analoge und digitale
              Veranstaltungsformate. Um Euch besser kennenzulernen, legen wir,
              so es die Umstände erlauben, einen besonderen Schwerpunkt auf
              Kontakte vor Ort und Präsenzveranstaltungen, die von digitalen
              Formaten (z. B. virtuellen Stammtischen und Dialogformaten)
              flankiert werden.
            </p>
          </div>
        </div>
      </section>

      <section className="container event-list my-8 md:my-10 lg:my-20">
        <EventFeed eventFeedItemsProps={futureEvents} />
      </section>
    </Layout>
  );
}
export const pageQuery = graphql`
  query EventFeed {
    events: allWpEvent(
      filter: { parentId: { eq: null } }
      sort: { fields: eventInformations___startDate, order: ASC }
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
        tags {
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
