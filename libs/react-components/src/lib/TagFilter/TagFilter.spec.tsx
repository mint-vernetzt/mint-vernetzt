import { render } from "@testing-library/react";

import TagFilter from "./TagFilter";

describe("TagFilter", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TagFilter />);
    expect(baseElement).toBeTruthy();
  });
});
