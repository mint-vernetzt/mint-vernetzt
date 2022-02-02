import React from "react";

export interface HeadingProps {
  children: string | React.ReactNode;
  as?: string;
}

function getElement(props: {
  children: string | React.ReactNode;
  as: string;
  [index: string]: any;
}) {
  const { as, ...otherProps } = props;
  const element = React.createElement(as, otherProps);
  return element;
}

export function H1(props: HeadingProps) {
  const { as = "h1", ...otherProps } = props;
  return getElement({ as, ...otherProps });
}

export function H2(props: HeadingProps) {
  const { as = "h2", ...otherProps } = props;
  return getElement({ as, ...otherProps });
}
export function H3(props: HeadingProps) {
  const { as = "h3", ...otherProps } = props;
  return getElement({ as, ...otherProps });
}
export function H4(props: HeadingProps) {
  const { as = "h4", ...otherProps } = props;
  return getElement({ as, ...otherProps });
}
export function H5(props: HeadingProps) {
  const { as = "h5", ...otherProps } = props;
  return getElement({ as, ...otherProps });
}
export function H6(props: HeadingProps) {
  const { as = "h6", ...otherProps } = props;
  return getElement({ as, ...otherProps });
}

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};
