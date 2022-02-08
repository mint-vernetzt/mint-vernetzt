import { fireEvent, render, screen } from "@testing-library/react";
import { ChipProps } from "../Chip/Chip";

import ChipFilter from "./ChipFilter";

describe("TagFilter", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ChipFilter chips={[]} />);
    expect(baseElement).toBeTruthy();
  });

  it("should display all three chips selectable if no tag was selected", () => {
    var tags: ChipProps[] = [
      { title: "Chip 1", slug: "chip-1" },
      { title: "Chip 2", slug: "chip-2" },
      { title: "Chip 3", slug: "chip-3" },
    ];

    let clickHandler = jest.fn();

    const { container } = render(
      <ChipFilter chips={tags} possibleTags={tags} onChipClick={clickHandler} />
    );

    expect(container.getElementsByClassName("is-selectable").length).toBe(3);
  });

  it("should display two of three chips enabled", () => {
    var tags: ChipProps[] = [
      { title: "Chip 1", slug: "chip-1" },
      { title: "Chip 2", slug: "chip-2" },
      { title: "Chip 3", slug: "chip-3" },
    ];

    let clickHandler = jest.fn();

    const { container } = render(
      <ChipFilter
        chips={tags}
        selectedChips={tags.slice(0, 2)}
        possibleTags={tags}
        onChipClick={clickHandler}
      />
    );

    expect(container.getElementsByClassName("is-enabled").length).toBe(2);
    expect(container.getElementsByClassName("is-selectable").length).toBe(1);
  });

  it("should display no chips selectable if all are enabled", () => {
    var tags: ChipProps[] = [
      { title: "Chip 1", slug: "chip-1" },
      { title: "Chip 2", slug: "chip-2" },
      { title: "Chip 3", slug: "chip-3" },
    ];

    const { container } = render(
      <ChipFilter chips={tags} selectedChips={tags} />
    );

    expect(container.getElementsByClassName("is-selectable").length).toBe(0);
    expect(container.getElementsByClassName("is-enabled").length).toBe(3);
  });

  it("should display tags in alphabetical order", () => {
    var tags: ChipProps[] = [
      { title: "Chip Z", slug: "chip-z" },
      { title: "Chip A", slug: "chip-a" },
    ];

    let clickHandler = jest.fn();

    const { container } = render(
      <ChipFilter chips={tags} possibleTags={tags} onChipClick={clickHandler} />
    );

    expect(
      container.getElementsByClassName("is-selectable")[0].textContent
    ).toBe("Chip A");

    expect(
      container.getElementsByClassName("is-selectable")[1].textContent
    ).toBe("Chip Z");
  });

  it("should display a tag with cursor as arrow if handler is NOT applicable", () => {
    var tags: ChipProps[] = [{ title: "Chip Z", slug: "chip-z" }];

    const { container } = render(<ChipFilter chips={tags} />);

    expect(container.getElementsByClassName("cursor-pointer").length).toBe(0);
  });

  it("should display a tag with cursor as pointer if handler is applicable", () => {
    var tags: ChipProps[] = [{ title: "Chip Z", slug: "chip-z" }];

    const { container } = render(
      <ChipFilter chips={tags} possibleTags={tags} onChipClick={jest.fn} />
    );

    expect(container.getElementsByClassName("cursor-pointer").length).toBe(1);
  });

  it("should call the clickHandler once with respective slug", () => {
    var tags: ChipProps[] = [{ title: "Chip Z", slug: "chip-z" }];
    let clickHandler = jest.fn();
    const { baseElement } = render(
      <ChipFilter chips={tags} possibleTags={tags} onChipClick={clickHandler} />
    );

    let chip = screen.getByText("Chip Z");
    fireEvent.click(chip);

    expect(clickHandler).toBeCalledTimes(1);
    expect(clickHandler).toBeCalledWith("chip-z");
  });

  it("should display not clickable tags that are not applicable", () => {
    var tags: ChipProps[] = [
      { title: "Chip A", slug: "chip-a" },
      { title: "Chip B", slug: "chip-b" },
      { title: "Chip C", slug: "chip-c" },
    ];

    var selectedTags: ChipProps[] = [tags[0]];

    var possibleTags: ChipProps[] = [tags[1]];

    let clickHandler = jest.fn();
    render(
      <ChipFilter
        chips={tags}
        selectedChips={selectedTags}
        possibleTags={possibleTags}
        onChipClick={clickHandler}
      />
    );

    let chip = screen.getByText("Chip C");
    fireEvent.click(chip);

    expect(clickHandler).toBeCalledTimes(0);
    expect(chip.classList.contains("is-disabled")).toBeTruthy();
  });
});
