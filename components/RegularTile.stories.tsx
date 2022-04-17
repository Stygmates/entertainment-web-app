import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import BeyondEarth from "../public/thumbnails/beyond-earth/trending/large.jpg";
import RegularTile from "./RegularTile";
import { Tile } from "./Tile";

export default {
  title: "Home/RegularTile",
  component: RegularTile,
} as ComponentMeta<typeof RegularTile>;

const Template: ComponentStory<typeof RegularTile> = (args) => (
  <Provider store={store}>
    <RegularTile {...args} />
  </Provider>
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
