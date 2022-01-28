import * as React from "react";

import { TagClickHandler, TagProps } from "@mint-vernetzt/react-components";
import { EventFeedItem, EventFeedItemProps } from "./EventFeedItem";

export interface EventFeedProps {
  eventFeedItemsProps?: EventFeedItemProps[];
  onTagClick?: TagClickHandler;
}

export function EventFeed({
  eventFeedItemsProps = [],
  onTagClick,
}: EventFeedProps) {
  return (
    <>
      <section>
        <ul>
          {eventFeedItemsProps.map((eventFeedItemProps, index) => {
            return (
              <li
                key={`event-feed-item-${index}`}
                className="event-item"
                data-testid="event-item"
              >
                <EventFeedItem
                  {...eventFeedItemProps}
                  onTagClick={onTagClick}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default EventFeed;
