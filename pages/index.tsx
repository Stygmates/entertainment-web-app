import type { NextPage } from "next";
import SideBar from "../components/SideBar";
import { Tile, TileGroup } from "../components/Tile";
import SearchBar from "../components/SearchBar";
import TrendingTileGroup from "../components/TrendingTileGroup";
import RecommendedTileGroup from "../components/RecommendedTileGroup";
import data from "../assets/data.json";

const MainPage: NextPage = () => {
  let tiles: Tile[] = data;
  let tileGroup: TileGroup = { TileGroup: tiles };
  return (
    <div className="index-page">
      <SideBar />
      <div>
        <SearchBar />
        <TrendingTileGroup tilegroup={tileGroup} />
        <RecommendedTileGroup tilegroup={tileGroup} />
      </div>
      <style jsx>{`
        .index-page {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default MainPage;
