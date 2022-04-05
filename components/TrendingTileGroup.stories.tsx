import { ComponentMeta } from "@storybook/react";

import TrendingTileGroup from "./TrendingTileGroup";
import BeyondEarth from "../public/thumbnails/beyond-earth/trending/large.jpg";
import { Tile, TileGroup } from "./Tile";
import data from "../assets/data.json";

export default {
  title: "Home/TrendingTileGroup",
  component: TrendingTileGroup,
} as ComponentMeta<typeof TrendingTileGroup>;

export const Primary = () => {
  let tiles: Tile[] = data;

  let tileGroup: TileGroup = { TileGroup: tiles };
  return <TrendingTileGroup tilegroup={tileGroup} />;
};
