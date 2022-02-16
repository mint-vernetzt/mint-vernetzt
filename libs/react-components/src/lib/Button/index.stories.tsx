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
  children: "Button",
};
Default.argTypes = {
  children: {
    type: "string",
  },
  onClick: { action: "button clicked" },
};
Default.storyName = "Default";
