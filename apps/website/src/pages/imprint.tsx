import Layout from "../components/layout";
import SEO from "../components/seo";

/* eslint-disable-next-line */
export interface ImprintProps {}

export function Imprint(props: ImprintProps) {
  return (
    <Layout>
      <SEO title="Impressum" image="https://placeimg.com/300/300" />
      <section className="hero container my-8 md:my-10 lg:my-20">
        <div className="hero bg-yellow-300 px-20 py-40 rounded-3xl">
          <h1>Welcome to Imprint!</h1>
        </div>
      </section>
    </Layout>
  );
}

export default Imprint;
