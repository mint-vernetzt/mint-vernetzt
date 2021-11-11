import { render } from "@testing-library/react";

import EventTeaserItem from "./EventTeaserItem";

describe("EventTeaserItem", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <EventTeaserItem
        headline="The Headline"
        body="The Body"
        date={new Date()}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
