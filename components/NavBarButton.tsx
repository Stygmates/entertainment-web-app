import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveTab,
  setActiveTab,
} from "../features/activeTab/ActiveTabSlice";
import PureNavBarButton from "./PureNavBarButton";

type Props = {
  src: string;
  alt: string;
};
export default function NavBarButton({ src, alt }: Props) {
  const activeTab = useSelector(selectActiveTab);
  const dispatch = useDispatch();
  return (
    <PureNavBarButton
      src={src}
      alt={alt}
      activeTab={activeTab}
      onClick={() => {
        dispatch(setActiveTab(alt));
      }}
    />
  );
}
