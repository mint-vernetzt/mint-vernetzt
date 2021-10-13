import { Story, Meta } from "@storybook/react";
import { EventFeed, EventFeedProps } from "./EventFeed";
import faker from "faker";
import { getEventFeedItemProps } from "./utils";

export default {
  component: EventFeed,
  title: "EventFeed",
} as Meta;

export const Feed: Story<EventFeedProps> = (args) => <EventFeed {...args} />;
Feed.args = {
  headline: faker.lorem.words(),
  eventFeedItemsProps: new Array(7).fill(null).map(() => {
    return getEventFeedItemProps();
  }),
};
