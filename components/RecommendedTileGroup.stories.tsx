import { ComponentMeta } from "@storybook/react";

import RecommendedTileGroup from "./RecommendedTileGroup";
import { Tile } from "./Tile";
import data from "../assets/data.json";

export default {
  title: "Home/RecommendedTileGroup",
  component: RecommendedTileGroup,
} as ComponentMeta<typeof RecommendedTileGroup>;

export const Primary = () => {
  let tiles: Tile[] = data;
  return <RecommendedTileGroup tiles={tiles} />;
};
