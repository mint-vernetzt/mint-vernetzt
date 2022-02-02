import { Story, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
  component: Heading,
  title: "Heading",
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
