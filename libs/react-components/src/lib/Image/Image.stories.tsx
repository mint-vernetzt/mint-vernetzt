import { Story, Meta } from "@storybook/react";
import { Image, ImageProps } from "./Image";

export default {
  component: Image,
  title: "Image",
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
