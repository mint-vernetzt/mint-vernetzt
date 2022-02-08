import * as React from "react";
import Chip, { ChipClickHandler, ChipProps } from "../Chip/Chip";
import { H4 } from "../Heading/Heading";
import { Icon, IconType } from "../Icon/Icon";
import { formatDate } from "./utils";

export interface EventFeedItemProps {
  headline: string;
  body: string | Element | React.ReactElement;
  slug: string;
  date: Date;
  category: string;
  tags: ChipProps[];
  onChipClick?: ChipClickHandler;
}

export function EventFeedItem({
  headline,
  body,
  slug,
  date,
  category,
  tags = [],
  onChipClick,
}: EventFeedItemProps) {
  const formattedDate = formatDate(date);

  return (
    <div className="relative">
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
      </p>
      <H4 like="h3">
        <a href={slug} className="cursor-pointer hover:underline">
          {headline}
        </a>
      </H4>
      <p data-testid="body">{body}</p>
      <ul className="flex flex-wrap md:order-4 z-10 relative">
        {tags.map((tag, index) => (
          <li key={`event-taglist-${index}-${tag.slug}`}>
            <Chip title={tag.title} slug={tag.slug} onClick={onChipClick} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventFeedItem;
