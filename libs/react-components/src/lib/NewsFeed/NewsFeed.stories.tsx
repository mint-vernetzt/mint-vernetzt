import { Meta, Story } from "@storybook/react";
import faker from "faker";
import { NewsFeed, NewsFeedProps } from "./NewsFeed";
import { getNewsFeedItemProps } from "./utils";

export default {
  component: NewsFeed,
  title: "NewsFeed",
} as Meta;

const Template: Story<NewsFeedProps> = (args) => <NewsFeed {...args} />;

export const Feed = Template.bind({});
Feed.args = {
  headline: faker.lorem.words(),
  body: faker.lorem.paragraph(),
  newsFeedItemsProps: new Array(7).fill(null).map(() => {
    return getNewsFeedItemProps();
  }),
};
Feed.storyName = "feed";
