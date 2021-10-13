import { formatDate } from "./utils";

test("format date", () => {
  const date = new Date(1997, 7, 4);
  const formatted = formatDate(date);

  expect(formatted).toBe("04. August 1997");
});
