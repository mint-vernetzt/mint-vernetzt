import { Chip, ChipClickHandler, ChipProps } from "../Chip/Chip";
import * as React from "react";
import { H4 } from "../Heading/Heading";
import { Image } from "../types";
import { formatDate } from "./utils";

export interface NewsFeedItemProps {
  headline: string;
  body: string | Element | React.ReactElement;
  date: Date;
  slug: string;
  tags?: ChipProps[];
  onChipClick?: ChipClickHandler;
  image?: Image;
}

export function NewsFeedItem({
  headline,
  body,
  date,
  slug,
  tags = [],
  image,
  onChipClick,
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
        <ul className="flex flex-wrap md:order-4 z-10">
          {tags.map((tag, index) => {
            return (
              <li key={`tag-${index}`}>
                <Chip {...tag} onClick={onChipClick} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NewsFeedItem;
