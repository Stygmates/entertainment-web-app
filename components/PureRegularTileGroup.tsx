import { ReactChild, ReactFragment, ReactPortal } from "react";
import RegularTile from "./RegularTile";
import { Tile, TileGroup } from "./Tile";

function get_tiles_to_display(
  tiles: TileGroup,
  category: string | null,
  searchBarValue: string | null,
  activeTab: string | null
) {
  let tiles_to_display = tiles;
  if (activeTab && activeTab !== "Home")
    tiles_to_display = tiles_to_display.filter((tile: Tile) => {
      return tile.category === category;
    });
  if (searchBarValue) {
    tiles_to_display = tiles_to_display.filter((tile: Tile) => {
      return tile.title.toLowerCase().includes(searchBarValue.toLowerCase());
    });
  }
  if (activeTab === "Bookmarked") {
    tiles_to_display = tiles_to_display.filter(
      (tile: Tile) => tile.isBookmarked
    );
  }
  return tiles_to_display;
}

function get_title(
  tiles: TileGroup,
  category: string | null,
  searchBarValue: string | null,
  activeTab: string | null
): string {
  if (searchBarValue) {
    return "Found " + tiles.length + ' results for "' + searchBarValue + '"';
  } else {
    var title;
    if (activeTab && activeTab != "Home" && category && category != "Home") {
      title = category === "Movie" ? "Movies" : category;
      if (activeTab === "Bookmarked") {
        title = "Bookmarked " + title;
      }
    } else {
      title = "Recommended for you";
    }
    return title;
  }
}

type Props = {
  tiles: TileGroup;
  activeTab: string | null;
  category: string | null;
  searchBarValue: string | null;
};
export function RegularSectionTileGroup({
  tiles,
  activeTab,
  category,
  searchBarValue,
}: Props) {
  let tiles_to_display = get_tiles_to_display(
    tiles,
    category,
    searchBarValue,
    activeTab
  );
  let title = get_title(tiles_to_display, category, searchBarValue, activeTab);
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

type PureProps = {
  tiles: TileGroup | null;
  activeTab: string | null;
  category: string | null;
  searchBarValue: string | null;
};
export default function PureRegularTileGroup({
  tiles,
  activeTab,
  searchBarValue,
}: PureProps) {
  if (tiles === null) {
    return <div className="heading-l"> No tile to display</div>;
  }
  if (activeTab === "Bookmarked") {
    return (
      <div>
        <RegularSectionTileGroup
          tiles={tiles}
          activeTab={activeTab}
          category="Movie"
          searchBarValue={searchBarValue}
        />
        <RegularSectionTileGroup
          tiles={tiles}
          activeTab={activeTab}
          category="TV Series"
          searchBarValue={searchBarValue}
        />
      </div>
    );
  } else {
    return (
      <RegularSectionTileGroup
        tiles={tiles}
        activeTab={activeTab}
        category={activeTab}
        searchBarValue={searchBarValue}
      />
    );
  }
}
