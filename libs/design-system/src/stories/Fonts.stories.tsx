import { Meta, Story } from "@storybook/react";

const text =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n,./:()!?#@&0123456789";

export const Families: Story = () => {
  return (
    <div className="flex flex-wrap items-baseline text-blue text-base">
      <div className="w-1/6 font-bold">sans</div>
      <div className="w-5/6 font-sans">Source Sans Pro 400</div>
      <div className="w-1/6 font-bold">sans bold</div>
      <div className="w-5/6 font-sans font-bold">Source Sans Pro 600</div>
    </div>
  );
};

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

export const SizesAndColors: Story = () => {
  return (
    <div className="grid gap-y-2">
      <div className="flex flex-wrap items-baseline ">
        <div className="w-1/6 p-2 text-blue">color</div>
        <div className="w-5/6 p-2">
          <p className="text-blue">colors with min. size</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-beige">
        <div className="w-1/6 p-2 text-blue">beige</div>
        <div className="w-5/6 p-2">
          <p className="text-blue text-xs">blue xs</p>
          <p className="text-lilac-500 text-xl">lilac-500 xl</p>
          <p className="text-lilac-500 text-lg font-bold">lilac-500 lg bold</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-blue">
        <div className="w-1/6 p-2 text-beige">blue</div>
        <div className="w-5/6 p-2">
          <p className="text-beige text-xs">beige xs</p>
          <p className="text-lilac-300 text-xl">lilac-300 xl</p>
          <p className="text-lilac-300 text-lg font-bold">lilac-300 lg bold</p>
          <p className="text-green text-xl">green xl</p>
          <p className="text-green text-lg font-bold">green lg bold</p>
          <p className="text-yellow text-xs">yellow xs</p>
          <p className="text-salmon text-xl">salmon xl</p>
          <p className="text-salmon text-lg font-bold">salmon lg bold</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-lilac-300">
        <div className="w-1/6 p-2 text-blue">lilac-300</div>
        <div className="w-5/6 p-2">
          <p className="text-blue text-xs">blue xs</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-green">
        <div className="w-1/6 p-2 text-blue">green</div>
        <div className="w-5/6 p-2">
          <p className="text-blue text-xs">blue xs</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-yellow">
        <div className="w-1/6 p-2 text-blue">yellow</div>
        <div className="w-5/6 p-2">
          <p className="text-blue text-xs">blue xs</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-salmon">
        <div className="w-1/6 p-2 text-blue">salmon</div>
        <div className="w-5/6 p-2">
          <p className="text-blue text-xs">blue xs</p>
        </div>
      </div>
    </div>
  );
};

export default {
  title: "Style Guide/Fonts",
  parameters: {
    controls: { disable: true },
    actions: {
      disable: true,
    },
  },
} as Meta;
