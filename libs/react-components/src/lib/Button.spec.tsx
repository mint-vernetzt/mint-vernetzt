import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Button from "./Button";

test("render children", () => {
  const text = "Button";

  const { getByText } = render(<Button>{text}</Button>);

  expect(getByText(text)).toBeTruthy();
});

test("click handler", () => {
  const handler = jest.fn();
  const text = "Button";

  render(<Button onClick={handler}>{text}</Button>);

  const button = screen.getByText(text);
  user.click(button);

  expect(handler).toHaveBeenCalledTimes(1);
});
