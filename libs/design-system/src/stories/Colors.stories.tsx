import { Meta, Story } from "@storybook/react";

export const Colors: Story = () => {
  return (
    <div className="grid grid-cols-2 gap-2 text-xl font-bold">
      <div className="p-2 bg-beige text-blue">beige</div>
      <div className="p-2 bg-fill text-blue">fill</div>
      <div className="p-2 bg-blue text-fill">blue</div>
      <div className="p-2 bg-primary text-fill">primary</div>
      <div className="p-2 bg-transparent text-lilac-500">
        lilac-500 (text only)
      </div>
      <div></div>
      <div className="p-2 bg-lilac-300 text-blue">lilac 300</div>
      <div className="p-2 bg-secondary text-blue">secondary</div>
      <div className="p-2 bg-green text-blue">green</div>
      <div className="p-2 bg-success text-blue">success</div>
      <div className="p-2 bg-yellow text-blue">yellow</div>
      <div className="p-2 bg-warning text-blue">warning</div>
      <div className="p-2 bg-salmon text-blue">salmon</div>
      <div className="p-2 bg-danger text-blue">danger</div>
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
