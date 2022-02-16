import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import Button from "./Button";

test("render children", () => {
  const text = "button";

  render(<Button>{text}</Button>);

  const buttonDom = screen.getByRole("button");
  expect(buttonDom.innerHTML).toBe(text);
});

test("use type submit", () => {
  render(<Button submit>Submit</Button>);

  const buttonDom = screen.getByRole("button");
  expect(buttonDom.getAttribute("type")).toBe("submit");
});

test("fire passed click handler", () => {
  const handler = jest.fn();

  render(<Button onClick={handler}>Click me</Button>);

  const buttonDom = screen.getByRole("button");
  user.click(buttonDom);

  expect(handler).toHaveBeenCalledTimes(1);
});

test("disable button", () => {
  const handler = jest.fn();

  render(
    <Button onClick={handler} disabled>
      Click me
    </Button>
  );

  const buttonDom = screen.getByRole("button");
  user.click(buttonDom);

  expect(handler).not.toHaveBeenCalled();
});
