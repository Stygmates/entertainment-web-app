import type { NextPage } from "next";
import SideBar from "../components/SideBar";
import { Tile, TileGroup } from "../components/Tile";
import SearchBar from "../components/SearchBar";
import TrendingTileGroup from "../components/TrendingTileGroup";
import RecommendedTileGroup from "../components/RecommendedTileGroup";
import data from "../assets/data.json";

const MainPage: NextPage = () => {
  let tiles: Tile[] = data;
  return (
    <div className="index-page">
      <SideBar />
      <div className="content">
        <SearchBar />
        <TrendingTileGroup tiles={tiles} />
        <RecommendedTileGroup tiles={tiles} />
      </div>
      <style jsx>{`
        .index-page {
          display: flex;
        }
        .content {
          width: 95%;
        }
        @media only screen and (max-width: 768px) {
          .index-page {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default MainPage;
