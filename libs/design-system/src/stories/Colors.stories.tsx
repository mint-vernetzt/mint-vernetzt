import { Meta, Story } from "@storybook/react";

export const Colors: Story = () => {
  return (
    <div className="grid grid-cols-2 gap-2 text-lg font-bold">
      <div className="p-2 bg-beige text-blue">beige #efe8e6</div>
      <div className="p-2 bg-fill text-blue">fill</div>
      <div className="p-2 bg-blue text-fill">blue #154194</div>
      <div className="p-2 bg-primary text-fill">primary</div>
      <div className="p-2 bg-transparent text-lilac-500">
        lilac-500 #b16fab (text only)
      </div>
      <div></div>
      <div className="p-2 bg-lilac-300 text-blue">lilac 300 #d0a9cd</div>
      <div className="p-2 bg-secondary text-blue">secondary</div>
      <div className="p-2 bg-green text-blue">green #66cbaf</div>
      <div className="p-2 bg-success text-blue">success</div>
      <div className="p-2 bg-yellow text-blue">yellow #fdd05c</div>
      <div className="p-2 bg-warning text-blue">warning</div>
      <div className="p-2 bg-salmon text-blue">salmon #f5adac</div>
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
