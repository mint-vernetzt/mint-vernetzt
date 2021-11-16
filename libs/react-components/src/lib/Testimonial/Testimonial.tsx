/* eslint-disable-next-line */
import { Icon, IconType } from "@mint-vernetzt/react-components";
import * as React from "react";
export interface TestimonialProps {
  name: string;
  jobTitle: string;
  description: string;
}

export function Testimonial(props: TestimonialProps) {
  const { name, jobTitle, description } = props;
  return (
    <div>
      <div className="flex flex-col p-4 pb-8 pb-15 md:pb-5 bg-gray-50 rounded-sm shadow">
        <div className="w-8 h-8 mb-2">
          <Icon type={IconType.Quote} width="32" height="32" />
        </div>
        <h2 className="text-primary text-3xl" data-testid="name">
          {name}
        </h2>
        <span
          className="neutral-600 block text-sm mb-4 font-semibold"
          data-testid="jobTitle"
        >
          {jobTitle}
        </span>
        <p data-testid="description" className="text-based text-neutral-600">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Testimonial;
