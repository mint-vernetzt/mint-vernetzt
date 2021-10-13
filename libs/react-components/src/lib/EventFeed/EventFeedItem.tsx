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
    <div
      data-testid="event-feed-item"
      className="border-b border-neutral-400 last:border-b-0"
      style={{ padding: "15px 0 23px 0" }}
    >
      <h4 className="mb-1 text-base md:text-lg font-bold text-primary leading-6">
        <a href={slug} className="cursor-pointer hover:underline">
          {headline}
        </a>
      </h4>
      <p
        data-testid="body"
        className="mb-3 text-sm md:text-base text-neutral-700 leading-tight line-clamp-3 lg:line-clamp-2"
      >
        {body}
      </p>
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
