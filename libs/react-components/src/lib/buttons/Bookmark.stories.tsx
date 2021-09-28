import { Story, Meta } from "@storybook/react";
import { Bookmark, BookmarkProps } from "./Bookmark";

export default {
  component: Bookmark,
  title: "Components/Button/Bookmark",
} as Meta;

const Template: Story<BookmarkProps> = (args) => <Bookmark {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
