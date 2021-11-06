import { render, screen, within } from "@testing-library/react";
import faker from "faker";
import NewsFeed, { NewsFeedProps } from "./NewsFeed";
import { TagProps } from "./NewsFeedItem";
import { formatDate, getNewsFeedItemProps } from "./utils";

const headline = faker.lorem.words();
const body = faker.lorem.paragraph();
const linkToOverview = faker.internet.url();

test("render headline and body", () => {
  const props: NewsFeedProps = {
    headline,
    body,
    linkToOverview,
  };

  render(<NewsFeed {...props} />);

  const headlineDom = screen.getByRole("heading");
  expect(headlineDom.textContent).toBe(headline);

  const linkToOverviewDom = within(headlineDom).getByRole("link");
  expect(linkToOverviewDom.getAttribute("href")).toBe(linkToOverview);

  const bodyDom = screen.getByTestId("body");
  expect(bodyDom.textContent).toBe(body);
});

test("add news feed items", () => {
  const newsFeedItemProps1 = getNewsFeedItemProps();
  const newsFeedItemProps2 = getNewsFeedItemProps();
  const newsFeedItemProps3 = getNewsFeedItemProps();
  const forcedNumberOfTags = 5;
  const newsFeedItemProps4 = getNewsFeedItemProps({
    numberOfTags: forcedNumberOfTags,
  });
  const newsFeedItemProps5 = getNewsFeedItemProps({ withImage: true });

  const props = {
    headline,
    body,
    linkToOverview,
    newsFeedItemsProps: [
      newsFeedItemProps1,
      newsFeedItemProps2,
      newsFeedItemProps3,
      newsFeedItemProps4,
      newsFeedItemProps5,
    ],
  };

  // we loop through tags array
  // check assertion count to make sure all assertions were checked
  expect.assertions(forcedNumberOfTags + 6);

  render(<NewsFeed {...props} />);

  const allListItems = screen.getAllByRole("listitem");
  // feed items have a list of tags
  // we can use this to differentiate between tags and news feed items
  const newsFeedItemDom = allListItems.filter((listitem) => {
    const list = within(listitem).queryByRole("list");
    return list !== null;
  });

  // test "headline" rendered
  const newsFeedItem1Dom = newsFeedItemDom[0];
  const headlineDom = within(newsFeedItem1Dom).getByRole("heading");
  expect(headlineDom.textContent).toBe(newsFeedItemProps1.headline);
  const linkToOverviewDom = within(headlineDom).getByRole("link");
  expect(linkToOverviewDom.getAttribute("href")).toBe(newsFeedItemProps1.slug);

  // test "body" rendered
  const newsFeedItem2Dom = newsFeedItemDom[1];
  const bodyDom = within(newsFeedItem2Dom).getByTestId("body");
  expect(bodyDom.textContent).toBe(newsFeedItemProps2.body);

  // test "date" rendered
  const newsFeedItem3Dom = newsFeedItemDom[2];
  const dateDom = within(newsFeedItem3Dom).getByTestId("date");
  expect(dateDom.textContent).toBe(formatDate(newsFeedItemProps3.date));

  // test "tags" rendered
  const newsFeedItem4Dom = newsFeedItemDom[3];
  const tags = within(newsFeedItem4Dom).getAllByRole("listitem");

  tags.forEach((tag, index) => {
    expect(tag.textContent).toBe(
      // need to cast to array with TagProps, because tagsProps are optional and can be undefined
      (newsFeedItemProps4.tagsProps as TagProps[])[index].title
    );
  });

  // test "image" rendered
  const newsFeedItem5Dom = newsFeedItemDom[4];
  const imageDom = within(newsFeedItem5Dom).getByRole("img");
  if (newsFeedItemProps5.image !== undefined) {
    // condition is used to prevent "Object is possibly 'undefined'"
    expect(imageDom.getAttribute("src")).toBe(newsFeedItemProps5.image.src);
    expect(imageDom.getAttribute("alt")).toBe(newsFeedItemProps5.image.alt);
  }
});
