import { Meta, Story } from "@storybook/react";
import { OrganizationBox, OrganizationBoxProps } from "./OrganizationBox";
import {
  OrganizationBoxContainer,
  OrganizationBoxContainerProps,
} from "./OrganizationBoxContainer";
import { getOrganizationBoxProps } from "./utils";

export default {
  component: OrganizationBox,
  title: "Components/OrganizationBox",
} as Meta;

export const Component: Story<OrganizationBoxProps> = (args) => (
  <OrganizationBox {...args} />
);
Component.storyName = "component";
Component.args = getOrganizationBoxProps();

export const Container: Story<OrganizationBoxContainerProps> = (args) => (
  <OrganizationBoxContainer {...args} />
);
Container.args = {
  headline: "The Headline",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, laudantium!",
  organisations: new Array(7).fill(null).map(() => {
    return getOrganizationBoxProps();
  }),
};

Container.storyName = "container";
