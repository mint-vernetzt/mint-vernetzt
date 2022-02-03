import { render, screen, within } from "@testing-library/react";
import faker from "faker";
import UserCardContainer, { UserCardContainerProps } from "./UserCardContainer";
import { getUserCardProps } from "./utils";

const headline = faker.lorem.words();
const body = faker.lorem.paragraph();

test("render headline and body", () => {
  const props: UserCardContainerProps = {
    headline: <h1>{headline}</h1>,
    body,
  };

  render(<UserCardContainer {...props} />);

  const headlineDom = screen.getByRole("heading");
  expect(headlineDom.textContent).toBe(headline);

  const bodyDom = screen.getByTestId("body");
  expect(bodyDom.textContent).toBe(body);
});

test("add user cards", () => {
  const userCard1 = getUserCardProps();
  const userCard2 = getUserCardProps();
  const userCard3 = getUserCardProps();
  const userCard4 = getUserCardProps();
  const userCard5 = getUserCardProps();

  const props = {
    headline,
    body,
    userCardsProps: [userCard1, userCard2, userCard3, userCard4, userCard5],
  };

  render(<UserCardContainer {...props} />);

  const userCardsDom = screen.getAllByTestId("gridcell");

  // test "name" rendered
  const userCard1Dom = userCardsDom[0];
  const nameDom = within(userCard1Dom).getByTestId("name");
  expect(nameDom.textContent).toBe(userCard1.name);

  // test "position" rendered
  const userCard2Dom = userCardsDom[1];
  const positionDom = within(userCard2Dom).getByTestId("position");
  expect(positionDom.textContent).toBe(userCard2.position);

  // test "avatar" rendered
  const userCard3Dom = userCardsDom[2];
  const avatarDom = within(userCard3Dom).getByTestId("avatar");
  expect(avatarDom.getAttribute("src")).toBe(userCard3.avatar.src);
  expect(avatarDom.getAttribute("alt")).toBe(userCard3.avatar.alt);

  // test "organizationUrl" rendered
  const userCard4Dom = userCardsDom[3];
  const organizationUrlDom =
    within(userCard4Dom).getByTestId("organizationUrl");
  expect(organizationUrlDom.getAttribute("href")).toBe(
    userCard4.organizationUrl
  );

  // test "organizationLogo" rendered
  const userCard5Dom = userCardsDom[4];
  const organizationLogoDom =
    within(userCard5Dom).getByTestId("organizationLogo");
  expect(organizationLogoDom.getAttribute("src")).toBe(
    userCard5.organizationLogo.src
  );
  expect(organizationLogoDom.getAttribute("alt")).toBe(
    userCard5.organizationLogo.alt
  );
});

test("handle different amount of user cards", () => {
  // .fill is necessary, because new Array(3) only creates an array with undefined pointer
  // .map skips undefined pointer in arrays
  // see: https://stackoverflow.com/a/5501720
  const userCardsProps = new Array(3).fill(null).map(() => {
    return getUserCardProps();
  });

  const { rerender } = render(
    <UserCardContainer {...{ headline, body, userCardsProps }} />
  );

  const userCardsDom = screen.getAllByTestId("gridcell");
  expect(userCardsDom.length).toBe(userCardsProps.length);

  const moreUserCardsProps = new Array(5).fill(null).map(() => {
    return getUserCardProps();
  });

  rerender(
    <UserCardContainer
      {...{
        headline,
        body,
        userCardsProps: userCardsProps.concat(moreUserCardsProps),
      }}
    />
  );

  const moreUserCardsDom = screen.getAllByTestId("gridcell");
  expect(moreUserCardsDom.length).toBe(
    userCardsProps.length + moreUserCardsProps.length
  );
});
