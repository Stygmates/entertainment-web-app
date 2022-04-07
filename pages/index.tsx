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
      <div className="content">
        <SearchBar />
        <TrendingTileGroup tilegroup={tileGroup} />
        <RecommendedTileGroup tilegroup={tileGroup} />
      </div>
      <style jsx>{`
        .index-page {
          display: flex;
        }
        .content {
          width: 90%;
        }
        @media only screen and (max-width: 2048px) {
          .index-page {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default MainPage;
