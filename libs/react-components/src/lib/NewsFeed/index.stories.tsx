import { Meta, Story } from "@storybook/react";
import faker from "faker";
import { NewsFeed, NewsFeedProps } from "./NewsFeed";
import { NewsFeedItem, NewsFeedItemProps } from "./NewsFeedItem";
import { getNewsFeedItemProps, getTag } from "./utils";

export default {
  component: NewsFeedItem,
  title: "Components/NewsFeed",
} as Meta;

export const Item: Story<NewsFeedItemProps> = (args) => (
  <NewsFeedItem {...args} />
);
Item.args = {
  headline: faker.lorem.words(),
  body: faker.lorem.paragraph(),
  date: faker.date.future(),
  slug: faker.internet.url(),
  tagsProps: [getTag(), getTag(), getTag()],
};
Item.storyName = "item";

export const ItemWithImage: Story<NewsFeedItemProps> = (args) => (
  <NewsFeedItem {...args} />
);
ItemWithImage.args = {
  headline: faker.lorem.words(),
  body: faker.lorem.paragraph(),
  date: faker.date.future(),
  slug: faker.internet.url(),
  tagsProps: [getTag(), getTag(), getTag()],
  image: {
    src: faker.image.image(),
    alt: faker.lorem.words(),
  },
};
ItemWithImage.storyName = "item with image";

export const Feed: Story<NewsFeedProps> = (args) => <NewsFeed {...args} />;
Feed.args = {
  headline: faker.lorem.words(),
  newsFeedItemsProps: new Array(7).fill(null).map(() => {
    return getNewsFeedItemProps();
  }),
};
Feed.storyName = "feed";

export const FeedWithBody: Story<NewsFeedProps> = (args) => (
  <NewsFeed {...args} />
);
FeedWithBody.args = {
  headline: faker.lorem.words(),
  body: faker.lorem.paragraph(),
  newsFeedItemsProps: new Array(7).fill(null).map(() => {
    return getNewsFeedItemProps();
  }),
};
FeedWithBody.storyName = "feed with body";

export const FeedWithLink: Story<NewsFeedProps> = (args) => (
  <NewsFeed {...args} />
);
FeedWithLink.args = {
  headline: faker.lorem.words(),
  linkToOverview: faker.internet.url(),
  newsFeedItemsProps: new Array(7).fill(null).map(() => {
    return getNewsFeedItemProps();
  }),
};
FeedWithLink.storyName = "feed with link";
