import Layout from "../components/layout";
/* eslint-disable-next-line */
export interface ImprintProps {}

export function Imprint(props: ImprintProps) {
  return (
    <Layout children="">
      <section className="hero container my-10">
        <div className="hero bg-yellow-300 px-20 py-40 rounded-3xl">
          <h1>Welcome to Imprint!</h1>
        </div>
      </section>
    </Layout>
  );
}

export default Imprint;
