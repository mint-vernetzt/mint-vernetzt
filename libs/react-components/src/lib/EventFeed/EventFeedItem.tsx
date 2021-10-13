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
    <div className="relative">
      <time data-testid="date" dateTime={date.toISOString()}>
        {formattedDate}
      </time>
      <h3>{headline}</h3>
      <p data-testid="body">{body}</p>
    </div>
  );
}

export default EventFeedItem;
