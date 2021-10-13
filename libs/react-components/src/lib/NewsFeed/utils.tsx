import faker from "faker";
import { NewsFeedItemProps, TagProps } from "./NewsFeedItem";

export function formatDate(date: Date): string {
  const formatted = date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return formatted;
}

export function getTag(): TagProps {
  const title = faker.lorem.word();
  return { title };
}

export function getNewsFeedItemProps(numberOfTags?: number): NewsFeedItemProps {
  const headline = faker.lorem.words();
  const body = faker.lorem.paragraph();
  const date = faker.date.future();
  const slug = faker.internet.url();

  const tagsProps: TagProps[] = [];

  if (numberOfTags === undefined) {
    // add up to 5 tags
    numberOfTags = Math.floor(Math.random() * (5 + 1));
  }
  for (let i = 0; i < numberOfTags; i++) {
    tagsProps.push(getTag());
  }

  return { headline, body, date, slug, tagsProps };
}
