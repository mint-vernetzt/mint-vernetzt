import { formatDate } from "./utils";

export interface TagProps {
  title: string;
}

export interface NewsFeedItemProps {
  headline: string;
  body: string;
  date: Date;
  tagsProps?: TagProps[];
}

export function NewsFeedItem({
  headline,
  body,
  date,
  tagsProps = [],
}: NewsFeedItemProps) {
  return (
    <div>
      <h1>{headline}</h1>
      <p data-testid="body">{body}</p>
      <time data-testid="date" dateTime={date.toISOString()}>
        {formatDate(date)}
      </time>
      {tagsProps.map((tagProps) => {
        return <div data-testid="tag">{tagProps.title}</div>;
      })}
    </div>
  );
}

export default NewsFeedItem;
