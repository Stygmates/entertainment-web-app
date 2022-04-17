import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import usePreventBodyScroll from "./helpers/useProventBodyScroll";
import { Tile, TileGroup } from "./Tile";
import TrendingTile from "./TrendingTile";
import { useSelector } from "react-redux";
import { selectTiles } from "../features/tiles/TilesSlice";
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

type Props = {};
export default function TrendingTileGroup({}: Props) {
  const tiles = useSelector(selectTiles);
  return <PureTrendingTileGroup tiles={tiles} />;
}

export function PureTrendingTileGroup({ tiles }: { tiles: TileGroup | null }) {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  if (tiles == null) {
    return <div className="heading-l">Nothing to display</div>;
  }
  let trendingTiles = tiles.filter((tile: Tile) => tile.isTrending);
  return (
    <div>
      <div className="heading-l">Trending</div>
      <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
        <ScrollMenu
          onWheel={onWheel}
          transitionBehavior="smooth"
          transitionDuration={1500}
        >
          {trendingTiles.map(function (tile: Tile, index: number) {
            return <TrendingTile key={index} tile={tile} />;
          })}
        </ScrollMenu>
      </div>
    </div>
  );
}

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
