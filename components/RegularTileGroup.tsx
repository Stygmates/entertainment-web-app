import { useSelector } from "react-redux";
import { selectActiveTab } from "../features/activeTab/ActiveTabSlice";
import { selectSearchBar } from "../features/searchBar/SearchBarSlice";
import PureRegularTileGroup from "./PureRegularTileGroup";
import { TileGroup } from "./Tile";

type Props = {
  tiles: TileGroup;
};
export default function RegularTileGroup({ tiles }: Props) {
  const activeTab = useSelector(selectActiveTab);
  const searchBarValue = useSelector(selectSearchBar);
  return (
    <PureRegularTileGroup
      tiles={tiles}
      activeTab={activeTab}
      searchBarValue={searchBarValue}
    />
  );
}
