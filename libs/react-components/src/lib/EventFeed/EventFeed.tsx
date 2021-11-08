import * as React from "react";
import { EventFeedItem, EventFeedItemProps } from "./EventFeedItem";

export interface EventFeedProps {
  headline: string;
  linkToOverview: string;
  eventFeedItemsProps?: EventFeedItemProps[];
}

export function EventFeed({
  headline,
  linkToOverview,
  eventFeedItemsProps = [],
}: EventFeedProps) {
  return (
    <>
      {/* TODO: replace default shadows with shadows from design in tailwind config */}
      <section className="m-4 px-8 py-6 rounded-lg bg-neutral-200 shadow-xl">
        <h3 className="mb-px text-3xl leading-none text-primary font-bold md:text-4xl">
          <a href={linkToOverview} className="cursor-pointer hover:underline">
            {headline}
          </a>
        </h3>
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
