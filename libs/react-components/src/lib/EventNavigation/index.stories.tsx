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
  headline: "Veranstaltungstage",
  items: Array(5)
    .fill(null)
    .map((item, index) => ({
      headline: faker.lorem.words(),
      date: faker.date.future(),
      url: `https://some-url-${index}.test/`,
    })),
  currentUrl: `https://some-url-1.test/`,
};

EventNavigationStory.storyName = "navigation";
