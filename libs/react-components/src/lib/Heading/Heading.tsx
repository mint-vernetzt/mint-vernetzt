import React from "react";

export type HeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  as: HeadingTypes;
}

function Heading(props: HeadingProps) {
  const { as, ...otherProps } = props;
  const element = React.createElement(as, otherProps);
  return element;
}

export function H1(props: React.HTMLProps<HTMLHeadingElement>) {
  return <Heading {...props} as="h1" />;
}

export function H2(props: React.HTMLProps<HTMLHeadingElement>) {
  return <Heading {...props} as="h2" />;
}

export function H3(props: React.HTMLProps<HTMLHeadingElement>) {
  return <Heading {...props} as="h3" />;
}

export function H4(props: React.HTMLProps<HTMLHeadingElement>) {
  return <Heading {...props} as="h4" />;
}

export function H5(props: React.HTMLProps<HTMLHeadingElement>) {
  return <Heading {...props} as="h5" />;
}

export function H6(props: React.HTMLProps<HTMLHeadingElement>) {
  return <Heading {...props} as="h6" />;
}

export default Heading;
