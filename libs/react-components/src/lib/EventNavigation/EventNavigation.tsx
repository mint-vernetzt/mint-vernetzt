import { formatDate } from "../NewsFeed/utils";
import { Icon, IconType } from "../Icon/Icon";
import * as React from "react";
import { defaultLinkWrapper } from "../EventTeaser/defaultLinkWrapper";
import { H2, H3 } from "../Heading/Heading";
export interface EventNavigationItemProps {
  headline: string;
  date: Date;
  url: string;
}

export interface EventNavigationProps {
  headline?: string;
  items: EventNavigationItemProps[];
  currentUrl?: string;
  linkWrapper?: (url: string, children: React.ReactNode) => React.ReactElement;
}

export function EventNavigation(props: EventNavigationProps) {
  const { headline, items, currentUrl } = props;
  const linkWrapper = props.linkWrapper ?? defaultLinkWrapper;

  const activeClass = (url: string) => {
    return url === currentUrl ? "active" : "";
  };

  const activTextColor = (url: string) => {
    return url === currentUrl ? "text-primary-500" : "text-neutral-800";
  };

  return (
    <div className="flex flex-col px-4 py-8 lg:px-8 bg-neutral-200 rounded-3xl shadow-lg mb-6 lg:mb-16">
      {headline && <H2>{headline}</H2>}
      <ul className="event-sidebar-navigation">
        {items.map((item, index) => (
          <li
            key={`event-${index}`}
            className={`relative py-4 pl-10 lg:pl-14 lg:pr-3 border-b border-neutral-400 last:border-b-0 ${activeClass(
              item.url
            )}`}
          >
            <div className="absolute left-0 lg:left-2 top-5 icon">
              <Icon type={IconType.Calendar} />
            </div>
            <H3
              className={`${activTextColor(
                item.url
              )} text-sm leading-snug font-normal lg:font-semibold lg:text-lg mb-1 lg:mb-2 hover:underline`}
            >
              {linkWrapper(item.url, item.headline)}
            </H3>
            <time
              data-testid="date"
              dateTime={item.date.toUTCString()}
              className="text-xs lg:text-base"
            >
              {formatDate(item.date)}
            </time>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventNavigation;
