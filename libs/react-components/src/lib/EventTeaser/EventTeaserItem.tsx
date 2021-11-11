import * as React from "react";

import { formatDate } from "../EventFeed/utils";
import { defaultLinkWrapper } from "./defaultLinkWrapper";

/* eslint-disable-next-line */
export interface EventTeaserItemProps {
  headline: string;
  body: string;
  date: Date;
  url: string;
  linkWrapper?: (url: string, children: React.ReactChild) => React.ReactElement;
}

export function EventTeaserItem(props: EventTeaserItemProps) {
  const { headline, body, date, url } = props;
  const linkWrapper = props.linkWrapper ?? defaultLinkWrapper;

  return (
    <div>
      <h3>{linkWrapper(url, headline)}</h3>
      <p>{body}</p>
      <div data-testid="date">[ICON] {formatDate(date)}</div>
    </div>
  );
}

export default EventTeaserItem;
