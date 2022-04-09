import { ReactChild, ReactFragment, ReactPortal } from "react";
import RecommendedTile from "./RecommendedTile";
import { Tile, TileGroup } from "./Tile";
function RecommendedTileGroup({ tiles }: TileGroup) {
  return (
    <div className="recommended-tile-group">
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
