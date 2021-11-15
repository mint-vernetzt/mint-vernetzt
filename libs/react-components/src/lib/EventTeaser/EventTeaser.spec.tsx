import { render, screen, within } from "@testing-library/react";
import faker from "faker";

import EventTeaser, { EventTeaserProps } from "./EventTeaser";

describe("EventTeaser", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <EventTeaser headline="The Headline" items={[]} linkToOverview="/" />
    );
    expect(baseElement).toBeTruthy();
  });

  it("should render all props", () => {
    const props: EventTeaserProps = {
      headline: "MINTevents",
      linkToOverview: "https://linktooverview/",
      items: Array(5)
        .fill(null)
        .map((item, index) => ({
          headline: faker.lorem.words(),
          body: faker.lorem.paragraph(),
          date: faker.date.future(),
          url: `https://some-url-${index}.test/`,
        })),
    };

    render(<EventTeaser {...props} />);

    // HEADLINE
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading.textContent).toBe(props.headline);

    // LINK TO OVERVIEW
    expect(within(heading).getByRole("link").getAttribute("href")).toBe(
      props.linkToOverview
    );

    // NUMBER OF ITEMS
    const domListItems = screen.getAllByRole("listitem");
    expect(domListItems.length).toBe(props.items.length);

    // ITEM HEADLINE
    expect(within(domListItems[0]).getByRole("heading").textContent).toBe(
      props.items[0].headline
    );

    // ITEM HEADLINE LINK
    expect(within(domListItems[1]).getByRole("link").getAttribute("href")).toBe(
      props.items[1].url
    );

    // WIP
  });
});
