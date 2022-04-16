import { ComponentMeta, ComponentStory } from "@storybook/react";

import PureRecommendedTileGroup from "./PureRecommendedTileGroup";
import data from "../assets/data.json";
import { Provider } from "react-redux";
import { store } from "../app/store";

export default {
  title: "Home/RecommendedTileGroup",
  component: PureRecommendedTileGroup,
  argTypes: {
    activeTab: {
      options: [null, "Home", "Movie", "TV Series", "Bookmarked"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof PureRecommendedTileGroup>;
const Template: ComponentStory<typeof PureRecommendedTileGroup> = (args) => (
  <Provider store={store}>
    <PureRecommendedTileGroup {...args} />
  </Provider>
);

export const Primary = Template.bind({});
Primary.args = {
  tiles: data,
  activeTab: "Home",
};
