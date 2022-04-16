import { ReactChild, ReactFragment, ReactPortal } from "react";
import RegularTile from "./RegularTile";
import { Tile, TileGroup } from "./Tile";

export function RegularSectionTileGroup({
  tiles,
  activeTab,
  category,
}: {
  tiles: TileGroup;
  activeTab: string | null;
  category: string;
}) {
  let tiles_to_display =
    activeTab === "Bookmarked"
      ? tiles.filter(
          (tile: Tile) => tile.category === category && tile.isBookmarked
        )
      : tiles.filter((tile: Tile) => tile.category === category);
  let title = category;
  if (category === "Movie") {
    title = "Movies";
  }
  if (activeTab === "Bookmarked") {
    title = "Bookmarked " + title;
  }
  return (
    <>
      <div className="heading-l">{title}</div>
      <div>
        {tiles_to_display.map((tile: Tile, index: number) => {
          return <RegularTile key={index} tile={tile} />;
        })}
      </div>
    </>
  );
}

function PureRegularTileGroup({
  title,
  tiles,
  activeTab,
}: {
  title: string;
  tiles: TileGroup;
  activeTab: string | null;
}) {
  if (activeTab === "Bookmarked") {
    return (
      <div>
        <RegularSectionTileGroup
          tiles={tiles}
          activeTab={activeTab}
          category="Movie"
        />
        <RegularSectionTileGroup
          tiles={tiles}
          activeTab={activeTab}
          category="TV Series"
        />
      </div>
    );
  } else if (activeTab === "Home" || activeTab === null) {
    return (
      <div>
        <div className="heading-l">Recommended for you</div>
        {tiles.map((tile: Tile, index: number) => {
          return <RegularTile key={index} tile={tile} />;
        })}
      </div>
    );
  } else {
    return (
      <RegularSectionTileGroup
        tiles={tiles}
        activeTab={activeTab}
        category={activeTab}
      />
    );
  }
}
export default PureRegularTileGroup;
