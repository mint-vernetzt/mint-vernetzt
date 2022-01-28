/* eslint-disable-next-line */

export type TagClickHandler = (slug: TagProps["slug"]) => void;

import * as React from "react";

export interface TagProps {
  title: string;
  slug: string;
  onTagClick?: TagClickHandler;
}

export function Tag({ title, slug, onTagClick }: TagProps) {
  let tagHandlerIsCallable = typeof onTagClick === "function";
  return (
    <div
      className={`mr-2 mb-2 px-3 py-2 rounded-lg bg-secondary-300 text-neutral-800 text-sm text-bold ${
        tagHandlerIsCallable ? "cursor-pointer" : ""
      }`}
      onClick={() => tagHandlerIsCallable && onTagClick && onTagClick(slug)}
    >
      {title}
    </div>
  );
}

export default Tag;
