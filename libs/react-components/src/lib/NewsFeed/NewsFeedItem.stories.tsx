import { Meta, Story } from "@storybook/react";
import faker from "faker";
import { NewsFeedItem, NewsFeedItemProps } from "./NewsFeedItem";
import { getTag } from "./utils";

export default {
  component: NewsFeedItem,
  title: "Components/NewsFeed",
} as Meta;

export const Item: Story<NewsFeedItemProps> = (args) => (
  <NewsFeedItem {...args} />
);
Item.storyName = "item";
Item.args = {
  headline: faker.lorem.words(),
  body: faker.lorem.paragraph(),
  date: faker.date.future(),
  tagsProps: [getTag(), getTag(), getTag()],
};
