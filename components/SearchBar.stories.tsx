import { ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import SearchBar from "./SearchBar";

export default {
  title: "Home/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

export const Primary = () => {
  return <Provider store={store}><SearchBar /></Provider>;
};
