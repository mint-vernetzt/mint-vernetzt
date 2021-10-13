import { Story, Meta } from "@storybook/react";
import { EventFeed, EventFeedProps } from "./EventFeed";

export default {
  component: EventFeed,
  title: "EventFeed",
} as Meta;

const Template: Story<EventFeedProps> = (args) => <EventFeed {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
