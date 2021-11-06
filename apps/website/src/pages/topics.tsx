import Layout from "../components/layout";
import SEO from "../components/seo";

export function Topics({ data }) {
  return (
    <Layout>
      <SEO title="Themen" slug="/topics" />
      <section className="hero container py-10">
        <div className="hero bg-yellow-300 px-20 py-40 rounded-3xl">
          <h1>Themen</h1>
        </div>
      </section>
    </Layout>
  );
}

export default Topics;
