import { EventFeedItemProps } from "@mint-vernetzt/react-components";
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
  const tags = faker.lorem.words(4).split(" ");
  return { headline, body, slug, date, category, tags };
}
