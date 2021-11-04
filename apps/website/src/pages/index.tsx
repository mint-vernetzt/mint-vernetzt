import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export function Index({ data }) {
  return (
    <Layout>
      <SEO title="Willkommen" slug="/" image="https://placeimg.com/300/300" />
      <section className="hero container my-10">
        <div
          className="hero bg-gray-300 px-20 py-40 rounded-3xl"
          style={{ height: "550px" }}
        >
          <h1>Hero-Section</h1>
        </div>
      </section>

      <section className="container my-20">
        <header>
          <h2>Aktiv werden</h2>
          <p className="lead">
            Proin id turpis quis massa mattis consequat. Maecenas semper, et
            laoreet risus lorem id lorem. Etiam imperdiet. Felis vel auctor
            consequatProin id turpis quis massa mattis consequat.{" "}
          </p>
        </header>

        <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              image: `https://picsum.photos/id/101/420/210`,
              title: `Aktiv werden`,
              text: `Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr.`,
              link: `/project `,
            },
            {
              image: `https://picsum.photos/id/1053/420/210`,
              title: `Mintvernetzt informiert`,
              text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat`,
              link: `/project `,
            },
            {
              image: `https://picsum.photos/id/24/420/210`,
              title: `Werde teil der MINTcommunity`,
              text: `Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr. Lorem ipsum dolor sit amet.`,
              link: `/topics `,
            },
          ].map((teaserbox, index) => (
            <div
              key={`teaserbox-${index}`}
              className="p-2 rounded-lg bg-beige-500"
            >
              <a href={`${teaserbox.link}`} className="flex flex-col h-100">
                <div className="rounded-lg overflow-hidden mb-4">
                  <img
                    src={`${teaserbox.image}`}
                    alt={`${teaserbox.title}`}
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="text-blue-500 mx-1 mb-2">{teaserbox.title}</h4>
                <p className="text-sm text-neutral-600 mx-1 mb-4">
                  {teaserbox.text}
                </p>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="container my-20">
        <div className="flex flex-wrap md:-mx-2 lg:-mx-4">
          <div className="flex-100 md:flex-2/3 md:px-2 lg:px-4">
            <header className="text-left">
              <h2>Neuigkeiten</h2>
              <p className="lead">
                Wir blicken in die MINT-Welt und darüber hinaus und informieren
                Euch regelmäßig über Erkenntnisse, Ereignisse  und Innovationen,
                die für Eure tägliche Arbeit interessant sind.
              </p>
            </header>
            <div className="bg-yellow-300 p-20 rounded-3xl">
              <p>News-Modul</p>
              {data.allWpPost.nodes.map((node, index) => (
                <div key={`post ${index}`}>
                  <Link to={node.slug}>
                    <h2>{node.title}</h2>
                  </Link>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: node.excerpt,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex-100 md:flex-1/3 pb-8 md:pb-0 md:px-2 lg:px-4">
            <div className="bg-yellow-300 p-20 rounded-3xl">Events-Modul</div>
          </div>
        </div>
      </section>

      <section className="container my-10">
        <div className="bg-yellow-300 p-20 rounded-3xl">
          <h1>Verbundpartner</h1>
        </div>
      </section>
    </Layout>
  );
}

export default Index;

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`;
