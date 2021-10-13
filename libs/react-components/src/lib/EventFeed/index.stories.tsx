import { Meta, Story } from "@storybook/react";
import faker from "faker";
import { EventFeed, EventFeedProps } from "./EventFeed";
import { EventFeedItem, EventFeedItemProps } from "./EventFeedItem";
import { getEventFeedItemProps } from "./utils";

export default {
  component: EventFeed,
  title: "Components/EventFeed",
} as Meta;

export const Item: Story<EventFeedItemProps> = (args) => (
  <EventFeedItem {...args} />
);
Item.args = {
  headline: faker.lorem.words(),
  body: faker.lorem.paragraph(),
  date: faker.date.future(),
};
Item.storyName = "item";

export const Feed: Story<EventFeedProps> = (args) => <EventFeed {...args} />;
Feed.args = {
  headline: faker.lorem.words(),
  eventFeedItemsProps: new Array(7).fill(null).map(() => {
    return getEventFeedItemProps();
  }),
};
Feed.storyName = "feed";
