import * as React from "react";

export const defaultLinkWrapper = (url: string, children: React.ReactChild) => {
  return <a href={url}>{children}</a>;
};
