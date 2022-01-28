import * as React from "react";
import { H4 } from "../Heading/Heading";
import { Icon, IconType } from "../Icon/Icon";
import Tag, { TagClickHandler, TagProps } from "../Tag/Tag";
import { formatDate } from "./utils";

export interface EventFeedItemProps {
  headline: string;
  body: string | Element | React.ReactElement;
  slug: string;
  date: Date;
  category: string;
  tags: TagProps[];
  onTagClick?: TagClickHandler;
}

export function EventFeedItem({
  headline,
  body,
  slug,
  date,
  category,
  tags = [],
  onTagClick,
}: EventFeedItemProps) {
  const formattedDate = formatDate(date);

  return (
    <div className="relative">
      {/* TODO: add icon before date */}
      {/* <div className="inline-block icon w-3 h-3 mr-2 ">
        <Icon type={IconType.Calendar} width="2rem" height="2rem" />
      </div>
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
      </div> */}
      <p className="text-xs text-neutral-800 font-semibold mb-4 flex items-center">
        <span className="icon w-4 h-4 mr-2">
          <Icon type={IconType.Calendar} />
        </span>
        <span>
          <time
            data-testid="date"
            dateTime={date.toISOString()}
            className="uppercase font-semibold text-neutral-800 text-xs mr-4"
          >
            {formattedDate}
          </time>
        </span>
        {/* <span className="icon w-4 h-4 mr-2">
          <Icon type={IconType.Calendar} />
        </span>
        <span>{category}</span> */}
      </p>
      <H4 like="h3">
        <a href={slug} className="cursor-pointer hover:underline">
          {headline}
        </a>
      </H4>
      <p data-testid="body">{body}</p>
      <ul className="flex flex-wrap md:order-4">
        {tags.map((tag, index) => (
          <li key={`event-taglist-${index}-${tag.slug}`}>
            <Tag title={tag.title} slug={tag.slug} onTagClick={onTagClick} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventFeedItem;
