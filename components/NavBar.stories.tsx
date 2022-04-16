import { ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import NavBar from "./NavBar";

export default {
  title: "Home/NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

export const Primary = () => {
  return (
    <Provider store={store}>
      <NavBar />
    </Provider>
  );
};
