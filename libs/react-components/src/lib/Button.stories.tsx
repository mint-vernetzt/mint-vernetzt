import { Meta, Story } from "@storybook/react";
import { Button, ButtonColor, ButtonProps, ButtonType } from "./Button";

export default {
  component: Button,
  title: "react components/Button",
} as Meta;

export const Playground: Story<ButtonProps> = (args) => <Button {...args} />;

Playground.args = {
  children: "Button",
  type: ButtonType.Primary,
  color: ButtonColor.Beige,
};

Playground.argTypes = {
  onClick: { action: "clicked", control: false },
};

export const Variants: Story = () => {
  return (
    <>
      <span className="inline-block p-1">
        <Button type={ButtonType.Primary} color={ButtonColor.Beige}>
          Primary Beige
        </Button>
      </span>
      <span className="inline-block p-1">
        <Button type={ButtonType.Primary} color={ButtonColor.Blue}>
          Primary Blue
        </Button>
      </span>
      <span className="inline-block p-1">
        <Button type={ButtonType.Primary} color={ButtonColor.Lilac}>
          Primary Lilac
        </Button>
      </span>
      <span className="inline-block p-1">
        <Button type={ButtonType.Primary} color={ButtonColor.Success}>
          Primary Success
        </Button>
      </span>
      <span className="inline-block p-1">
        <Button type={ButtonType.Primary} color={ButtonColor.Warning}>
          Primary Warning
        </Button>
      </span>
      <span className="inline-block p-1">
        <Button type={ButtonType.Primary} color={ButtonColor.Danger}>
          Primary Danger
        </Button>
      </span>
      <span className="inline-block p-1">
        <Button type={ButtonType.Secondary} color={ButtonColor.Beige}>
          Secondary Beige
        </Button>
      </span>
      <span className="inline-block p-1">
        <Button type={ButtonType.Secondary} color={ButtonColor.Blue}>
          Secondary Blue
        </Button>
      </span>
      <span className="inline-block p-1">
        <Button type={ButtonType.Secondary} color={ButtonColor.Lilac}>
          Secondary Lilac
        </Button>
      </span>
      <span className="inline-block p-1">
        <Button type={ButtonType.Secondary} color={ButtonColor.Success}>
          Secondary Success
        </Button>
      </span>
      <span className="inline-block p-1">
        <Button type={ButtonType.Secondary} color={ButtonColor.Warning}>
          Secondary Warning
        </Button>
      </span>
      <span className="inline-block p-1">
        <Button type={ButtonType.Secondary} color={ButtonColor.Danger}>
          Secondary Danger
        </Button>
      </span>
    </>
  );
};

Variants.parameters = {
  controls: { disable: true },
};
