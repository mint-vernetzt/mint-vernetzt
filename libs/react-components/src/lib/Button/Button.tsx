import React from "react";

export interface ButtonProps {
  submit?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
}

export function Button(props: ButtonProps) {
  const { submit = false, disabled = false, ...otherProps } = props;

  let type: "button" | "submit" = "button";
  if (submit) {
    type = "submit";
  }

  return <button type={type} disabled={disabled} {...otherProps} />;
}

export default Button;
