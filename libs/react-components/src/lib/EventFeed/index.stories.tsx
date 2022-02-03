import { Meta, Story } from "@storybook/react";
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
Item.args = getEventFeedItemProps();
Item.storyName = "item";

export const Feed: Story<EventFeedProps> = (args) => <EventFeed {...args} />;
Feed.args = {
  eventFeedItemsProps: new Array(7).fill(null).map(() => {
    return getEventFeedItemProps();
  }),
};
Feed.storyName = "feed";
