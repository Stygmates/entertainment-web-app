import { ComponentMeta, ComponentStory } from "@storybook/react";

import PureTrendingTileGroup from "./TrendingTileGroup";
import { Provider } from "react-redux";
import { store } from "../app/store";

export default {
  title: "Home/TrendingTileGroup",
  component: PureTrendingTileGroup,
} as ComponentMeta<typeof PureTrendingTileGroup>;

const Template: ComponentStory<typeof PureTrendingTileGroup> = (args) => (
  <Provider store={store}>
    <PureTrendingTileGroup {...args} />
  </Provider>
);

export const Primary = Template.bind({});
Primary.args = {};
