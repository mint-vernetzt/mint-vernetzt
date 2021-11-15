import { Meta, Story } from "@storybook/react";
import faker from "faker";
import EventTeaser, { EventTeaserProps } from "./EventTeaser";

export default {
  component: EventTeaser,
  title: "Components/Event",
} as Meta;

export const EventTeaserStory: Story<EventTeaserProps> = (args) => (
  <EventTeaser {...args} />
);

EventTeaserStory.args = {
  headline: "MINTevents",
  headlineUrl: "https://some-url.test/",
  items: Array(5)
    .fill(null)
    .map((item, index) => ({
      headline: faker.lorem.words(),
      body: faker.lorem.paragraph(),
      date: faker.date.future(),
      url: `https://some-url-${index}.test/`,
    })),
};

EventTeaserStory.storyName = "Teaser";
