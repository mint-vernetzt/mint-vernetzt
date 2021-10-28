import React from "react";
import Layout from "../components/layout";

export function Project({ data }) {
  return (
    <Layout>
      <section className="hero container my-10">
        <div
          className="hero bg-yellow-300 px-20 py-40 rounded-3xl"
          style={{ height: "550px" }}
        >
          <h1>MINtvernetzt-Teaser</h1>
        </div>
      </section>

      <section className="container my-10">
        <div className="bg-yellow-300 p-20 rounded-3xl">
          <h1>4er-Block Erklärungen</h1>
        </div>
      </section>

      <section className="container my-10">
        <div className="bg-yellow-300 p-20 rounded-3xl">
          <h1>Kontakt-Element</h1>
        </div>
      </section>

      <section className="container my-10">
        <div className="bg-yellow-300 p-20 rounded-3xl">
          <h1>UserCardContainer</h1>
        </div>
      </section>

      <section className="container my-10">
        <div className="bg-yellow-300 p-20 rounded-3xl">
          <h1>UserCardContainer</h1>
        </div>
      </section>

      <section className="container my-10">
        <div className="bg-yellow-300 p-20 rounded-3xl">
          <h1>Pakt</h1>
        </div>
      </section>
    </Layout>
  );
}

export default Project;
