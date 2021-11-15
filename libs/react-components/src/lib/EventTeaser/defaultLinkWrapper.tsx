import * as React from "react";

export const defaultLinkWrapper = (url: string, children: React.ReactNode) => {
  return <a href={url}>{children}</a>;
};
