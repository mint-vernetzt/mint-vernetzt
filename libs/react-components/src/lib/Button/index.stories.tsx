import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
} as Meta;

export const Playground: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};
Playground.args = {
  disabled: false,
  submit: false,
  small: false,
  children: "Button",
  variant: "primary",
};
Playground.argTypes = {
  children: {
    type: "string",
  },
  variant: {
    options: ["primary", "neutral", "ghost"],
    control: { type: "select" },
  },
  onClick: { action: "button clicked" },
};
Playground.storyName = "Playground";

export const Variants: Story = () => {
  return (
    <>
      <span className="block m-2">
        <Button>Primary</Button>
      </span>
      <span className="block m-2">
        <Button disabled>Primary disabled</Button>
      </span>
      <span className="block m-2">
        <Button small>Primary small</Button>
      </span>
      <span className="block m-2">
        <Button small disabled>
          Primary small disabled
        </Button>
      </span>
      <span className="block m-2">
        <Button variant="neutral">Neutral</Button>
      </span>
      <span className="block m-2">
        <Button variant="neutral" disabled>
          Neutral disabled
        </Button>
      </span>
      <span className="block m-2">
        <Button variant="neutral" small>
          Neutral small
        </Button>
      </span>
      <span className="block m-2">
        <Button variant="neutral" small disabled>
          Neutral small disabled
        </Button>
      </span>
      <span className="block m-2">
        <Button variant="ghost">Ghost</Button>
      </span>
      <span className="block m-2">
        <Button variant="ghost" disabled>
          Ghost disabled
        </Button>
      </span>
      <span className="block m-2">
        <Button variant="ghost" small>
          Ghost small
        </Button>
      </span>
      <span className="block m-2">
        <Button variant="ghost" small disabled>
          Ghost small disabled
        </Button>
      </span>
    </>
  );
};
Variants.parameters = {
  controls: { disable: true },
};
Variants.storyName = "Variants";
