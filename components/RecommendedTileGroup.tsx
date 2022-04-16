import { useSelector } from "react-redux";
import { selectActiveTab } from "../features/activeTab/ActiveTabSlice";
import PureRecommendedTileGroup from "./PureRecommendedTileGroup";
import { TileGroup } from "./Tile";

type Props = {
  tiles: TileGroup;
};
export default function RecommendedTileGroup({ tiles }: Props) {
  const activeTab = useSelector(selectActiveTab);
  return <PureRecommendedTileGroup tiles={tiles} activeTab={activeTab} />;
}
