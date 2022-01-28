import * as React from "react";

import { TagProps } from "@mint-vernetzt/react-components";
import Tag, { TagClickHandler } from "../Tag/Tag";

/* eslint-disable-next-line */
export interface TagFilterProps {
  tags: TagProps[];
  handleTagClick?: TagClickHandler;
}

export function TagFilter({ tags, handleTagClick }: TagFilterProps) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap mb-4">
      <strong className="mr-2 p-2">Tag-Filter:</strong>
      <ul className="flex flex-wrap md:order-4">
        {tags.map((tagProps) => (
          <li key={tagProps.slug}>
            <Tag {...tagProps} onTagClick={handleTagClick} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TagFilter;
