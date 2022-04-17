import { ComponentMeta, ComponentStory } from "@storybook/react";

import TrendingTileGroup from "./TrendingTileGroup";
import { Provider } from "react-redux";
import { store } from "../app/store";

export default {
  title: "Home/TrendingTileGroup",
  component: TrendingTileGroup,
} as ComponentMeta<typeof TrendingTileGroup>;

const Template: ComponentStory<typeof TrendingTileGroup> = (args) => (
  <Provider store={store}>
    <TrendingTileGroup {...args} />
  </Provider>
);

export const Primary = Template.bind({});
Primary.args = {};
