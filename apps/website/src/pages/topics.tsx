import Layout from "../components/layout";

export function Topics({ data }) {
  return (
    <Layout>
      <section className="hero container my-10">
        <div className="hero bg-yellow-300 px-20 py-40 rounded-3xl">
          <h1>Themen</h1>
        </div>
      </section>
    </Layout>
  );
}

export default Topics;
