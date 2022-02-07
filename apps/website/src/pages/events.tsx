import { ChipFilter, EventFeed, H1 } from "@mint-vernetzt/react-components";
import { graphql } from "gatsby";
import { useRef } from "react";
import Affix from "../components/affix";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useTagFilter } from "../hooks/useTagFilter";
import { ReactComponent as EventsOverview } from "../images/events_overview.svg";
import { getParentEventItems } from "../utils/dataTransformer";
import { getUniqueTags } from "../utils/tagUtils";

export function Events({ data }: { data: GatsbyTypes.EventFeedQuery }) {
  let [filterTags, filterClickHandler, addTagClickHandler, removeInvalidTags] =
    useTagFilter("tags");
  let scrollToRef = useRef<HTMLElement>(null);
  let events = getParentEventItems(data.events).map((item) => {
    item.body = (
      <span dangerouslySetInnerHTML={{ __html: item.body as string }} />
    );
    return item;
  });
  let now = new Date();
  let futureEvents = events.filter((event) => event.date >= now);

  let allowedTags = getUniqueTags(
    futureEvents.map((event) => event.tags.map((tag) => tag))
  );
  let allowedTagSlugs = allowedTags.map((tag) => tag.slug);

  removeInvalidTags(allowedTagSlugs);

  let afterTagClick = () => {
    scrollToRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  let filteredEvents =
    filterTags.length === 0
      ? futureEvents
      : futureEvents.filter((event) => {
          return filterTags.every(
            (slug) => event.tags.filter((it) => it.slug === slug).length > 0
          );
        });

  let possibleTags = getUniqueTags(filteredEvents.map((event) => event.tags));

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

      <section
        ref={scrollToRef}
        className="container event-list my-8 md:my-10 lg:my-20"
      >
        <div className="h-50 z-50 relative">
          <Affix top={0}>
            <ChipFilter
              chips={allowedTags}
              possibleTags={possibleTags}
              selectedChips={allowedTags.filter(
                (tag) => filterTags.indexOf(tag.slug) !== -1
              )}
              onChipClick={(slug) => filterClickHandler(slug, allowedTagSlugs)}
            />
          </Affix>
        </div>
        <EventFeed
          eventFeedItemsProps={filteredEvents}
          onChipClick={(slug) =>
            addTagClickHandler(slug, allowedTagSlugs, afterTagClick)
          }
        />
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
            slug
          }
        }
        title
        slug
      }
    }
  }
`;

export default Events;
