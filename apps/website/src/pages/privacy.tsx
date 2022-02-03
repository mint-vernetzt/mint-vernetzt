import { H1 } from "@mint-vernetzt/react-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

/* eslint-disable-next-line */
export interface PrivacyProps {}

export function Privacy({ data }) {
  return (
    <Layout>
      <SEO
        title={`${data.privacyPage.title}`}
        slug={`${data.privacyPage.slug}`}
        children={""}
        image=""
        description=""
      />
      <section className="hero container my-8 md:my-10 lg:my-20">
        <H1>{data.privacyPage.title}</H1>
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: data.privacyPage.content }}
        />
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PrivacyPage {
    privacyPage: wpPage(slug: { eq: "privacy" }) {
      content
      title
      slug
    }
  }
`;

export default Privacy;
