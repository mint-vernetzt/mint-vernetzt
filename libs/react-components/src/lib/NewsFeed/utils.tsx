import faker from "faker";

export function formatDate(date: Date) {
  const formatted = date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return formatted;
}

export function getTag() {
  const title = faker.lorem.word();
  return { title };
}
