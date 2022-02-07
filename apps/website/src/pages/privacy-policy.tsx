import { H1 } from "@mint-vernetzt/react-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export function PrivacyPolicy({ data }) {
  return (
    <Layout>
      <SEO
        title={`${data.privacyPolicyPage.title}`}
        slug={`${data.privacyPolicyPage.slug}`}
        children={""}
        image=""
        description=""
      />
      <section className="hero container my-8 md:my-10 lg:my-20">
        <H1>{data.privacyPolicyPage.title}</H1>
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: data.privacyPolicyPage.content }}
        />
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PrivacyPolicyPage {
    privacyPolicyPage: wpPage(slug: { eq: "privacy-policy" }) {
      content
      title
      slug
    }
  }
`;

export default PrivacyPolicy;
