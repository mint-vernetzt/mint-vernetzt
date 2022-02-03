import { render, screen } from "@testing-library/react";
import Testimonial from "./Testimonial";

describe("Testimonial", () => {
  it("should render props", () => {
    const CITE_NAME = "Kim Doe";
    const CITE_TITLE = "Job Title";
    const CITE_description =
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";

    render(
      <Testimonial
        name={CITE_NAME}
        jobTitle={CITE_TITLE}
        description={CITE_description}
      />
    );

    expect(screen.getByRole("heading").textContent).toBe(CITE_NAME);
    expect(screen.getByTestId("jobTitle").textContent).toBe(CITE_TITLE);
    expect(screen.getByTestId("description").textContent).toBe(
      CITE_description
    );
  });
});
