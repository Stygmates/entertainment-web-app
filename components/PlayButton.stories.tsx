import { ComponentMeta, ComponentStory } from "@storybook/react";
import PlayButton from "./PlayButton";

export default {
  title: "Home/Tile/Common/PlayButton",
  component: PlayButton,
} as ComponentMeta<typeof PlayButton>;

const Template: ComponentStory<typeof PlayButton> = (args) => (
  <PlayButton {...args} />
);

export const Bookmarked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Bookmarked.args = {};
