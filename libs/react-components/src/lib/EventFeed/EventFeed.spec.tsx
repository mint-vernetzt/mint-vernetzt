import { render, screen, within } from "@testing-library/react";
import EventFeed, { EventFeedProps } from "./EventFeed";
import { formatDate, getEventFeedItemProps } from "./utils";

test("add event feed items", () => {
  const eventFeedItemProps1 = getEventFeedItemProps();
  const eventFeedItemProps2 = getEventFeedItemProps();
  const eventFeedItemProps3 = getEventFeedItemProps();

  const props = {
    eventFeedItemsProps: [
      eventFeedItemProps1,
      eventFeedItemProps2,
      eventFeedItemProps3,
    ],
  };

  render(<EventFeed {...props} />);

  const eventFeedItemDom = screen.getAllByTestId("event-item");

  // test "headline" rendered
  const eventFeedItem1Dom = eventFeedItemDom[0];
  const headlineDom = within(eventFeedItem1Dom).getByRole("heading");
  expect(headlineDom.textContent).toBe(eventFeedItemProps1.headline);
  const slugDom = within(headlineDom).getByRole("link");
  expect(slugDom.getAttribute("href")).toBe(eventFeedItemProps1.slug);

  // test "body" rendered
  const eventFeedItem2Dom = eventFeedItemDom[1];
  const bodyDom = within(eventFeedItem2Dom).getByTestId("body");
  expect(bodyDom.textContent).toBe(eventFeedItemProps2.body);

  // test "date" rendered
  const eventFeedItem3Dom = eventFeedItemDom[2];
  const dateDom = within(eventFeedItem3Dom).getByTestId("date");
  expect(dateDom.textContent).toBe(formatDate(eventFeedItemProps3.date));
});
