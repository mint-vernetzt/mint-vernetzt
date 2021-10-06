import { render } from "@testing-library/react";

import NewsFeed from "./NewsFeed";

describe("NewsFeed", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<NewsFeed />);
    expect(baseElement).toBeTruthy();
  });
});
