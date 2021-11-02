import Layout from "../components/layout";
/* eslint-disable-next-line */
export interface PrivacyProps {}

export function Privacy(props: PrivacyProps) {
  return (
    <Layout children="">
      <section className="hero container my-10">
        <div className="hero bg-yellow-300 px-20 py-40 rounded-3xl">
          <h1>Welcome to Privacy!</h1>
        </div>
      </section>
    </Layout>
  );
}

export default Privacy;
