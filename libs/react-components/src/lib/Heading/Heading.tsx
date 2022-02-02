import React from "react";

export interface HeadingProps {
  children: string | React.ReactNode;
  as?: string;
}

function getElement(props) {
  const { as, ...otherProps } = props;
  const element = React.createElement(as, otherProps);
  return element;
}

export function H1(props: HeadingProps) {
  const { children, as = "h1" } = props;
  return getElement({ as, children });
}

export function H2(props: HeadingProps) {
  const { children, as = "h2" } = props;
  return getElement({ as, children });
}
export function H3(props: HeadingProps) {
  const { children, as = "h3" } = props;
  return getElement({ as, children });
}
export function H4(props: HeadingProps) {
  const { children, as = "h4" } = props;
  return getElement({ as, children });
}
export function H5(props: HeadingProps) {
  const { children, as = "h5" } = props;
  return getElement({ as, children });
}
export function H6(props: HeadingProps) {
  const { children, as = "h6" } = props;
  return getElement({ as, children });
}

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};
