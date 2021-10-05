import faker from "faker";

export function getUserCardProps() {
  const name = faker.name.findName();
  const position = faker.name.jobTitle();
  const avatar = {
    src: faker.image.avatar(),
    alt: name,
  };
  const organizationUrl = faker.internet.url();
  const organizationLogo = {
    src: faker.image.business(),
    alt: faker.company.companyName(),
  };

  return {
    name,
    position,
    avatar,
    organizationUrl,
    organizationLogo,
  };
}
