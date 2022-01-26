import { render } from "@testing-library/react";

import PrivacyPolicy from "./privacy-policy";

describe("PrivacyPolicy", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PrivacyPolicy />);
    expect(baseElement).toBeTruthy();
  });
});
