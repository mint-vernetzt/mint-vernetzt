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
  disabled: false,
};

Playground.argTypes = {
  onClick: { action: "clicked", control: false },
  disabled: { control: { type: "boolean" } },
};

export const Variants: Story = () => {
  return (
    <>
      <div className="flex">
        <Button type={ButtonType.Primary}>Primary</Button>
        <Button type={ButtonType.Primary} disabled>
          Disabled
        </Button>
        <Button type={ButtonType.Secondary}>Secondary</Button>
        <Button type={ButtonType.Success}>Success</Button>
        <Button type={ButtonType.Warning}>Warning</Button>
        <Button type={ButtonType.Danger}>Danger</Button>
        <Button type={ButtonType.Secondary} disabled>
          Disabled
        </Button>
      </div>
    </>
  );
};

Variants.parameters = {
  controls: { disable: true },
};
