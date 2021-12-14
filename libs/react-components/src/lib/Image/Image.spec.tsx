import { render, screen, within } from "@testing-library/react";

import Image from "./Image";

const imageUrl = "some/image.jpg";
const imageAlt = "some alt";
const imageCaption = "some caption to describe image";
test("render image", () => {
  render(<Image src={imageUrl} />);

  const imageDom = screen.getByRole("img");
  expect(imageDom.getAttribute("src")).toBe(imageUrl);
  expect(imageDom.getAttribute("alt")).toBe("");
});

test("set alt attribute", () => {
  render(<Image src={imageUrl} alt={imageAlt} />);

  const imageDom = screen.getByAltText(imageAlt);
  expect(imageDom.getAttribute("src")).toBe(imageUrl);
});

test("render caption in figure", () => {
  expect.assertions(3);

  render(<Image src={imageUrl} caption={imageCaption} />);

  const figureDom = screen.getByRole("figure");

  const imageDom = within(figureDom).getByRole("img");
  expect(imageDom.getAttribute("src")).toBe(imageUrl);
  expect(imageDom.getAttribute("alt")).toBe("");

  const captionDom = figureDom.querySelector("figcaption");
  if (captionDom !== null) {
    expect(captionDom.innerHTML).toBe(imageCaption);
  }
});
