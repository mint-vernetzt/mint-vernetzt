import React from "react";
export interface LinkProps {
  to: string;
  children: string | React.ReactNode;
  className?: string;
  as?: string | React.ElementType;
  isExternal?: boolean;
}

export const Link = React.forwardRef((props: LinkProps, ref) => {
  const {
    to,
    isExternal = false,
    as = "a",
    className = "text-primary hover:underline",
    ...otherProps
  } = props;

  let rel;
  let target;
  if (isExternal) {
    rel = "noopener noreferrer";
    target = "_blank";
  }

  let href;
  if (as === "a") {
    href = to;
  }

  const element = React.createElement(as, {
    href,
    className,
    to,
    rel,
    target,
    ref,
    ...otherProps,
  });
  return element;
});

Link.displayName = "Link";

export default Link;
