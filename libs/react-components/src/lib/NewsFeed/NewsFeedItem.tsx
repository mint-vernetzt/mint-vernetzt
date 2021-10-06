import { formatDate } from "./utils";

export interface NewsFeedItemProps {
  headline: string;
  body: string;
  date: Date;
}

export function NewsFeedItem({ headline, body, date }: NewsFeedItemProps) {
  return (
    <div>
      <h1>{headline}</h1>
      <p data-testid="body">{body}</p>
      <time data-testid="date" dateTime={date.toISOString()}>
        {formatDate(date)}
      </time>
    </div>
  );
}

export default NewsFeedItem;
