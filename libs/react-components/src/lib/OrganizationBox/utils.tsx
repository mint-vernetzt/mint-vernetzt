import faker from "faker";

export function getOrganizationBoxProps() {
  const name = faker.name.findName();
  const description = faker.lorem.sentence();
  const organizationUrl = faker.internet.url();
  const organizationLogo = {
    src: faker.image.business(),
    alt: faker.company.companyName(),
  };

  return {
    name,
    description,
    organizationUrl,
    organizationLogo,
  };
}
