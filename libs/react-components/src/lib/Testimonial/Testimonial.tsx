/* eslint-disable-next-line */
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
      <div className="flex flex-col p-4 pb-15 md:pb-5 bg-gray-50 rounded-lg shadow-lg h-full">
        <div className="bg-red-700" style={{ height: 32, width: 32 }} />
        <h2 className="text-primary normal-case text-xl" data-testid="name">
          {name}
        </h2>
        <span className="neutral-600 block" data-testid="jobTitle">
          {jobTitle}
        </span>
        <p data-testid="description" className="text-based text-neutral-700">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Testimonial;
