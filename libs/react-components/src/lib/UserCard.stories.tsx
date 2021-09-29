import { Story, Meta } from "@storybook/react";
import { UserCard, UserCardProps } from "./UserCard";

export default {
  component: UserCard,
  title: "Components/UserCard",
} as Meta;

const Template: Story<UserCardProps> = (args) => <UserCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Cute Kitten",
  position: "Cuteness Officer",
  avatar: {
    src: "https://placekitten.com/200/150",
    alt: "Cute Kitten Pic",
  },
  organizationUrl: "https://placekitten.com",
  organizationLogo: {
    src: "https://placekitten.com/400/300",
    alt: "Cute Kitten Corp.",
  },
};
