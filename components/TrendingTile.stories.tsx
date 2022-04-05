import { ComponentMeta } from "@storybook/react";

import TrendingTile from "./TrendingTile";
import BeyondEarth from "../public/thumbnails/beyond-earth/trending/large.jpg";
import { Tile } from "./Tile";

export default {
  title: "Home/TrendingTile",
  component: TrendingTile,
} as ComponentMeta<typeof TrendingTile>;

export const Primary = () => {
  let tile: Tile = {
    title: "Bottom Gear",
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/bottom-gear/trending/small.jpg",
        large: "./assets/thumbnails/bottom-gear/trending/large.jpg",
      },
      regular: {
        small: "./assets/thumbnails/bottom-gear/regular/small.jpg",
        medium: "./assets/thumbnails/bottom-gear/regular/medium.jpg",
        large: "./assets/thumbnails/bottom-gear/regular/large.jpg",
      },
    },
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  };
  return <TrendingTile tile={tile} />;
};
