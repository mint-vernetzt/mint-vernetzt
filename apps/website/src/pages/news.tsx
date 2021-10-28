import React from "react";

import Layout from "../components/layout";

export function News({ data }) {
  return (
    <Layout>
      <section className="hero container my-10">
        <div className="hero bg-yellow-300 px-20 py-40 rounded-3xl">
          <h1>News-Hero</h1>
        </div>
      </section>

      <section className="container my-10">
        <header>
          <h2>Neuigkeiten</h2>
        </header>
      </section>

      <section className="container my-10">
        <div className="bg-yellow-300 p-20 rounded-3xl">
          <h1>News List Modul</h1>
        </div>
      </section>
    </Layout>
  );
}

export default News;
