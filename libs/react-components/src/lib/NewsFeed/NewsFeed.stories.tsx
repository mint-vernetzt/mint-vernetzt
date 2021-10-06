import { Story, Meta } from "@storybook/react";
import { NewsFeed, NewsFeedProps } from "./NewsFeed";

export default {
  component: NewsFeed,
  title: "NewsFeed",
} as Meta;

const Template: Story<NewsFeedProps> = (args) => <NewsFeed {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
