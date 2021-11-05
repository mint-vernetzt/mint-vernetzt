import React from "react";
import NewsFeedItem, { NewsFeedItemProps } from "./NewsFeedItem";

export interface NewsFeedProps {
  headline: string;
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
    <section>
      {/* TODO: remove uppercase in tailwind config and override in component headline */}
      <h3 className="mb-1 text-primary normal-case text-5xl leading-none lg:text-6xl sm:mb-6">
        {linkToOverview !== undefined ? (
          <a className="cursor-pointer hover:underline" href={linkToOverview}>
            {headline}
          </a>
        ) : (
          headline
        )}
      </h3>
      {body !== undefined ? (
        <p
          data-testid="body"
          className="text-neutral-800 text-base lg:text-2xl font-bold lg:font-normal leading-tight"
          style={{ marginBottom: "7px" }}
        >
          {body}
        </p>
      ) : null}
      <ul>
        {newsFeedItemsProps.map((newsFeedItemProps, index) => {
          return (
            <li
              key={`news-feed-item-${index}`}
              className="border-b border-neutral-400 last:border-b-0"
              style={{ padding: "15px 0" }}
            >
              <NewsFeedItem {...newsFeedItemProps} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default NewsFeed;
