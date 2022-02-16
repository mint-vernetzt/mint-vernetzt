import React from "react";

export type ButtonVariants = "primary" | "neutral" | "ghost";

export interface ButtonProps {
  submit?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  variant?: ButtonVariants;
}

function getClasses(props: {
  variant: ButtonVariants;
  disabled: boolean;
}): string | undefined {
  const { variant, disabled } = props;

  let classes = "px-3 py-2 rounded-lg border";
  if (variant === "primary") {
    classes = classes.concat(" border-transparent");
    if (disabled) {
      classes = classes.concat(" text-neutral-500 bg-primary-100");
    } else {
      classes = classes.concat(
        " text-neutral-100 bg-primary-400 hover:shadow active:bg-primary-300"
      );
    }
  } else if (variant === "neutral") {
    if (disabled) {
      classes = classes.concat(" text-neutral-500 border-primary-200");
    } else {
      classes = classes.concat(
        " text-primary hover:text-neutral-100 border-primary hover:shadow hover:bg-primary-300"
      );
    }
  } else if (variant === "ghost") {
    classes = classes.concat(" border-transparent");
    if (disabled) {
      classes = classes.concat(" text-primary-100");
    } else {
      classes = classes.concat(" text-primary-400 hover:bg-primary-100");
    }
  }

  return classes;
}

export function Button(props: ButtonProps) {
  const {
    submit = false,
    disabled = false,
    variant = "primary",
    ...otherProps
  } = props;

  let type: "button" | "submit" = "button";
  if (submit) {
    type = "submit";
  }

  const classes = getClasses({ variant, disabled });

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      {...otherProps}
    />
  );
}

export default Button;
