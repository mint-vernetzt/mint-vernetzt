import { Meta, Story } from "@storybook/react";
import { EventNavigation, EventNavigationProps } from "./EventNavigation";
import faker from "faker";

export default {
  component: EventNavigation,
  title: "Components/Event",
} as Meta;

export const EventNavigationStory: Story<EventNavigationProps> = (args) => (
  <EventNavigation {...args} />
);
EventNavigationStory.args = {
  items: Array(5)
    .fill(null)
    .map((item) => ({
      headline: faker.lorem.words(),
      date: faker.date.future(),
      url: faker.internet.url(),
    })),
};

EventNavigationStory.storyName = "navigation";
