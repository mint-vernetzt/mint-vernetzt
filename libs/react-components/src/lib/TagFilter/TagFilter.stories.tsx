import { Story, Meta } from "@storybook/react";
import { TagProps } from "../NewsFeed/NewsFeedItem";
import { TagFilter, TagFilterProps } from "./TagFilter";

export default {
  component: TagFilter,
  title: "Components/TagFilter",
} as Meta;

const Template: Story<TagFilterProps> = (args) => <TagFilter {...args} />;

const tags: TagProps[] = [
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
  tags: tags,
  handleTagClick: (slug) => alert(`clicked tag with slug "${slug}".`),
};
