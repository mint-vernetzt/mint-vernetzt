import { render, screen, within } from "@testing-library/react";
import faker from "faker";
import EventNavigation, { EventNavigationProps } from "./EventNavigation";

describe("Event Navigation", () => {
  it("should render successfully", () => {
    const items = Array(5)
      .fill(null)
      .map((item) => ({
        headline: faker.lorem.words(),
        date: faker.date.future(),
        url: faker.internet.url(),
      }));
    const { baseElement } = render(<EventNavigation items={items} />);
    expect(baseElement).toBeTruthy();
  });

  it("should render all props", () => {
    const items = [
      {
        headline: "headline 1",
        date: new Date("2021-11-11"),
        url: "https://someurl.test/",
      },
      {
        headline: "headline 2",
        date: new Date("2021-12-12"),
        url: "https://anotherurl.test/",
      },
    ];

    render(<EventNavigation items={items} />);

    // expect two items
    const navigationItems = screen.getAllByRole("listitem");
    expect(navigationItems.length).toBe(2);

    // expect headline
    const firstHeading = within(navigationItems[0]).queryByRole("heading");
    expect(firstHeading?.textContent).toBe(items[0].headline);

    // expect formatted date
    expect(within(navigationItems[1]).queryByTestId("date")?.textContent).toBe(
      "12. Dezember 2021"
    );

    // expect link
    expect(
      within(firstHeading as HTMLElement)
        .getByRole("link")
        .getAttribute("href")
    ).toBe("https://someurl.test/");
  });

  it("should highlight active url", () => {
    const items = [
      {
        headline: "headline 1",
        date: new Date("2021-11-11"),
        url: "https://someurl.test/",
      },
      {
        headline: "headline 2",
        date: new Date("2021-12-12"),
        url: "https://anotherurl.test/",
      },
    ];

    const currentUrl = "https://anotherurl.test/";
    const { container } = render(
      <EventNavigation items={items} currentUrl={currentUrl} />
    );
    const activeItems = container.getElementsByClassName("active");

    // only one is active
    expect(activeItems.length).toBe(1);

    // active item should contain link with current url
    expect(
      within(activeItems[0] as HTMLElement)
        .getByRole("link")
        .getAttribute("href")
    ).toBe(currentUrl);
  });

  it("should use linkWrapper", () => {
    const items = [
      {
        headline: "headline",
        date: new Date("2021-11-11"),
        url: "https://someurl.test/",
      },
    ];

    const linkWrapper = (url: string, children: React.ReactChild) => {
      return (
        <a href={url} className="wrapped">
          AUGMENTED {children}
        </a>
      );
    };

    render(<EventNavigation items={items} linkWrapper={linkWrapper} />);

    const navigationItems = screen.getAllByRole("listitem");

    const firstLink = within(navigationItems[0]).queryByRole("link");
    expect(firstLink?.getAttribute("class")).toBe("wrapped");

    expect(firstLink?.textContent).toBe("AUGMENTED headline");
  });
});
