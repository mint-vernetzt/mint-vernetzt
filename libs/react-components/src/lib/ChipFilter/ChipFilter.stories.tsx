import { Story, Meta } from "@storybook/react";
import { ChipFilter, ChipFilterProps } from "./ChipFilter";
import { ChipProps } from "../Chip/Chip";

export default {
  component: ChipFilter,
  title: "Components/TagFilter",
} as Meta;

const Template: Story<ChipFilterProps> = (args) => <ChipFilter {...args} />;

const chips: ChipProps[] = [
  {
    title: "Tag A",
    slug: "tag-a",
  },
  {
    title: "Tag B",
    slug: "tag-b",
  },
];

export const Primary = Template.bind({});
Primary.args = {
  chips,
  onChipClick: (slug) => alert(`clicked tag with slug "${slug}".`),
};
