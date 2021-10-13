import {
  EventFeedItem,
  EventFeedItemProps,
} from "@mint-vernetzt/react-components";

export interface EventFeedProps {
  headline: string;
  body: string;
  eventFeedItemsProps?: EventFeedItemProps[];
}

export function EventFeed({
  headline,
  body,
  eventFeedItemsProps = [],
}: EventFeedProps) {
  return (
    <div>
      <h3>{headline}</h3>
      <p data-testid="body">{body}</p>
      {eventFeedItemsProps.map((eventFeedItemProps, index) => {
        return (
          <EventFeedItem
            key={`event-feed-item-${index}`}
            {...eventFeedItemProps}
          />
        );
      })}
    </div>
  );
}

export default EventFeed;
