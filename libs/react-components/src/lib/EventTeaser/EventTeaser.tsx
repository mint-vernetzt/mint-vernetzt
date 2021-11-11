import * as React from "react";

import { defaultLinkWrapper } from "./defaultLinkWrapper";
import EventTeaserItem, { EventTeaserItemProps } from "./EventTeaserItem";

/* eslint-disable-next-line */
export interface EventTeaserProps {
  headline: string;
  linkToOverview: string;
  items: EventTeaserItemProps[];
  linkWrapper?: (url: string, children: React.ReactChild) => React.ReactElement;
}

export function EventTeaser(props: EventTeaserProps) {
  const { headline, linkToOverview, items } = props;
  const linkWrapper = props.linkWrapper ?? defaultLinkWrapper;

  return (
    <div className="flex flex-col p-4 pb-15 md:pb-5 bg-gray-50 rounded-lg shadow-lg h-full">
      <h2 className="text-4xl">
        {linkToOverview ? linkWrapper(linkToOverview, headline) : headline}
      </h2>
      {items?.length > 0 && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
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
