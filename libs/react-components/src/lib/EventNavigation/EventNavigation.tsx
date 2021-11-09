import { formatDate } from "../NewsFeed/utils";
import * as React from "react";
export interface EventNavigationItemProps {
  headline: string;
  date: Date;
  url: string;
}

export interface EventNavigationProps {
  items: EventNavigationItemProps[];
  currentUrl?: string;
  linkWrapper?: (url: string, children: React.ReactChild) => React.ReactElement;
}

const defaultLinkWrapper = (url: string, children: React.ReactChild) => {
  return <a href={url}>{children}</a>;
};

export function EventNavigation(props: EventNavigationProps) {
  const { items, currentUrl } = props;
  const linkWrappper = props.linkWrapper ?? defaultLinkWrapper;

  const activeClass = (url: string) => {
    return url === currentUrl ? "active" : "";
  };

  const activTextColor = (url: string) => {
    return url === currentUrl ? "text-primary-500" : "text-neutral-800";
  };

  return (
    <ul className="event-sidebar-navigation">
      {items.map((item, index) => (
        <li
          key={`event-${index}`}
          className={`relative p-5 border-b border-neutral-400 last:border-b-0 ${activeClass(
            item.url
          )}`}
        >
          <h3
            className={`${activTextColor(item.url)} block text-sm font-bold `}
          >
            {linkWrappper(item.url, item.headline)}
          </h3>
          <time
            data-testid="date"
            dateTime={item.date.toUTCString()}
            className="mb-2 md:mb-0 md:mr-2 md:py-2 md:pr-3 uppercase text-neutral-800 text-xs flex-100 md:flex-none md:order-3"
          >
            {formatDate(item.date)}
          </time>
        </li>
      ))}
    </ul>
  );
}

export default EventNavigation;
