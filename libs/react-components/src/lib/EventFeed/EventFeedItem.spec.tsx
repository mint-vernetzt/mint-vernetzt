import { render } from "@testing-library/react";

import EventFeedItem from "./EventFeedItem";

describe("EventFeedItem", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<EventFeedItem />);
    expect(baseElement).toBeTruthy();
  });
});
