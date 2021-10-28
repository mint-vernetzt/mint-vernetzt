import { Meta, Story } from "@storybook/react";
import { NavigationBar } from "./NavigationBar";

export default {
  component: NavigationBar,
  title: "Components/NavigationBar",
} as Meta;

export const Component: Story<NavigationBarProps> = (args) => <NavigationBar />;
Component.storyName = "component";
