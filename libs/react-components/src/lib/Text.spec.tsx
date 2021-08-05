import { render } from "@testing-library/react";

import Text from "./Text";

describe("Text", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Text>Text</Text>);
    expect(baseElement).toBeTruthy();
  });
});
