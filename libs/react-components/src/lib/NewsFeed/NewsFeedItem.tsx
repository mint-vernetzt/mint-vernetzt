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

function Tag({ title }: TagProps) {
  return (
    <div
      data-testid="tag"
      className="mr-3 px-3 py-2 rounded-lg bg-secondary-300 text-neutral-800 text-sm text-bold"
    >
      {title}
    </div>
  );
}

export function NewsFeedItem({
  headline,
  body,
  date,
  tagsProps = [],
}: NewsFeedItemProps) {
  return (
    <div data-testid="news-feed-item" style={{ width: "704px" }}>
      <h4 className="text-primary text-xl mb-2 normal-case">{headline}</h4>
      <p data-testid="body" className="text-base text-neutral-800 leading-4">
        {body}
      </p>
      <div className="flex items-baseline mt-4">
        <time
          data-testid="date"
          dateTime={date.toISOString()}
          className="mr-3 py-2 pr-3 uppercase font-bold text-neutral-800 text-xs"
          style={{ letterSpacing: "0.86px" }}
        >
          {formatDate(date)}
        </time>
        {tagsProps.map((tagProps, index) => {
          return <Tag key={`tag-${index}`} {...tagProps} />;
        })}
      </div>
    </div>
  );
}

export default NewsFeedItem;
