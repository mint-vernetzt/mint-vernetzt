import NewsFeedItem, { NewsFeedItemProps } from "./NewsFeedItem";

export interface NewsFeedProps {
  headline: string;
  body: string;
  newsFeedItemsProps?: NewsFeedItemProps[];
}

export function NewsFeed({
  headline,
  body,
  newsFeedItemsProps = [],
}: NewsFeedProps) {
  return (
    <div>
      <h3 className="text-primary normal-case" style={{ fontSize: "64px" }}>
        {headline}
      </h3>
      <p
        data-testid="body"
        className="text-neutral-800 text-lg leading-6"
        style={{ marginBottom: "7px" }}
      >
        {body}
      </p>
      {newsFeedItemsProps.map((newsFeedItemProps, index) => {
        return (
          <NewsFeedItem
            key={`news-feed-item-${index}`}
            {...newsFeedItemProps}
          />
        );
      })}
    </div>
  );
}

export default NewsFeed;
