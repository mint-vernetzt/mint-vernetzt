import * as React from "react";

import { defaultLinkWrapper } from "./defaultLinkWrapper";
import EventTeaserItem, { EventTeaserItemProps } from "./EventTeaserItem";

/* eslint-disable-next-line */
export interface EventTeaserProps {
  headline?: string | React.ReactNode;
  linkToOverview: string;
  items: EventTeaserItemProps[];
  linkWrapper?: (url: string, children: React.ReactNode) => React.ReactElement;
}

export function EventTeaser(props: EventTeaserProps) {
  const { headline, linkToOverview, items } = props;
  const linkWrapper = props.linkWrapper ?? defaultLinkWrapper;

  return items !== undefined && items.length > 0 ? (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          className="border-b border-neutral-400 last:border-b-0 pt-4 first:pt-0 pb-6"
        >
          <EventTeaserItem
            headline={item.headline}
            body={item.body}
            date={item.date}
            url={item.url}
            linkWrapper={linkWrapper}
          />
        </li>
      ))}
    </ul>
  ) : null;
}

export default EventTeaser;
