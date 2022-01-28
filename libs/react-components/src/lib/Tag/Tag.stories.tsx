import { Story, Meta } from "@storybook/react";
import { Tag, TagProps } from "./Tag";

export default {
  component: Tag,
  title: "Components/Tag",
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Tagname",
  slug: "tagname",
  onTagClick: (slug) => alert(`clicked on slug with name "${slug}"`),
};
