import { on } from "events";
import React from "react";
import { H4 } from "../Heading/Heading";
import { Image } from "../types";
import { formatDate } from "./utils";

export type TagClickHandler = (slug: TagProps["slug"]) => void;

export interface TagProps {
  title: string;
  slug: string;
  onTagClick?: TagClickHandler;
}

export interface NewsFeedItemProps {
  headline: string;
  body: string | Element | React.ReactElement;
  date: Date;
  slug: string;
  tagsProps?: TagProps[];
  onTagClick?: TagClickHandler;
  image?: Image;
}

function Tag({ title, slug, onTagClick }: TagProps) {
  let tagHandlerIsCallable = typeof onTagClick;
  return (
    <div
      className={`mr-2 mb-2 px-3 py-2 rounded-lg bg-secondary-300 text-neutral-800 text-sm text-bold ${
        tagHandlerIsCallable ? "cursor-pointer" : ""
      }`}
      onClick={() => tagHandlerIsCallable && onTagClick && onTagClick(slug)}
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
  image,
  onTagClick,
}: NewsFeedItemProps) {
  const formattedDate = formatDate(date);

  return (
    <div className="flex flex-wrap md:flex-nowrap md:items-stretch relative">
      {image !== undefined ? (
        <div className="flex-100 mb-2 md:mb-0 md:mr-4 lg:mr-8 md:flex-1/3 lg:min-h-12.5">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto md:h-full md:object-cover rounded-lg"
          />
        </div>
      ) : null}
      <div className="md:flex-auto flex flex-wrap lg:self-center">
        <time
          data-testid="date"
          dateTime={date.toISOString()}
          className="mb-2 md:mb-0 md:mr-2 md:py-2 md:pr-3 uppercase font-bold text-neutral-800 text-xs flex-100 md:flex-none md:order-3"
        >
          {formattedDate}
        </time>
        <H4 className="text-3xl leading-snug mb-2 flex-100 md:order-1">
          <a href={slug} className="cursor-pointer hover:underline">
            {headline}
          </a>
        </H4>
        <p
          data-testid="body"
          className="line-clamp-5 mb-4 md:line-clamp-none flex-100 md:order-2"
        >
          {body}
        </p>
        <ul className="flex flex-wrap md:order-4">
          {tagsProps.map((tagProps, index) => {
            return (
              <li key={`tag-${index}`}>
                <Tag {...tagProps} onTagClick={onTagClick} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NewsFeedItem;
