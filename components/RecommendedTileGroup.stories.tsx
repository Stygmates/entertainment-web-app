import { ComponentMeta, ComponentStory } from "@storybook/react";

import RecommendedTileGroup from "./RecommendedTileGroup";
import data from "../assets/data.json";

export default {
  title: "Home/RecommendedTileGroup",
  component: RecommendedTileGroup,
} as ComponentMeta<typeof RecommendedTileGroup>;
const Template: ComponentStory<typeof RecommendedTileGroup> = (args) => (
  <RecommendedTileGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  tiles: data,
};
