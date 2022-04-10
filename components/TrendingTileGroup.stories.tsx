import { ComponentMeta, ComponentStory } from "@storybook/react";

import TrendingTileGroup from "./TrendingTileGroup";
import data from "../assets/data.json";

export default {
  title: "Home/TrendingTileGroup",
  component: TrendingTileGroup,
} as ComponentMeta<typeof TrendingTileGroup>;

const Template: ComponentStory<typeof TrendingTileGroup> = (args) => (
  <TrendingTileGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  tiles: data,
};
