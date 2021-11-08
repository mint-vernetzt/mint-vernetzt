import { Story, Meta } from "@storybook/react";
import { ContactCard, ContactCardProps } from "./ContactCard";

export default {
  component: ContactCard,
  title: "ContactCard",
} as Meta;

const Template: Story<ContactCardProps> = (args) => <ContactCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
