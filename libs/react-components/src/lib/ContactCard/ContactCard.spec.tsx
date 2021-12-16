import { render, screen } from "@testing-library/react";
import faker from "faker";
import ContactCard, { ContactCardProps } from "./ContactCard";

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

test("render props", () => {
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

test("don't render email or phone (optional props)", () => {
  const propsWithoutEmail = { ...props, email: null };

  const { rerender } = render(<ContactCard {...propsWithoutEmail} />);
  const emailDom = screen.queryByTestId("email");
  expect(emailDom).toBeNull();

  const propsWithoutPhone = { ...props, phone: null };

  rerender(<ContactCard {...propsWithoutPhone} />);
  const phoneDom = screen.queryByTestId("phone");
  expect(phoneDom).toBeNull();
});
