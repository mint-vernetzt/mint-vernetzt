import { render, screen } from "@testing-library/react";

import Heading from "./Heading";

test("render heading of different levels", () => {
  render(<Heading.H1>Hello Heading</Heading.H1>);
  const heading1DOM = screen.getByRole("heading", { level: 1 });
  expect(heading1DOM).toBeTruthy();

  render(<Heading.H2>Hello Heading</Heading.H2>);
  const heading2DOM = screen.getByRole("heading", { level: 2 });
  expect(heading2DOM).toBeTruthy();

  render(<Heading.H3>Hello Heading</Heading.H3>);
  const heading3DOM = screen.getByRole("heading", { level: 3 });
  expect(heading3DOM).toBeTruthy();

  render(<Heading.H4>Hello Heading</Heading.H4>);
  const heading4DOM = screen.getByRole("heading", { level: 4 });
  expect(heading4DOM).toBeTruthy();

  render(<Heading.H5>Hello Heading</Heading.H5>);
  const heading5DOM = screen.getByRole("heading", { level: 5 });
  expect(heading5DOM).toBeTruthy();

  render(<Heading.H6>Hello Heading</Heading.H6>);
  const heading6DOM = screen.getByRole("heading", { level: 6 });
  expect(heading6DOM).toBeTruthy();
});

test("render heading content", () => {
  const content = "Heading Content";

  render(<Heading.H1>{content}</Heading.H1>);
  const headingDOM = screen.getByText(content);
  expect(headingDOM).toBeTruthy();
});

test("render heading with different style", () => {
  render(<Heading.H1 as="h2">Hello Heading</Heading.H1>);
  const heading1DOM = screen.getByRole("heading", { level: 2 });
  expect(heading1DOM).toBeTruthy();
  render(<Heading.H2 as="h3">Hello Heading</Heading.H2>);
  const heading2DOM = screen.getByRole("heading", { level: 3 });
  expect(heading2DOM).toBeTruthy();
  render(<Heading.H3 as="h4">Hello Heading</Heading.H3>);
  const heading3DOM = screen.getByRole("heading", { level: 4 });
  expect(heading3DOM).toBeTruthy();
  render(<Heading.H4 as="h5">Hello Heading</Heading.H4>);
  const heading4DOM = screen.getByRole("heading", { level: 5 });
  expect(heading4DOM).toBeTruthy();
  render(<Heading.H5 as="h6">Hello Heading</Heading.H5>);
  const heading5DOM = screen.getByRole("heading", { level: 6 });
  expect(heading5DOM).toBeTruthy();
  render(<Heading.H6 as="h1">Hello Heading</Heading.H6>);
  const heading6DOM = screen.getByRole("heading", { level: 1 });
  expect(heading6DOM).toBeTruthy();
});
