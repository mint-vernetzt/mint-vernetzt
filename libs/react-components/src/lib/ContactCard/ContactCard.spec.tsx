import { render, screen } from "@testing-library/react";
import faker from "faker";
import ContactCard, { ContactCardProps } from "./ContactCard";

test("render props", () => {
  const props: ContactCardProps = {
    headline: faker.lorem.words(),
    name: faker.name.findName(),
    position: faker.name.jobTitle(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    avatar: {
      src: faker.image.image(),
      alt: faker.lorem.words(),
    },
  };

  render(<ContactCard {...props} />);

  const headlineDom = screen.getByRole("heading");
  expect(headlineDom.textContent).toBe(props.headline);

  const nameDom = screen.getByTestId("name");
  expect(nameDom.innerHTML).toBe(props.name);

  const positionDom = screen.getByTestId("position");
  expect(positionDom.innerHTML).toBe(props.position);

  const phoneDom = screen.getByTestId("phone");
  expect(phoneDom.innerHTML).toBe(props.phone);

  const emailDom = screen.getByTestId("email");
  expect(emailDom.innerHTML).toBe(props.email);

  const avatarDom = screen.getByRole("img");
  expect(avatarDom.getAttribute("src")).toBe(props.avatar.src);
  expect(avatarDom.getAttribute("alt")).toBe(props.avatar.alt);
});
