import { Meta, Story } from "@storybook/react";

const text =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n,./:()!?#@&0123456789";

export const Sizes: Story = () => {
  return (
    <div className="flex flex-wrap items-baseline text-blue">
      <div className="w-1/6 text-xs font-bold">xs</div>
      <div className="w-5/6 text-xs truncate">{text}</div>
      <hr className="w-full border-blue" />
      <div className="w-1/6 text-xs font-bold">sm</div>
      <div className="w-5/6 text-sm truncate">{text}</div>
      <hr className="w-full border-blue" />
      <div className="w-1/6 text-xs font-bold">base</div>
      <div className="w-5/6 text-base truncate">{text}</div>
      <hr className="w-full border-blue" />
      <div className="w-1/6 text-xs font-bold">lg</div>
      <div className="w-5/6 text-lg truncate">{text}</div>
      <hr className="w-full border-blue" />
      <div className="w-1/6 text-xs font-bold">xl</div>
      <div className="w-5/6 text-xl truncate">{text}</div>
      <hr className="w-full border-blue" />
      <div className="w-1/6 text-xs font-bold">2xl</div>
      <div className="w-5/6 text-2xl truncate">{text}</div>
      <hr className="w-full border-blue" />
      <div className="w-1/6 text-xs font-bold">3xl</div>
      <div className="w-5/6 text-3xl truncate">{text}</div>
      <hr className="w-full border-blue" />
      <div className="w-1/6 text-xs font-bold">4xl</div>
      <div className="w-5/6 text-4xl truncate">{text}</div>
      <hr className="w-full border-blue" />
      <div className="w-1/6 text-xs font-bold">5xl</div>
      <div className="w-5/6 text-5xl truncate">{text}</div>
    </div>
  );
};

export default {
  title: "Style Guide/Text Sizes",
  parameters: {
    controls: { disable: true },
    actions: {
      disable: true,
    },
  },
} as Meta;
