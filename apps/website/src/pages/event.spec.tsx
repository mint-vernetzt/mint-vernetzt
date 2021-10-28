import { render } from "@testing-library/react";

import Event from "./event";

describe("Event", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Event />);
    expect(baseElement).toBeTruthy();
  });
});
