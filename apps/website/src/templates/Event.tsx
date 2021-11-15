import { graphql, Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import {
  ContactCard,
  EventNavigation,
  formatDate,
  Icon,
  IconType,
} from "@mint-vernetzt/react-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { getRelatedEvents } from "../utils/dataTransformer";

const getImage = (data: GatsbyTypes.EventQuery) => {
  if (data.event.parent === null) {
    return (
      data.event.featuredImage?.node?.localFile?.childImageSharp?.fluid ?? null
    );
  } else {
    return (
      data.event.parent?.node?.featuredImage?.node?.localFile?.childImageSharp
        ?.fluid ?? null
    );
  }
};

const getContactPerson = (
  data: GatsbyTypes.EventQuery
): GatsbyTypes.EventQuery["event"]["eventInformations"]["contactPerson"] => {
  return data.event.parent?.node?.eventInformations?.contactPerson?.length
    ? data.event.parent?.node?.eventInformations?.contactPerson
    : data.event.eventInformations.contactPerson;
};

function EventHeader(event: GatsbyTypes.EventQuery["event"]) {
  const parentEvent = event.parent === null ? event : event.parent.node;
  const date = new Date(parentEvent.date);
  const formattedDate = formatDate(date);
  return (
    <div className="flex flex-wrap mb-8">
      <div className="mb-2 md:mb-0 md:mr-2 md:py-2 md:pr-3 font-semibold uppercase text-neutral-800 text-xs flex-100 md:flex-none md:order-2">
        <p className="text-xs text-neutral-800 font-semibold mb-4 flex items-center">
          <span className="icon w-4 h-4 mr-2">
            <Icon type={IconType.Calendar} />
          </span>
          <span>
            <time
              data-testid="date"
              dateTime={date.toISOString()}
              className="uppercase font-semibold text-neutral-800 text-xs mr-4"
            >
              {formatDate(new Date(parentEvent.date))}
            </time>
          </span>
        </p>
        {/* <div className="inline-block icon mr-2 w-3 h-3 bg-red-600"></div>{" "}
        {formatDate(new Date(parentEvent.date))}
        {parentEvent.eventCategories.nodes.map((category) => (
          <>
            <div className="inline-block icon ml-3 mr-2 w-3 h-3 bg-red-600"></div>{" "}
            <div className="inline-block">{category.name}</div>
          </>
        ))} */}
      </div>

      {event.parent ? (
        <h2 className="flex-100 md:order-1 text-5xl lg:text-7xl leading-tight lg:leading-none mb-2 lg:mb-8">
          {parentEvent.title}
        </h2>
      ) : (
        <h1 className="flex-100 md:order-1 text-5xl lg:text-7xl leading-tight lg:leading-none mb-2 lg:mb-8">
          {parentEvent.title}
        </h1>
      )}

      {parentEvent.tags && (
        <ul className="flex flex-wrap md:order-3">
          {parentEvent.tags.nodes.map((tag, index) => (
            <li
              key={`tag-${index}`}
              className="mr-2 mb-2 px-3 py-2 rounded-lg bg-secondary-300 text-neutral-800 text-sm text-bold"
            >
              {tag.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Event({ data }: { data: GatsbyTypes.EventQuery }) {
  const { event } = data;
  const image = getImage(data);
  const relatedEvents = getRelatedEvents(data);
  const contactPerson = getContactPerson(data);

  return (
    <Layout>
      <SEO
        title={`${event.title}`}
        slug={`/event/${event.slug}`}
        description=""
        image=""
        children=""
      />

      <section className="container my-4 md:my-8">
        <Link
          className="inline-block border border-neutral-400 py-3 px-4 mb-4 text-neutral-800 text-semibold uppercase rounded-lg"
          to="/events"
        >
          Zur Veranstaltungsübersicht
        </Link>

        {EventHeader(event)}

        {image !== null && (
          <Img fluid={image} className="rounded-3xl w-100 h-auto lg:mb-20" />
        )}

        {event.parent && (
          <div className="mt-6 md:mt-8 lg:mt-20">
            <Link
              to={`/event/${event.parent.node.slug}`}
              className="inline-block text-bold text-lilac-500"
            >
              &lt; Zurück zur Übersicht
            </Link>
          </div>
        )}

        <div className="flex flex-wrap mt-6 md:mt-8 lg:mt-10 mb-8 md:-mx-2 lg:-mx-6 ">
          <div className="flex-100 md:flex-2/3 pb-8 md:pb-0 md:px-2 lg:px-6">
            {event.parent && (
              <h1 className="text-4xl leading-snug mb-2">{event.title}</h1>
            )}
            <div
              className="event-description"
              dangerouslySetInnerHTML={{
                __html: event.content,
              }}
            />

            {event.allChildren && (
              <ul>
                {event.allChildren.nodes.map((childEvent) => (
                  <li
                    key={childEvent.id}
                    className="border-b border-neutral-400 last:border-b-0 pt-4 pb-6"
                  >
                    <time
                      data-testid="date"
                      dateTime="2021-11-04T13:25:36.000Z"
                      className="mb-2 md:mb-0 md:mr-2 md:py-2 md:pr-3 uppercase font-bold text-neutral-800 text-xs flex-100 md:flex-none md:order-3"
                    >
                      {formatDate(
                        new Date(childEvent.eventInformations.startDate)
                      )}
                    </time>
                    <h4 className="text-3xl leading-snug mb-2 flex-100 md:order-1">
                      <Link
                        to={`/event/${childEvent.slug}`}
                        className="cursor-pointer hover:underline"
                      >
                        {childEvent.title}
                      </Link>
                    </h4>
                    <p
                      data-testid="body"
                      className="line-clamp-5 mb-4 md:line-clamp-none flex-100 md:order-2"
                    >
                      {childEvent.excerpt.replace(/<[^>]*>/g, "")}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex-100 md:flex-1/3 md:px-2 lg:px-6">
            {relatedEvents.length > 0 && (
              <EventNavigation
                headline="Veranstaltungstage"
                items={relatedEvents}
                currentUrl={`/event/${event.slug}`}
                linkWrapper={(url, children) => (
                  <Link to={url}>{children}</Link>
                )}
              />
            )}

            {contactPerson && (
              <ContactCard
                headline="Ansprechpartner:In"
                name={`${contactPerson[0].contactInformations.firstName} ${contactPerson[0].contactInformations.lastName}`}
                position={contactPerson[0].contactInformations.position}
                phone={contactPerson[0].contactInformations.phone}
                email={contactPerson[0].contactInformations.email}
                avatar={{
                  src: contactPerson[0].contactInformations.photo.localFile
                    .childImageSharp.fluid.src,
                  alt: `${contactPerson[0].contactInformations.firstName} ${contactPerson[0].contactInformations.lastName}`,
                }}
              />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Event;

export const query = graphql`
  query Event($id: String!) {
    event: wpEvent(id: { eq: $id }) {
      id
      date
      title
      content
      excerpt
      slug
      tags {
        nodes {
          name
        }
      }
      eventCategories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200, maxHeight: 398) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          altText
        }
      }
      parent: wpParent {
        node {
          ... on WpEvent {
            id
            title
            date
            slug
            tags {
              nodes {
                name
              }
            }
            eventCategories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, maxHeight: 250) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                altText
              }
            }
            eventInformations {
              contactPerson {
                ... on WpContact {
                  id
                  contactInformations {
                    phone
                    firstName
                    lastName
                    email
                    position
                    photo {
                      altText
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 100, maxHeight: 100) {
                            ...GatsbyImageSharpFluid
                            src
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      allChildren: wpChildren {
        nodes {
          ... on WpEvent {
            id
            title
            excerpt
            slug
            eventInformations {
              startDate
              startTime
              endDate
              endTime
            }
          }
        }
      }
      allSiblings: wpParent {
        node {
          ... on WpEvent {
            wpChildren {
              nodes {
                ... on WpEvent {
                  id
                  title
                  excerpt
                  slug
                  eventInformations {
                    startDate
                    startTime
                    endDate
                    endTime
                  }
                }
              }
            }
          }
        }
      }
      eventInformations {
        contactPerson {
          ... on WpContact {
            id
            contactInformations {
              phone
              firstName
              lastName
              email
              position
              photo {
                altText
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 100, maxHeight: 100) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
