import { ComponentMeta, ComponentStory } from "@storybook/react";
import TrendingTile from "./TrendingTile";

export default {
  title: "Home/TrendingTile",
  component: TrendingTile,
} as ComponentMeta<typeof TrendingTile>;

const Template: ComponentStory<typeof TrendingTile> = (args) => (
  <TrendingTile {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  tile: {
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
  },
};
