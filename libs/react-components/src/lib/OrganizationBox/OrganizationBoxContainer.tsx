import * as React from "react";
import { OrganizationBox, OrganizationBoxProps } from "./OrganizationBox";

export interface OrganizationBoxContainerProps {
  headline: string;
  body: string;
  organisations?: OrganizationBoxProps[];
}

export function OrganizationBoxContainer({
  headline,
  body,
  organisations = [],
}: OrganizationBoxContainerProps) {
  return (
    <section>
      <header className="md:px-16 lg:px-48">
        <h2>{headline}</h2>
        <p data-testid="body" className="lead">
          {body}
        </p>
      </header>

      <div
        data-testid="grid"
        className="flex flex-row flex-wrap justify-center lg:mx-3 items-stretch"
      >
        {organisations.map((useBoxProps, index) => (
          <div
            key={`organization-box-container-item-${index}`}
            data-testid="gridcell"
            className="flex-100 md:flex-1/2 px-2 lg:px-3 mb-6"
          >
            <OrganizationBox {...useBoxProps} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OrganizationBoxContainer;
