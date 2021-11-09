import { EventFeed } from "@mint-vernetzt/react-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { getParentEventItems } from "../utils/dataTransformer";
import Img from "gatsby-image";

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

      <section className="container mt-4 md:mt-10">
        <div className="flex flex-wrap md:-mx-6 lg:-mx-10">
          <div className="flex-100 md:flex-1/3 md:order-2 pb-4 md:pb-0 md:px-6 lg:px-10">
            <Img
              fluid={data.HeaderImage.childImageSharp.fluid}
              className="w-full h-auto rounded-3xl"
            />
          </div>

          <div className="flex-100 md:flex-2/3 md:px-6 lg:px-10 md:order-1">
            <h1 className="text-5xl leading-tight lg:text-7xl lg:leading-none text-blue-500 mb-2">
              MINT<span className="font-normal">events</span>
            </h1>

            <p className="lg:text-3xl lg:leading-snug text-neutral-600 mb-4 font-bold">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,{" "}
            </p>

            <p className="lg:text-xl text-neutral-600 mb-4">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr. No sea takimata sanctus est
            </p>

            <p className="lg:text-xl text-neutral-600">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr.
            </p>
          </div>
        </div>
      </section>

      <section className="container event-list my-10 lg:my-20">
        <EventFeed eventFeedItemsProps={events} />
      </section>
    </Layout>
  );
}
export const pageQuery = graphql`
  query EventFeed {
    HeaderImage: file(relativePath: { eq: "events_overview.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 540) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
