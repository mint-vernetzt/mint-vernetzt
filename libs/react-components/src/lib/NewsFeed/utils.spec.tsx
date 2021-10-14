import { formatDate, getTag } from "./utils";

test("get tag", () => {
  const { title } = getTag();

  expect(title).toBeTruthy();
});

test("format date", () => {
  const date = new Date(1997, 7, 4);
  const formatted = formatDate(date);

  expect(formatted).toBe("04. August 1997");
});
