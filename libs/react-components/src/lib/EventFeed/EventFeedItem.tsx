import React from "react";
import { formatDate } from "./utils";

export interface EventFeedItemProps {
  headline: string;
  body: string;
  date: Date;
}

export function EventFeedItem({ headline, body, date }: EventFeedItemProps) {
  const [formattedDate, setFormattedDate] = React.useState<string>();

  React.useEffect(() => {
    setFormattedDate(formatDate(date));
  }, [date]);
  return (
    <div
      className="border-b border-neutral-400 last:border-b-0"
      style={{ paddingBottom: "23px" }}
    >
      <h3 className="mb-1 text-base md:text-lg font-bold text-primary leading-6">
        {headline}
      </h3>
      <p
        data-testid="body"
        className="mb-3 text-sm md:text-base text-neutral-700"
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
