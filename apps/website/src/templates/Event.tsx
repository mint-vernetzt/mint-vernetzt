import { graphql, Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import { formatDate } from "@mint-vernetzt/react-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

const getImage = (data: GatsbyTypes.EventQuery) => {
  if (data.event.parent === null) {
    return (
      data.event.featuredImage.node.localFile.childImageSharp.fluid ?? null
    );
  } else {
    return (
      data.event.parent?.node?.featuredImage?.node?.localFile?.childImageSharp
        ?.fluid ?? null
    );
  }
};

function Event({ data }: { data: GatsbyTypes.EventQuery }) {
  const { event } = data;
  const image = getImage(data);

  return (
    <Layout>
      <SEO
        title={`${event.title}`}
        slug={`/event/${event.slug}`}
        description=""
        image=""
        children=""
      />

      <section className="container my-8">
        <Link
          className="inline-block border border-neutral-400 py-3 px-4 mb-4 text-neutral-800 text-semibold uppercase rounded-lg"
          to="/events"
        >
          Zur Veranstaltungs Übersicht
        </Link>

        <div className="flex flex-wrap items-center md:-mx-4 lg:-mx-6 ">
          <div className="flex-100 md:flex-2/3 pb-8 md:pb-0 md:px-4 lg:px-6 md:order-1">
            <div className="mb-2 md:mb-0 md:mr-2 md:py-2 md:pr-3 font-semibold text-neutral-800 text-xs flex-100 md:flex-none md:order-2">
              {formatDate(new Date(event.date))}
            </div>

            <h1 className="text-5xl leading-tight lg:text-6xl lg:leading-none text-blue-500 mb-8">
              {event.title}
            </h1>
            {image && <Img fluid={image} className="rounded-sm" />}
          </div>
        </div>

        <div className="flex flex-wrap md:-mx-4 lg:-mx-6">
          <div className="flex-100 md:flex-2/3 pb-8 md:pb-0 md:px-4 lg:px-6 md:order-1">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: event.content }}
            />
          </div>

          <ul>
            {event.allChildren &&
              event.allChildren.nodes.map((childEvent) => (
                <>
                  <li key={childEvent.id}>
                    <time
                      data-testid="date"
                      dateTime="2021-11-04T13:25:36.000Z"
                      className="mb-2 md:mb-0 md:mr-2 md:py-2 md:pr-3 uppercase font-bold text-neutral-800 text-xs flex-100 md:flex-none md:order-3"
                    >
                      {formatDate(
                        new Date(childEvent.eventInformations.startDate)
                      )}
                    </time>
                    <h4 className="text-primary text-3xl leading-snug mb-2 normal-case flex-100 md:order-1">
                      <Link
                        to={`/event/${event.slug}/${childEvent.slug}`}
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
                </>
              ))}
          </ul>

          <div className="flex-100 md:flex-1/3 pb-8 md:pb-0 md:px-4 lg:px-6 md:order-2">
            {event.allSiblings &&
              event.allSiblings.node.wpChildren.nodes.map((sibling) => (
                <div>
                  <Link to={`/event/${event.parent.node.slug}/${sibling.slug}`}>
                    {sibling.title}
                  </Link>
                </div>
              ))}
          </div>
        </div>

        <div>{/* -- MAIN CONTENT -- */}</div>
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
            slug
            tags {
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
                  slug
                  excerpt
                }
              }
            }
          }
        }
      }
    }
  }
`;
