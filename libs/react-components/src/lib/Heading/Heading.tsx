import React from "react";

export interface HeadingProps {
  children: string | React.ReactNode;
}

export function Heading(props: HeadingProps) {
  const { children } = props;

  return (
    <div>
      <h2>{children}</h2>
    </div>
  );
}

export function H1(props: HeadingProps) {
  return <h1>{props.children}</h1>;
}
export function H2(props: HeadingProps) {
  return <h2>{props.children}</h2>;
}
export function H3(props: HeadingProps) {
  return <h3>{props.children}</h3>;
}
export function H4(props: HeadingProps) {
  return <h4>{props.children}</h4>;
}
export function H5(props: HeadingProps) {
  return <h5>{props.children}</h5>;
}
export function H6(props: HeadingProps) {
  return <h6>{props.children}</h6>;
}

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};
