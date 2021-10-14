import React, { useEffect } from "react";
import { formatDate } from "./utils";

export interface TagProps {
  title: string;
}

export interface NewsFeedItemProps {
  headline: string;
  body: string;
  date: Date;
  slug: string;
  tagsProps?: TagProps[];
}

function Tag({ title }: TagProps) {
  return (
    <div
      data-testid="tag"
      className="mr-2 mb-2 px-3 py-2 rounded-lg bg-secondary-300 text-neutral-800 text-sm text-bold"
    >
      {title}
    </div>
  );
}

export function NewsFeedItem({
  headline,
  body,
  date,
  slug,
  tagsProps = [],
}: NewsFeedItemProps) {
  const [formattedDate, setFormattedDate] = React.useState<string>();

  useEffect(() => {
    setFormattedDate(formatDate(date));
  }, [date]);

  return (
    <div data-testid="news-feed-item">
      <time
        dateTime={date.toISOString()}
        className="mb-2 uppercase font-bold text-neutral-800 text-xs md:hidden"
      >
        {formattedDate}
      </time>
      {/* TODO: remove uppercase in tailwind config and override in component headline */}
      <h4 className="text-primary text-3xl mb-2 normal-case">
        <a href={slug} className="cursor-pointer hover:underline">
          {headline}
        </a>
      </h4>
      <p data-testid="body" className="text-base text-neutral-600 leading-4">
        {body}
      </p>
      <div className="flex items-baseline mt-4">
        <time
          data-testid="date"
          dateTime={date.toISOString()}
          className="mr-2 py-2 pr-3 uppercase font-bold text-neutral-800 text-xs hidden md:inline"
          style={{ letterSpacing: "0.5px" }}
        >
          {formattedDate}
        </time>
        <div className="flex flex-wrap">
          {tagsProps.map((tagProps, index) => {
            return <Tag key={`tag-${index}`} {...tagProps} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default NewsFeedItem;
