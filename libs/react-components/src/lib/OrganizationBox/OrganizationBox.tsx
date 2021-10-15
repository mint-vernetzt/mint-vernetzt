export interface Image {
  src: string;
  alt: string;
}

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
      <img
        data-testid="logo"
        className="mb-6"
        src={organizationLogo.src}
        alt={organizationLogo.alt}
      />
      <p data-testid="description" className="text-based text-neutral-700">
        {description}
      </p>
    </div>
  );
}

export default OrganizationBox;
