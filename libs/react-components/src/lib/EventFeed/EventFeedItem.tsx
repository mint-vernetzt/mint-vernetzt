import React from "react";
import { formatDate } from "./utils";

export interface EventFeedItemProps {
  headline: string;
  body: string;
  slug: string;
  date: Date;
}

export function EventFeedItem({
  headline,
  body,
  slug,
  date,
}: EventFeedItemProps) {
  const [formattedDate, setFormattedDate] = React.useState<string>();

  React.useEffect(() => {
    setFormattedDate(formatDate(date));
  }, [date]);

  return (
    <div data-testid="event-feed-item">
      {/* TODO:  remove uppercase in tailwind config and override in component headline */}
      <h4 className="mb-1 text-base lg:text-lg font-bold text-primary leading-6 normal-case">
        <a href={slug} className="cursor-pointer hover:underline">
          {headline}
        </a>
      </h4>
      <p
        data-testid="body"
        className="mb-3 text-sm lg:text-base text-neutral-700 leading-tight line-clamp-3 lg:line-clamp-2"
      >
        {body}
      </p>
      {/* TODO: add icon before date */}
      <time
        data-testid="date"
        dateTime={date.toISOString()}
        className="uppercase font-bold text-neutral-800 text-xs"
      >
        {formattedDate}
      </time>
    </div>
  );
}

export default EventFeedItem;
