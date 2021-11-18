import { render } from "@testing-library/react";

import Pakt from "./pakt";

describe("Pakt", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Pakt />);
    expect(baseElement).toBeTruthy();
  });
});
