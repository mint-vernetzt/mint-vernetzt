import { Meta, Story } from "@storybook/react";
import { colors } from "../theme";

type ColorItemProps = {
  color: string;
  name?: string;
  withBorder?: boolean;
};

function ColorItem(props: ColorItemProps) {
  return (
    <div className="flex items-center">
      <div
        className={`flex-none bg-${
          props.color
        } w-1 h-1 p-4 mr-1 rounded-md border ${
          props.withBorder ? "border-neutral-500" : "border-transparent"
        }`}
      ></div>
      <div className="flex-1">
        {props.withBorder}
        <span className="block font-bold text-sm">
          {props.name || props.color}
        </span>
        <span className="text-sm">
          {(colors as { [index: string]: string })[props.color]}
        </span>
      </div>
    </div>
  );
}

export const Colors: Story = () => {
  return (
    <div className="min-w-max max-w-4xl">
      <div className="grid grid-cols-5 gap-2 w-full">
        <ColorItem color="primary" name="primary/primary-500" />
        <ColorItem color="primary-400" />
        <ColorItem color="primary-300" />
        <ColorItem color="primary-200" />
        <ColorItem color="primary-100" />
        <ColorItem color="secondary" name="secondary/secondary-500" />
        <ColorItem color="secondary-400" />
        <ColorItem color="secondary-300" />
        <div></div>
        <div></div>
        <ColorItem color="tertiary" name="tertiary/tertiary-500" />
        <ColorItem color="tertiary-300" withBorder />
        <div></div>
        <div></div>
        <div></div>
        <ColorItem color="success" name="success/success-500" />
        <ColorItem color="success-300" name="success-300" />
        <div></div>
        <div></div>
        <div></div>
        <ColorItem color="warning" name="warning/warning-500" />
        <ColorItem color="warning-300" name="warning-300" />
        <div></div>
        <div></div>
        <div></div>
        <ColorItem color="danger" name="danger/danger-500" />
        <ColorItem color="danger-300" name="danger-300" />
        <div></div>
        <div></div>
        <div></div>
        <ColorItem color="neutral-900" />
        <ColorItem color="neutral-800" />
        <ColorItem color="neutral-700" />
        <ColorItem color="neutral-600" />
        <ColorItem color="neutral-500" />
        <ColorItem color="neutral-400" withBorder />
        <ColorItem color="neutral-300" withBorder />
        <ColorItem color="neutral-200" withBorder />
        <ColorItem color="neutral-100" withBorder />
      </div>
    </div>
  );
};

export default {
  title: "Style Guide/Colors",
  parameters: {
    controls: { disable: true },
    actions: {
      disable: true,
    },
  },
} as Meta;
