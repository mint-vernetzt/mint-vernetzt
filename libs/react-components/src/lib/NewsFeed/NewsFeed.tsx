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
      <h3 className="mb-1 text-primary normal-case text-5xl leading-none md:text-6xl sm:mb-6">
        {headline}
      </h3>
      <p
        data-testid="body"
        className="text-neutral-800 text-2xl leading-tight"
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
