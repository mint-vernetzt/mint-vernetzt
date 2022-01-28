import { render } from "@testing-library/react";

import Tag from "./Tag";

describe("Tag", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Tag title="Tagtitle" slug="slug" />);
    expect(baseElement).toBeTruthy();

    // TODO
    /**
     * - check props
     * - check clickhandler
     * -- is called when tag is clicked
     * -- recreives slug
     * - check if cursor pointer is set when clickhandler present
     */
  });
});
