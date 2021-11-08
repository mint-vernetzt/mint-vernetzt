import * as React from "react";
import { EventFeedItem, EventFeedItemProps } from "./EventFeedItem";

export interface EventFeedProps {
  eventFeedItemsProps?: EventFeedItemProps[];
}

export function EventFeed({ eventFeedItemsProps = [] }: EventFeedProps) {
  return (
    <>
      {/* TODO: replace default shadows with shadows from design in tailwind config */}
      <section className="py-6 rounded-lg bg-neutral-200">
        <ul>
          {eventFeedItemsProps.map((eventFeedItemProps, index) => {
            return (
              <li
                key={`event-feed-item-${index}`}
                className="border-b border-neutral-400 last:border-b-0"
                style={{ padding: "15px 0 23px 0" }}
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
