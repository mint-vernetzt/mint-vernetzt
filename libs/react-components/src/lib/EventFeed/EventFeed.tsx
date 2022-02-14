import * as React from "react";

import { EventFeedItem, EventFeedItemProps } from "./EventFeedItem";
import { ChipClickHandler } from "../Chip/Chip";

export interface EventFeedProps {
  eventFeedItemsProps?: EventFeedItemProps[];
  onChipClick?: ChipClickHandler;
}

export function EventFeed({
  eventFeedItemsProps = [],
  onChipClick,
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
                  onChipClick={onChipClick}
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
