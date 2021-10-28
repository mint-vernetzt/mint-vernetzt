import { graphql, Link } from "gatsby";

export function formatDate(date: Date): string {
  const formatted = date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return formatted;
}

export function Event({ data }) {
  const event = data.allWpEvent.nodes[0];
  const date = new Date(event.duration.startDate);
  const formattedDate = formatDate(date);

  console.log(event.content);
  return (
    <div>
      <Link to="/">back</Link>
      <h1>{event.title}</h1>
      <time
        data-testid="date"
        dateTime={date.toISOString()}
        className="uppercase font-bold text-neutral-800 text-xs"
      >
        {formattedDate}
      </time>
      <ul className="flex flex-wrap md:order-4">
        {event.tags.nodes.map((tag, index) => {
          return (
            <li key={`tag-${index}`}>
              <div className="mr-2 mb-2 px-3 py-2 rounded-lg bg-secondary-300 text-neutral-800 text-sm text-bold">
                {tag}
              </div>
            </li>
          );
        })}
      </ul>
      <div
        dangerouslySetInnerHTML={{
          __html: event.content,
        }}
      />
    </div>
  );
}

export const query = graphql`
  query ($slug: String!) {
    allWpEvent(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        slug
        content
        duration {
          startDate
        }
        tags {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export default Event;
