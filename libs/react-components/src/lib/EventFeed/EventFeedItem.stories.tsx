import { Story, Meta } from "@storybook/react";
import { EventFeedItem, EventFeedItemProps } from "./EventFeedItem";
import faker from "faker";

export default {
  component: EventFeedItem,
  title: "EventFeedItem",
} as Meta;

const Template: Story<EventFeedItemProps> = (args) => (
  <EventFeedItem {...args} />
);

export const Item = Template.bind({});
Item.args = {
  headline: faker.lorem.words(),
  body: faker.lorem.paragraph(),
  date: faker.date.future(),
};
Item.storyName = "item";
