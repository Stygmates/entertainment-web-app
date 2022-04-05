import { ComponentMeta } from "@storybook/react";

import RecommendedTileGroup from "./RecommendedTileGroup";
import BeyondEarth from "../public/thumbnails/beyond-earth/trending/large.jpg";
import { Tile, TileGroup } from "./Tile";
import data from "../assets/data.json";

export default {
  title: "Home/RecommendedTileGroup",
  component: RecommendedTileGroup,
} as ComponentMeta<typeof RecommendedTileGroup>;

export const Primary = () => {
  let tiles: Tile[] = data;
  let tileGroup: TileGroup = { TileGroup: tiles };
  return <RecommendedTileGroup tilegroup={tileGroup} />;
};
