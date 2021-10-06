import { render } from "@testing-library/react";

import NewsFeedItem from "./NewsFeedItem";

describe("NewsFeedItem", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<NewsFeedItem />);
    expect(baseElement).toBeTruthy();
  });
});
