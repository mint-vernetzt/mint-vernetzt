import * as React from "react";
/* eslint-disable-next-line */

export type ChipClickHandler = (slug: ChipProps["slug"]) => void;

export interface ChipProps {
  title: string;
  slug: string;
  isEnabled?: boolean;
  isRemovable?: boolean;
  onClick?: ChipClickHandler;
}

function getClassNames(isEnabled: boolean, tagHandlerIsCallable: boolean) {
  let classesList: string[] = [
    `mr-2 mb-2 px-3 py-0 mt-2 rounded-lg border-2 text-neutral-800 text-sm text-bold whitespace-nowrap`,
  ];

  if (isEnabled) {
    classesList.push(
      "bg-secondary-300 border-secondary-300 is-enabled hover:shadow"
    );
  }

  if (!isEnabled && tagHandlerIsCallable) {
    classesList.push(
      "bg-white border-secondary-300 primary-100 is-selectable hover:shadow"
    );
  }

  if (!isEnabled && !tagHandlerIsCallable) {
    classesList.push(
      "bg-white border-primary-100 text-primary-100 is-disabled"
    );
  }

  if (tagHandlerIsCallable) {
    classesList.push("cursor-pointer");
  }

  return classesList.join(" ");
}

export function Chip({
  title,
  slug,
  onClick,
  isRemovable = false,
  isEnabled = false,
}: ChipProps) {
  let tagHandlerIsCallable = typeof onClick === "function";

  return (
    <div
      className={getClassNames(isEnabled, tagHandlerIsCallable)}
      onClick={() => tagHandlerIsCallable && onClick && onClick(slug)}
    >
      {title}
      {isRemovable ? " x" : ""}
    </div>
  );
}

export default Chip;
