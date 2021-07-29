import React from "react";

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
}

export enum ButtonColor {
  Beige = "beige",
  Blue = "blue",
  Lilac = "lilac",
  Success = "success",
  Warning = "warning",
  Danger = "danger",
}
export interface ButtonProps {
  type: ButtonType;
  color: ButtonColor;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
}

export function Button(props: ButtonProps) {
  const {
    type = ButtonType.Primary,
    color = ButtonColor.Blue,
    children,
    ...otherProps
  } = props;

  let classes: Array<String> = [];
  let textColor: String = color;

  if (type === ButtonType.Primary) {
    if (
      color === ButtonColor.Beige ||
      color === ButtonColor.Lilac ||
      color === ButtonColor.Warning ||
      color === ButtonColor.Danger
    ) {
      textColor = ButtonColor.Blue;
    } else {
      textColor = ButtonColor.Beige;
    }
    classes = classes.concat([
      "border-transparent",
      `bg-${color}`,
      "filter hover:brightness-90 focus:brightness-90",
    ]);
  } else {
    classes = classes.concat([
      `border-${color}`,
      "bg-transparent",
      `hover:bg-${color} hover:bg-opacity-10`,
      `focus:bg-${color} focus:bg-opacity-10`,
    ]);
  }

  return (
    <button
      className={`px-4 py-2 border-2 rounded text-${textColor} ${classes.join(
        " "
      )}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
