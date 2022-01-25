import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export function Privacy({ data }) {
  return (
    <Layout>
      <SEO
        title="Datenschutz"
        slug="/privacy"
        children={""}
        image=""
        description=""
      />
      <section className="hero container my-8 md:my-10 lg:my-20">
        <h1>{data.privacyPage.title}</h1>
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
    }
  }
`;

export default Privacy;
