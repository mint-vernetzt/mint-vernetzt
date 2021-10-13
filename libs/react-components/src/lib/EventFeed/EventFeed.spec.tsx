import { render } from "@testing-library/react";

import EventFeed from "./EventFeed";

describe("EventFeed", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<EventFeed />);
    expect(baseElement).toBeTruthy();
  });
});
