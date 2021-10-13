import { render, screen, within } from "@testing-library/react";
import faker from "faker";
import EventFeedItem from "./EventFeedItem";
import { formatDate } from "./utils";

test("render content elements", () => {
  const props = {
    headline: faker.lorem.words(),
    body: faker.lorem.paragraphs(),
    slug: faker.internet.url(),
    date: faker.date.future(),
  };

  render(<EventFeedItem {...props} />);

  const headlineDom = screen.getByRole("heading");
  expect(headlineDom.textContent).toBe(props.headline);
  const slugDom = within(headlineDom).getByRole("link");
  expect(slugDom.getAttribute("href")).toBe(props.slug);

  const bodyDom = screen.getByTestId("body");
  expect(bodyDom.textContent).toBe(props.body);

  const dateDom = screen.getByTestId("date");
  expect(dateDom.textContent).toBe(formatDate(props.date));
});
