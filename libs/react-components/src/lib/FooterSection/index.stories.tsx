import { Meta, Story } from "@storybook/react";
import { FooterSection } from "./FooterSection";

export default {
  component: FooterSection,
  title: "Components/FooterSection",
} as Meta;

export const Component: Story<FooterSectionProps> = (args) => <FooterSection />;
Component.storyName = "component";
