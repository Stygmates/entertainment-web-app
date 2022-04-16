import { ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import SideBar from "./SideBar";

export default {
  title: "Home/SideBar",
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

export const Primary = () => {
  return (
    <Provider store={store}>
      <SideBar />
    </Provider>
  );
};
