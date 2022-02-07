import { ChipClickHandler, ChipProps } from "@mint-vernetzt/react-components";
import * as React from "react";
import { H2 } from "../Heading/Heading";
import NewsFeedItem, { NewsFeedItemProps } from "./NewsFeedItem";

export interface NewsFeedProps {
  headline?: string | React.ReactNode;
  body?: string;
  linkToOverview?: string;
  newsFeedItemsProps?: NewsFeedItemProps[];
  selectedChips?: ChipProps[];
  onChipClick?: ChipClickHandler;
}

export function NewsFeed({
  headline,
  body,
  linkToOverview,
  newsFeedItemsProps = [],
  onChipClick,
}: NewsFeedProps) {
  return (
    <div className="news-list">
      <header className="text-left">
        {headline !== undefined ? (
          <H2>
            {linkToOverview !== undefined ? (
              <a
                className="cursor-pointer hover:underline"
                href={linkToOverview}
              >
                {headline}
              </a>
            ) : (
              headline
            )}
          </H2>
        ) : null}

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
              className="border-b border-neutral-400 last:border-b-0 pb-4 pt-6 first:pt-0 last:pb-0"
            >
              <NewsFeedItem {...newsFeedItemProps} onChipClick={onChipClick} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NewsFeed;
