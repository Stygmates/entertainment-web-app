import { ReactChild, ReactFragment, ReactPortal } from "react";
import TrendingTile from "./TrendingTile";
import { Tile, TileGroup } from "./Tile";
import { useHorizontalScroll } from "./helpers/HorizontalScroll";

function TrendingTileGroup({ tiles }: TileGroup) {
  const scrollRef = useHorizontalScroll();
  return (
    <div className="trending-group">
      <div className="trending-tile-group-title heading-l">Trending</div>
      <div ref={scrollRef} className="trending-tile-group">
        {tiles.map((tile: Tile, index: number) => {
          if (tile.isTrending) {
            return (
              <TrendingTile className="trending-tile" key={index} tile={tile} />
            );
          }
        })}
      </div>
      <style jsx>
        {`
          .trending-group {
            margin: 20px;
          }
          .trending-tile-group {
            height: 295px;
            overflow: hidden;
            white-space: nowrap;
          }
        `}
      </style>
    </div>
  );
}
export default TrendingTileGroup;
