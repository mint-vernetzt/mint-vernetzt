import React from "react";
import NewsFeedItem, { NewsFeedItemProps } from "./NewsFeedItem";

export interface NewsFeedProps {
  headline: string | React.ReactNode;
  body?: string;
  linkToOverview?: string;
  newsFeedItemsProps?: NewsFeedItemProps[];
}

export function NewsFeed({
  headline,
  body,
  linkToOverview,
  newsFeedItemsProps = [],
}: NewsFeedProps) {
  return (
    <div className="news-list">
      <header className="text-left">
        <h2>
          {linkToOverview !== undefined ? (
            <a className="cursor-pointer hover:underline" href={linkToOverview}>
              {headline}
            </a>
          ) : (
            headline
          )}
        </h2>
        {body !== undefined ? (
          <p data-testid="body" className="lead">
            {body}
          </p>
        ) : null}
      </header>
      <ul>
        {newsFeedItemsProps.map((newsFeedItemProps, index) => {
          return (
            <li
              key={`news-feed-item-${index}`}
              className="border-b border-neutral-400 last:border-b-0 pb-4 pt-6 first:pt-0"
            >
              <NewsFeedItem {...newsFeedItemProps} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NewsFeed;
