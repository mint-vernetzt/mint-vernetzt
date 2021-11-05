import { Image } from "@mint-vernetzt/react-components";

export interface OrganizationBoxProps {
  name: string;
  description: string;
  organizationUrl: string;
  organizationLogo: Image;
}

export function OrganizationBox(props: OrganizationBoxProps) {
  const { name, description, organizationUrl, organizationLogo } = props;
  return (
    <div className="flex flex-col p-4 pb-15 md:pb-5 bg-gray-50 rounded-lg shadow-lg h-full">
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
