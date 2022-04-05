import { ComponentMeta } from "@storybook/react";
import BeyondEarth from "../public/thumbnails/beyond-earth/trending/large.jpg";
import RecommendedTile from "./RecommendedTile";
import { Tile } from "./Tile";

export default {
  title: "Home/RecommendedTile",
  component: RecommendedTile,
} as ComponentMeta<typeof RecommendedTile>;

export const Primary = () => {
  let tile: Tile = {
    title: "Beyond Earth",
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/beyond-earth/trending/small.jpg",
        large: "./assets/thumbnails/beyond-earth/trending/large.jpg",
      },
      regular: {
        small: "./assets/thumbnails/beyond-earth/regular/small.jpg",
        medium: "./assets/thumbnails/beyond-earth/regular/medium.jpg",
        large: "./assets/thumbnails/beyond-earth/regular/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  };
  return <RecommendedTile tile={tile} />;
};
