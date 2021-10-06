import { Story, Meta } from "@storybook/react";
import { NewsFeedItem, NewsFeedItemProps } from "./NewsFeedItem";

export default {
  component: NewsFeedItem,
  title: "NewsFeedItem",
} as Meta;

const Template: Story<NewsFeedItemProps> = (args) => <NewsFeedItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
