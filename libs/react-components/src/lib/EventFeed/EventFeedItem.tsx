import * as React from "react";
import { formatDate } from "./utils";

export interface EventFeedItemProps {
  headline: string;
  body: string;
  slug: string;
  date: Date;
  category: string;
  tags: string[];
}

export function EventFeedItem({
  headline,
  body,
  slug,
  date,
  category,
  tags = [],
}: EventFeedItemProps) {
  const formattedDate = formatDate(date);

  return (
    <div>
      {/* TODO: add icon before date */}
      <div className="inline-block icon w-3 h-3 mr-2 bg-red-600"></div>{" "}
      <time
        data-testid="date"
        dateTime={date.toISOString()}
        className="uppercase font-semibold text-neutral-800 text-xs"
      >
        {formattedDate}
      </time>
      {/*
      <div className="inline-block icon ml-3 w-3 h-3 bg-red-600"></div>{" "}
      <div className="inline-block uppercase font-semibold text-neutral-800 text-xs">
        {category}
      </div>
      */}
      <h4 className="text-3xl leading-snug mt-2 mb-2">
        <a href={slug} className="cursor-pointer hover:underline">
          {headline}
        </a>
      </h4>
      <p data-testid="body">{body}</p>
      <ul className="flex flex-wrap md:order-4">
        {tags.map((tag, index) => (
          <li key={`event-taglist-${index}-${tag}`}>
            <div className="mr-2 mb-2 px-3 py-2 rounded-lg bg-secondary-300 text-neutral-800 text-sm text-bold">
              {tag}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventFeedItem;
