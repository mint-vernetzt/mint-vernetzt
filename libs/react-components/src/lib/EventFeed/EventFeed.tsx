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
      <div className="m-4 px-8 py-6 rounded-lg bg-neutral-200 shadow-xl">
        <h3 className="mb-px text-3xl leading-none text-primary font-bold md:text-4xl">
          <a href={linkToOverview} className="cursor-pointer hover:underline">
            {headline}
          </a>
        </h3>
        {eventFeedItemsProps.map((eventFeedItemProps, index) => {
          return (
            <EventFeedItem
              key={`event-feed-item-${index}`}
              {...eventFeedItemProps}
            />
          );
        })}
      </div>
    </>
  );
}

export default EventFeed;
