import { render } from "@testing-library/react";

import UserCard, { UserCardProps } from "./UserCard";

// #TODO: write tests (test props are rendered correctly)

describe("UserCard", () => {
  it("should render successfully", () => {
    // simple props to prevent test failing
    const props: UserCardProps = {
      name: "Cute Kitten",
      position: "Cuteness Officer",
      avatar: {
        src: "https://placekitten.com/200/150",
        alt: "Cute Kitten Pic",
      },
      organizationUrl: "https://placekitten.com",
      organizationLogo: {
        src: "https://placekitten.com/400/300",
        alt: "Cute Kitten Corp.",
      },
    };
    const { baseElement } = render(<UserCard {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
