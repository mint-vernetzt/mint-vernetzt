import * as React from "react";
import { EventFeedItem, EventFeedItemProps } from "./EventFeedItem";

export interface EventFeedProps {
  eventFeedItemsProps?: EventFeedItemProps[];
}

export function EventFeed({ eventFeedItemsProps = [] }: EventFeedProps) {
  return (
    <>
      {/* TODO: replace default shadows with shadows from design in tailwind config */}
      <section>
        <ul>
          {eventFeedItemsProps.map((eventFeedItemProps, index) => {
            return (
              <li
                key={`event-feed-item-${index}`}
                className="event-item"
                data-testid="event-item"
              >
                <EventFeedItem {...eventFeedItemProps} />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default EventFeed;
