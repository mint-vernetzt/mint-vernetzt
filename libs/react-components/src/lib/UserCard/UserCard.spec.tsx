import { render, screen } from "@testing-library/react";

import UserCard, { UserCardProps } from "./UserCard";

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

  test("render and find all props", () => {
    const props: UserCardProps = {
      name: "Cute Kitten",
      email: "test@test.test",
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
    render(<UserCard {...props} />);

    const nameDom = screen.getByTestId("name");
    expect(nameDom.innerHTML).toBe(props.name);

    const emailDom = screen.getByTestId("email");
    expect(emailDom.getAttribute("href")).toBe("mailto:" + props.email);

    const positionDom = screen.getByTestId("position");
    expect(positionDom.innerHTML).toBe(props.position);

    const avatarDom = screen.getByTestId("avatar");
    expect(avatarDom.getAttribute("src")).toBe(props.avatar.src);
    expect(avatarDom.getAttribute("alt")).toBe(props.avatar.alt);

    const organizationUrlDom = screen.getByTestId("organizationUrl");
    expect(organizationUrlDom.getAttribute("href")).toBe(props.organizationUrl);

    const organizationLogoDom = screen.getByTestId("organizationLogo");
    expect(organizationLogoDom.getAttribute("src")).toBe(
      props.organizationLogo.src
    );
    expect(organizationLogoDom.getAttribute("alt")).toBe(
      props.organizationLogo.alt
    );
  });

  test("email link not present when email is not applicable", () => {
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

    render(<UserCard {...props} />);

    const emailDom = screen.queryByTestId("email");
    expect(emailDom).toBeNull();
  });
});
