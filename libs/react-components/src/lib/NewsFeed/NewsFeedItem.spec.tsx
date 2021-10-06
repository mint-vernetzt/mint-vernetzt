import { render, screen } from "@testing-library/react";
import faker from "faker";

import NewsFeedItem from "./NewsFeedItem";

test("render content elements", () => {
  const props = {
    headline: faker.lorem.words(),
    body: faker.lorem.paragraphs(),
  };
  render(<NewsFeedItem {...props} />);

  const headlineDom = screen.getByRole("heading");
  expect(headlineDom.textContent).toBe(props.headline);

  const bodyDom = screen.getByTestId("body");
  expect(bodyDom.textContent).toBe(props.body);
});
