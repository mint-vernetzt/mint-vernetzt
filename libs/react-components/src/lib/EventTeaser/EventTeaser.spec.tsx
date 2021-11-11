import { render } from "@testing-library/react";

import EventTeaser from "./EventTeaser";

describe("EventTeaser", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <EventTeaser headline="The Headline" items={[]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
