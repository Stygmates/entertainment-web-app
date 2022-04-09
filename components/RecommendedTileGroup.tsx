import { ReactChild, ReactFragment, ReactPortal } from "react";
import RecommendedTile from "./RecommendedTile";
import { Tile, TileGroup } from "./Tile";
import { useHorizontalScroll } from "./helpers/HorizontalScroll";
function RecommendedTileGroup({ tiles }: TileGroup) {
  const scrollRef = useHorizontalScroll();
  return (
    <div ref={scrollRef} className="recommended-tile-group">
      {tiles.map((tile: Tile, index: number) => {
        return <RecommendedTile key={index} tile={tile} />;
      })}
      <style jsx>{`
        .recommended-tile-group {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
export default RecommendedTileGroup;
