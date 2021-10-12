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
      <h3>{headline}</h3>
      <p data-testid="body">{body}</p>
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
