import { Story, Meta } from "@storybook/react";
import { SocialBar } from "./SocialBar";
import faker from "faker";

export default {
  component: SocialBar,
  title: "Components/SocialBar",
} as Meta;

const Template: Story<SocialBarProps> = (args) => <SocialBar {...args} />;

export const Component = Template.bind({});
Component.args = {
  className:
    "flex flex-col md:flex-row mx-2 pt-4 md:pt-6 md:pb-8 px-6 pb-4 bg-white rounded-2xl lg:rounded-3xl shadow lg:px-12 lg:pb-10",
};

Component.storyName = "component";
