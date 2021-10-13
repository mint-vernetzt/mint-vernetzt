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
  const date = faker.date.future();

  return { headline, body, date };
}
