import { Story, Meta } from "@storybook/react";
import { ContactCard, ContactCardProps } from "./ContactCard";
import faker from "faker";

export default {
  component: ContactCard,
  title: "Components/ContactCard",
} as Meta;

const Template: Story<ContactCardProps> = (args) => <ContactCard {...args} />;

export const Component = Template.bind({});
Component.args = {
  headline: faker.lorem.words(),
  name: faker.name.findName(),
  position: faker.name.jobTitle(),
  phone: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  avatar: {
    src: faker.image.image(),
    alt: faker.lorem.words(),
  },
};

Component.storyName = "component";
