import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Button",
} as Meta;

export const Default: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};
Default.args = {
  disabled: false,
  submit: false,
  small: false,
  children: "Button",
  variant: "primary",
};
Default.argTypes = {
  children: {
    type: "string",
  },
  variant: {
    options: ["primary", "neutral", "ghost"],
    control: { type: "select" },
  },
  onClick: { action: "button clicked" },
};
Default.storyName = "Default";
