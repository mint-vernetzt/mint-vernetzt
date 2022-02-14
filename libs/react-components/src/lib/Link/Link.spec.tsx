import { render, screen, within } from "@testing-library/react";

import Link from "./Link";

test("render link with text", () => {
  const route = "/home";
  const text = "Home";

  render(<Link to={route}>{text}</Link>);

  const linkDom = screen.getByRole("link");

  expect(linkDom.getAttribute("href")).toBe(route);
  expect(linkDom.innerHTML).toBe(text);
});

test("render external link", () => {
  render(
    <Link to="https://external.site" isExternal>
      External
    </Link>
  );

  const linkDom = screen.getByRole("link");
  expect(linkDom.getAttribute("rel")).toBe("noopener noreferrer");
  expect(linkDom.getAttribute("target")).toBe("_blank");
});

test("wrap children inside link", () => {
  const text = "Headline";

  render(
    <Link to="/whatever">
      <h1>{text}</h1>
    </Link>
  );

  const linkDom = screen.getByRole("link");
  const headlineDom = within(linkDom).getByRole("heading");
  expect(headlineDom.innerHTML).toBe(text);
});

test("use passed component as link", () => {
  const testId = "component";
  const route = "/home";
  const text = "Home";

  const Component = (props: any) => {
    return <span data-testid={testId} {...props} />;
  };

  render(
    <Link as={Component} to={route}>
      {text}
    </Link>
  );

  const linkDom = screen.getByTestId(testId);
  expect(linkDom.getAttribute("to")).toBe(route);
  expect(linkDom.innerHTML).toBe(text);
});
