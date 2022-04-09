import { ComponentMeta } from "@storybook/react";

import TrendingTileGroup from "./TrendingTileGroup";
import { Tile } from "./Tile";
import data from "../assets/data.json";

export default {
  title: "Home/TrendingTileGroup",
  component: TrendingTileGroup,
} as ComponentMeta<typeof TrendingTileGroup>;

export const Primary = () => {
  let tiles: Tile[] = data;

  return <TrendingTileGroup tiles={tiles} />;
};
