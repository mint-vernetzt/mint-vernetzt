import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { ReactComponent as PaktOverview } from "../images/project_pakt.svg";

import {
  getPaktDataByCategory,
  PaktDataByCategory,
} from "../utils/dataTransformer";

/* eslint-disable-next-line */
export interface PaktProps {}

const getCategorySlugFromMember = (slug: string) => {
  return slug.split("/")[0] ?? "no-category";
};

export function Pakt({ data }: { data: GatsbyTypes.PaktPageQuery }) {
  const paktDataByCategory: PaktDataByCategory = getPaktDataByCategory(
    data.paktData.edges
  );
  const categories = Object.keys(paktDataByCategory);

  React.useEffect(() => {
    // accordeon toggle
    document.querySelectorAll(".pakt-category").forEach(($category) => {
      $category.addEventListener("click", (event) => {
        // event.preventDefault();
        document
          .querySelectorAll(".pakt-category.active")
          .forEach(($active) => {
            if ($category !== $active) {
              $active.classList.remove("active");
            }
          });
        $category.classList.toggle("active");
        setTimeout(() => {
          $category.scrollIntoView({ block: "start", behavior: "smooth" });
        }, 500);
      });
    });
  }, []);

  return (
    <Layout>
      <SEO
        title={`Pakt`}
        slug={`/pakt/`}
        description={""}
        image={""}
        children={""}
      />
      <section className="container mt-8 md:mt-10 lg:mt-20">
        <div className="flex flex-wrap md:-mx-6 lg:-mx-10">
          <div className="flex-100 md:flex-1/3 md:order-2 pb-4 md:pb-0 md:px-6 lg:px-10">
            <PaktOverview />
          </div>

          <div className="flex-100 md:flex-2/3 md:px-6 lg:px-10 md:order-1">
            <h1 className="text-5xl leading-tight lg:text-7xl lg:leading-none text-blue-500 mb-2">
              MINT<span className="font-normal">women</span>
            </h1>
            <p className="lg:text-3xl lg:leading-snug text-neutral-600 mb-4 font-bold">
              Der Nationale Pakt für Frauen in MINT-Berufen
            </p>

            <p className="lg:text-xl text-neutral-600 mb-4">
              Seit 2008 haben sich über 370 Partner:innen aus Wirtschaft,
              Wissenschaft, Medien und Politik im Nationalen Pakt für Frauen in
              MINT-Berufen zusammengeschlossen. Ihr erklärtes Ziel ist es, mehr
              Mädchen und Frauen für eine Karriere in MINT-Berufen zu
              begeistern. Der Pakt ist im Mai 2021 von MINTvernetzt übernommen
              worden und wird gemeinsam mit den Partner:innen weiterentwickelt.
              Dies ist eine Übersicht über die aktuellen Pakt-Partner:innen, die
              seit der Unterzeichnung des Memorandums für das Thema eintreten:
            </p>
          </div>
        </div>
      </section>
      <section className="container my-4 md:my-6 lg:my-10">
        <ul className="pakt-list">
          {categories.map((category, index) => {
            const categorySlug = getCategorySlugFromMember(
              paktDataByCategory[category][0].slug
            );

            return (
              <li
                key={category}
                id={categorySlug}
                className="pakt-category relative overflow-hidden"
              >
                <a
                  href={`#${categorySlug}`}
                  className="block font-bold text-blue-500 md:text-3xl md:leading-snug py-3 flex item-center"
                >
                  {category}
                </a>
                <ul className="pakt-member max-h-0 overflow-hidden transition-all ease-in-out duration-300 px-6 md:px-8">
                  {paktDataByCategory[category].map((member) => (
                    <li key={member.slug} className="py-2">
                      <Link
                        to={`/pakt/${member.slug}`}
                        className="block md:text-2xl"
                      >
                        {member.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

export default Pakt;

export const pageQuery = graphql`
  query PaktPage {
    paktData: allMarkdownRemark(
      sort: { fields: [frontmatter___category, frontmatter___name], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            slug
            name
            category
          }
        }
      }
    }
  }
`;
