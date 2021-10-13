import { Story, Meta } from "@storybook/react";
import { EventFeedItem, EventFeedItemProps } from "./EventFeedItem";

export default {
  component: EventFeedItem,
  title: "EventFeedItem",
} as Meta;

const Template: Story<EventFeedItemProps> = (args) => (
  <EventFeedItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
