import Layout from "../components/layout";
import SEO from "../components/seo";

/* eslint-disable-next-line */
export interface PrivacyProps {}

export function Privacy(props: PrivacyProps) {
  return (
    <Layout children="">
      <SEO title="Datenschutz" slug="/privacy" />
      <section className="hero container my-8 md:my-10 lg:my-20">
        <div className="hero bg-yellow-300 px-20 py-40 rounded-3xl">
          <h1>Welcome to Privacy!</h1>
        </div>
      </section>
    </Layout>
  );
}

export default Privacy;
