import * as React from "react";
import { Image } from "../types";

export interface OrganizationBoxProps {
  name: string;
  description: string;
  organizationUrl: string;
  organizationLogo: Image;
}

export function OrganizationBox({
  name,
  description,
  organizationUrl,
  organizationLogo,
}: OrganizationBoxProps) {
  return (
    <div className="flex flex-col p-4 pb-15 md:pb-5 bg-gray-50 rounded-lg shadow h-full">
      <a href={organizationUrl} data-testid="organizationUrl">
        <img
          data-testid="organizationLogo"
          className="max-h-16 mb-6"
          src={organizationLogo.src}
          alt={organizationLogo.alt}
        />
      </a>
      <p data-testid="description" className="text-based text-neutral-700">
        {description}
      </p>
    </div>
  );
}

export default OrganizationBox;
