import { Story, Meta } from "@storybook/react";
import { ChipFilter, ChipFilterProps } from "@mint-vernetzt/react-components";
import { ChipProps } from "@mint-vernetzt/react-components";

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
