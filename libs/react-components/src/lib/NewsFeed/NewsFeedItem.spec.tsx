import { render, screen, within, logRoles } from "@testing-library/react";
import faker from "faker";
import { formatDate, getTag } from "./utils";

import NewsFeedItem from "./NewsFeedItem";

test("render content elements", () => {
  const tagProps1 = getTag();
  const tagProps2 = getTag();
  const tagProps3 = getTag();

  const props = {
    headline: faker.lorem.words(),
    body: faker.lorem.paragraphs(),
    date: faker.date.future(),
    slug: faker.internet.url(),
    tagsProps: [tagProps1, tagProps2, tagProps3],
  };

  render(<NewsFeedItem {...props} />);

  const headlineDom = screen.getByRole("heading");
  expect(headlineDom.textContent).toBe(props.headline);
  const linkToOverviewDom = within(headlineDom).getByRole("link");
  expect(linkToOverviewDom.getAttribute("href")).toBe(props.slug);

  const bodyDom = screen.getByTestId("body");
  expect(bodyDom.textContent).toBe(props.body);

  const dateDom = screen.getByTestId("date");
  expect(dateDom.textContent).toBe(formatDate(props.date));

  const tags = screen.getAllByRole("listitem");
  expect(tags.length).toBe(props.tagsProps.length);
  const tag1Dom = tags[0];
  expect(tag1Dom.textContent).toBe(tagProps1.title);
  const tag2Dom = tags[1];
  expect(tag2Dom.textContent).toBe(tagProps2.title);
  const tag3Dom = tags[2];
  expect(tag3Dom.textContent).toBe(tagProps3.title);
});

test("show image", () => {
  const props = {
    headline: faker.lorem.words(),
    body: faker.lorem.paragraphs(),
    date: faker.date.future(),
    slug: faker.internet.url(),
    tagsProps: [],
    image: {
      src: faker.image.image(),
      alt: faker.lorem.words(),
    },
  };

  const { container } = render(<NewsFeedItem {...props} />);
  logRoles(container);
  const imageDom = screen.getByRole("img");
  expect(imageDom.getAttribute("src")).toBe(props.image.src);
  expect(imageDom.getAttribute("alt")).toBe(props.image.alt);
});
