import faker from "faker";
import { TagProps } from "./NewsFeedItem";

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
