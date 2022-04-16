import { useSelector } from "react-redux";
import { selectActiveTab } from "../features/activeTab/ActiveTabSlice";
import PureRegularTileGroup from "./PureRegularTileGroup";
import { TileGroup } from "./Tile";

type Props = {
  tiles: TileGroup;
};
export default function RecommendedTileGroup({ tiles }: Props) {
  const activeTab = useSelector(selectActiveTab);
  return (
    <PureRegularTileGroup tiles={tiles} activeTab={activeTab} title={""} />
  );
}
