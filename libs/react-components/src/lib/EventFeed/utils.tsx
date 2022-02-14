import { EventFeedItemProps } from "./EventFeedItem";
import faker from "faker";

export function formatDate(date: Date): string {
  const formatted = date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return formatted;
}

export function getEventFeedItemProps(): EventFeedItemProps {
  const headline = faker.lorem.words();
  const body = faker.lorem.paragraph();
  const slug = faker.internet.url();
  const date = faker.date.future();
  const category = faker.lorem.words();
  const tags: EventFeedItemProps["tags"] = faker.lorem
    .words(4)
    .split(" ")
    .map((t) => ({ title: t, slug: t }));
  return { headline, body, slug, date, category, tags };
}
