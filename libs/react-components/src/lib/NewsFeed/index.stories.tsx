import { Meta, Story } from "@storybook/react";
import faker from "faker";
import { NewsFeed, NewsFeedProps } from "./NewsFeed";
import { NewsFeedItem, NewsFeedItemProps } from "./NewsFeedItem";
import { getNewsFeedItemProps, getTag } from "./utils";

export default {
  component: NewsFeedItem,
  title: "Components/NewsFeed",
} as Meta;
const Template: Story<NewsFeedProps> = (args) => <NewsFeed {...args} />;

export const Item: Story<NewsFeedItemProps> = (args) => (
  <NewsFeedItem {...args} />
);
Item.args = {
  headline: faker.lorem.words(),
  body: faker.lorem.paragraph(),
  date: faker.date.future(),
  tagsProps: [getTag(), getTag(), getTag()],
};
Item.storyName = "item";

export const Feed = Template.bind({});
Feed.args = {
  headline: faker.lorem.words(),
  body: faker.lorem.paragraph(),
  newsFeedItemsProps: new Array(7).fill(null).map(() => {
    return getNewsFeedItemProps();
  }),
};
Feed.storyName = "feed";
