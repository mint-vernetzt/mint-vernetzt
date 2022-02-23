import * as React from "react";

import { formatDate } from "../EventFeed/utils";
import { H3 } from "../Heading/Heading";
import Icon, { IconType } from "../Icon/Icon";
import { defaultLinkWrapper } from "./defaultLinkWrapper";

/* eslint-disable-next-line */
export interface EventTeaserItemProps {
  headline: string;
  body: React.ReactNode | string;
  date: Date;
  url: string;
  linkWrapper?: (url: string, children: React.ReactNode) => React.ReactElement;
}

export function EventTeaserItem(props: EventTeaserItemProps) {
  const { headline, body, date, url } = props;
  const linkWrapper = props.linkWrapper ?? defaultLinkWrapper;

  return (
    <div className="relative">
      <H3 like="h6" className="mb-2 hover:underline leading-tight">
        {linkWrapper(url, headline)}
      </H3>
      <p className="mb-4 text-neutral-600 leading-tight line-clamp-3 lg:line-clamp-2 text-sm lg:text-base">
        {body}
      </p>
      <div
        data-testid="date"
        className="text-neutral-800 leading-tight text-xs font-semibold flex items-center"
      >
        <Icon type={IconType.Calendar} />{" "}
        <time className="ml-2">{formatDate(date)}</time>
      </div>
    </div>
  );
}

export default EventTeaserItem;
