import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps, ButtonType } from "./Button";

export default {
  component: Button,
  title: "react components/Button",
} as Meta;

export const Playground: Story<ButtonProps> = (args) => <Button {...args} />;

Playground.args = {
  children: "Button",
  type: ButtonType.Primary,
};

Playground.argTypes = {
  onClick: { action: "clicked", control: false },
};

export const Variants: Story = () => {
  return (
    <>
      <div className="flex">
        <Button type={ButtonType.Primary}>Primary</Button>
        <Button type={ButtonType.Secondary}>Secondary</Button>
        <Button type={ButtonType.Success}>Success</Button>
        <Button type={ButtonType.Warning}>Warning</Button>
        <Button type={ButtonType.Danger}>Danger</Button>
      </div>
    </>
  );
};

Variants.parameters = {
  controls: { disable: true },
};
