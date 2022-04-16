import { ComponentMeta, ComponentStory } from "@storybook/react";

import RegularTileGroup from "./PureRegularTileGroup";
import data from "../assets/data.json";
import { Provider } from "react-redux";
import { store } from "../app/store";

export default {
  title: "Home/RegularTileGroup",
  component: RegularTileGroup,
  argTypes: {
    activeTab: {
      options: [null, "Home", "Movie", "TV Series", "Bookmarked"],
      control: { type: "radio" },
    },
    searchBarValue: {
      control: "text",
    },
  },
} as ComponentMeta<typeof RegularTileGroup>;
const Template: ComponentStory<typeof RegularTileGroup> = (args) => (
  <Provider store={store}>
    <RegularTileGroup {...args} />
  </Provider>
);

export const Primary = Template.bind({});
Primary.args = {
  tiles: data,
  activeTab: "Home",
};
