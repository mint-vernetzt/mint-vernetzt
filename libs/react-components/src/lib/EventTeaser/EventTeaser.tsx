import * as React from "react";

import { defaultLinkWrapper } from "./defaultLinkWrapper";
import EventTeaserItem, { EventTeaserItemProps } from "./EventTeaserItem";

/* eslint-disable-next-line */
export interface EventTeaserProps {
  headline: string | React.ReactNode;
  linkToOverview: string;
  items: EventTeaserItemProps[];
  linkWrapper?: (url: string, children: React.ReactNode) => React.ReactElement;
}

export function EventTeaser(props: EventTeaserProps) {
  const { headline, linkToOverview, items } = props;
  const linkWrapper = props.linkWrapper ?? defaultLinkWrapper;

  return (
    <div className="flex flex-col p-4 pb-15 md:pb-5 py-6 rounded-lg bg-neutral-200 shadow-lg">
      <h2 className="text-3xl leading-snug lg:text-4xl lg:mb-2">
        {linkToOverview ? linkWrapper(linkToOverview, headline) : headline}
      </h2>
      {items?.length > 0 && (
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className="border-b border-neutral-400 last:border-b-0 pt-4 pb-6"
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
      )}
    </div>
  );
}

export default EventTeaser;
