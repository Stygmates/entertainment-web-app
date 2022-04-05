import { ComponentMeta } from "@storybook/react";
import SideBar from "./SideBar";

export default {
  title: "Home/SideBar",
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

export const Primary = () => {
  return <SideBar />;
};
