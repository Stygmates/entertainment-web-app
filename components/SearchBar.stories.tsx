import { ComponentMeta } from "@storybook/react";
import SearchBar from "./SearchBar";

export default {
  title: "Home/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

export const Primary = () => {
  return <SearchBar />;
};
