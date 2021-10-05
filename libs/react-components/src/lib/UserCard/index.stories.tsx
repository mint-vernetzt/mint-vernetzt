import { Meta, Story } from "@storybook/react";
import faker from "faker";
import { UserCard, UserCardProps } from "./UserCard";
import { UserCardContainer, UserCardContainerProps } from "./UserCardContainer";
import { getUserCardProps } from "./utils";

export default {
  title: "Components/UserCard",
} as Meta;

export const Component: Story<UserCardProps> = (args) => <UserCard {...args} />;
Component.storyName = "component";
Component.args = getUserCardProps();

export const Container: Story<UserCardContainerProps> = (args) => (
  <UserCardContainer {...args} />
);
Container.args = {
  headline: faker.lorem.words(),
  body: faker.lorem.paragraph(),
  userCardsProps: new Array(7).fill(null).map(() => {
    return getUserCardProps();
  }),
};

Container.storyName = "container";
