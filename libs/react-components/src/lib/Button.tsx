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
  disabled?: boolean;
}

export function Button(props: ButtonProps) {
  const { type, children, ...otherProps } = props;

  const { disabled } = otherProps;

  let classes: Array<String> = [];

  const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
    ...otherProps,
  };

  if (disabled) {
    buttonProps.tabIndex = -1;
    classes = classes.concat("bg-gray-200 pointer-events-none");
  }
  if (type === ButtonType.Primary) {
    classes = classes.concat([
      "border-transparent",
      disabled ? "text-gray-600" : "text-fill",
      "focus:border-fill focus:border-dotted focus:outline-none",
      "filter hover:brightness-75",
    ]);
  } else {
    classes = classes.concat([
      disabled ? "border-gray-400" : "border-primary",
      disabled ? "text-gray-600" : "text-primary",
      "focus:border-dotted focus:outline-none",
      "filter hover:brightness-75",
    ]);
  }
  if (disabled) {
    classes = classes.concat(["bg-gray-200"]);
  } else if (type === ButtonType.Secondary) {
    classes = classes.concat(["bg-fill"]);
  } else {
    classes = classes.concat([`bg-${type}`]);
  }

  return (
    <button
      className={`m-1 px-4 py-2 border-2 rounded ${classes.join(" ")}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: ButtonType.Primary,
  disabled: false,
};

export default Button;
