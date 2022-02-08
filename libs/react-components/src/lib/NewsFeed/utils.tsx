import faker from "faker";
import { ChipProps } from "../Chip/Chip";
import { NewsFeedItemProps } from "./NewsFeedItem";

export function formatDate(date: Date): string {
  const formatted = date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return formatted;
}

export function getTag(): ChipProps {
  const title = faker.lorem.word();
  const slug = faker.lorem.slug();
  return { title, slug };
}

export interface GetNewsFeedItemPropsOptions {
  numberOfTags?: number;
  withImage?: boolean;
}

export function getNewsFeedItemProps(
  options?: GetNewsFeedItemPropsOptions
): NewsFeedItemProps {
  const {
    numberOfTags = Math.floor(Math.random() * (5 + 1)), // add up to 5 tags
    withImage,
  } = options || {};

  const headline = faker.lorem.words();
  const body = faker.lorem.paragraph();
  const date = faker.date.future();
  const slug = faker.internet.url();

  const tags: ChipProps[] = [];

  for (let i = 0; i < numberOfTags; i++) {
    tags.push(getTag());
  }

  let image;

  if (withImage) {
    image = { src: faker.image.image(), alt: faker.lorem.words() };
  }

  return { headline, body, date, slug, tags, image };
}
