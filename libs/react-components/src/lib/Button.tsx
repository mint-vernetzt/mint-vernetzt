import React from "react";

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Warning = "warning",
  Danger = "danger",
}
export interface ButtonProps {
  type?: ButtonType;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
}

export function Button(props: ButtonProps) {
  const { type, children, ...otherProps } = props;

  let classes: Array<String> = [];

  if (type === ButtonType.Primary) {
    classes = classes.concat([
      "border-transparent",
      "text-fill",
      "focus:border-fill focus:border-dotted focus:outline-none",
      "filter hover:brightness-75",
    ]);
  } else {
    classes = classes.concat([
      "border-primary",
      "text-primary",
      "focus:border-dotted focus:outline-none",
      "filter hover:brightness-75",
    ]);
  }
  if (type === ButtonType.Secondary) {
    classes = classes.concat(["bg-fill"]);
  } else {
    classes = classes.concat([`bg-${type}`]);
  }

  return (
    <button
      className={`m-1 px-4 py-2 border-2 rounded ${classes.join(" ")}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: ButtonType.Primary,
};

export default Button;
