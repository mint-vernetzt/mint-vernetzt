import {
  Chip,
  formatDate,
  H1,
  H4,
  Icon,
  IconType,
} from "@mint-vernetzt/react-components";
import { graphql, Link, navigate } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

// TODO: move to utility
const formatBytes = function (a: number, b = 2, k = 1024): string {
  // with (Math) {
  let d = Math.floor(Math.log(a) / Math.log(k));
  const result =
    0 == a
      ? "0 Bytes"
      : parseFloat((a / Math.pow(k, d)).toFixed(Math.max(0, b))).toLocaleString(
          "de-DE"
        ) +
        " " +
        ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d];
  return result;
  // }
};

function News({ data }) {
  const { newsItem: props } = data;

  return (
    <Layout>
      <SEO
        title={`${props.title}`}
        slug={`/news/${props.slug}`}
        description=""
        image=""
        children=""
      />

      <section className="container py-4 md:py-8">
        <Link
          className="inline-block border border-neutral-400 py-3 px-4 mb-6 text-neutral-800 text-semibold uppercase rounded-lg"
          to="/news/"
          onClick={(e) => {
            if (
              typeof window !== "undefined" &&
              window.previousPath === "/news/"
            ) {
              e.preventDefault();
              navigate(-1);
            }
          }}
        >
          <span className="flex items-center">
            <span className="mr-2">
              <Icon type={IconType.ChevronLeft} />
            </span>
            zur Übersicht
          </span>
        </Link>

        <div className="flex flex-wrap mb-8">
          <div className="mb-2 md:mb-0 md:mr-2 md:py-2 md:pr-3 font-semibold text-neutral-800 text-xs flex-100 md:order-2">
            {formatDate(new Date(props.date))}
          </div>

          <H1 like="h0">{props.title}</H1>

          {
            <ul className="flex flex-wrap md:order-3">
              {props.tags.nodes.map((tag, index) => {
                return (
                  <li key={`tag-${index}`}>
                    <Chip
                      title={tag.name}
                      slug={tag.slug}
                      onClick={() =>
                        (document.location.href = `/news/?tags=${tag.slug}`)
                      }
                    />
                  </li>
                );
              })}
            </ul>
          }
        </div>

        <Img
          fluid={props.featuredImage.node.localFile.childImageSharp.fluid}
          className="rounded-3xl w-100 h-auto"
        />

        <div className="flex flex-wrap mt-4 md:mt-10 lg:mt-20 mb-8 md:-mx-2 lg:-mx-6 ">
          <div className="flex-100 md:flex-2/3 pb-8 md:pb-0 md:px-2 lg:px-6">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{
                __html: props.content,
              }}
            />
          </div>
          {props.attachments.length > 0 && (
            <div className="flex-100 md:flex-1/3 md:px-2 lg:px-6">
              <H4>Anhänge</H4>
              <ul className="document-list">
                {props.attachments.map((attachment, index) => {
                  return (
                    <li key={`document-${index}`} className="mb-2">
                      <a
                        href={attachment.url}
                        target="_blank"
                        className="flex item-center bg-beige-300 border border-neutral-400 rounded-lg"
                      >
                        <span className="icon w-8 h-8 mb-2 m-4 mr-0">
                          <Icon
                            type={IconType.FilePDF}
                            width="32"
                            height="32"
                          />
                        </span>
                        <div className="my-3 mx-4">
                          <span className="block text-xs text-neutral-600 uppercase">
                            {`${attachment.subtype} ${attachment.fileSizeHumanReadable}`}
                          </span>
                          <div>
                            <p>{attachment.title}</p>
                          </div>
                        </div>
                        <div className="icon w-8 h-8 mb-2 m-4 ml-auto">
                          <Icon
                            type={IconType.Download}
                            width="32"
                            height="32"
                          />
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default News;

export const query = graphql`
  query News($id: String!) {
    newsItem: wpNewsItem(id: { eq: $id }) {
      id
      date
      title
      content
      excerpt
      slug
      tags {
        nodes {
          name
          slug
        }
      }
      attachments {
        title
        fileSizeHumanReadable
        subtype
        url
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1488, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
