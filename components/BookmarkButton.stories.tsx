import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookmarkButton from "./BookmarkButton";

export default {
  title: "Home/Tile/Common/BookmarkButton",
  component: BookmarkButton,
} as ComponentMeta<typeof BookmarkButton>;

const Template: ComponentStory<typeof BookmarkButton> = (args) => (
  <BookmarkButton {...args} />
);

export const Bookmarked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Bookmarked.args = {
  bookmarked: true,
};

export const NotBookmarked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NotBookmarked.args = {
  bookmarked: false,
};
