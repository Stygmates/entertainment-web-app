import { ReactChild, ReactFragment, ReactPortal } from "react";
import RecommendedTile from "./RecommendedTile";
import { Tile, TileGroup } from "./Tile";

function PureRecommendedTileGroup({
  tiles,
  activeTab,
}: {
  tiles: TileGroup;
  activeTab: string | null;
}) {
  let tiles_to_display = tiles;
  if (activeTab !== null && activeTab != "Home") {
    if (activeTab === "Bookmarked") {
      tiles_to_display = tiles_to_display.filter(
        (tile: Tile) => tile.isBookmarked
      );
    } else {
      tiles_to_display = tiles_to_display.filter(
        (tile: Tile) => tile.category === activeTab
      );
    }
  }
  return (
    <div>
      <div className="heading-l">Recommended for you</div>
      <div className="recommended-tile-group">
        {tiles_to_display.map((tile: Tile, index: number) => {
          return <RecommendedTile key={index} tile={tile} />;
        })}
      </div>
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
export default PureRecommendedTileGroup;
