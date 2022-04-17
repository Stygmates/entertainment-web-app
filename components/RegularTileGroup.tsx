import { useSelector } from "react-redux";
import { selectActiveTab } from "../features/activeTab/ActiveTabSlice";
import { selectSearchBar } from "../features/searchBar/SearchBarSlice";
import { selectTiles } from "../features/tiles/TilesSlice";
import PureRegularTileGroup from "./PureRegularTileGroup";
import { TileGroup } from "./Tile";

type Props = {
};
export default function RegularTileGroup({}: Props) {
  const tiles = useSelector(selectTiles);
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
