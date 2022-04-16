import type { NextPage } from "next";
import NavBar from "../components/NavBar";
import { Tile, TileGroup } from "../components/Tile";
import SearchBar from "../components/SearchBar";
import TrendingTileGroup from "../components/TrendingTileGroup";
import RegularTileGroup from "../components/RegularTileGroup";
import data from "../assets/data.json";
import { Provider } from "react-redux";
import { store } from "../app/store";

const MainPage: NextPage = () => {
  let tiles: Tile[] = data;
  return (
    <Provider store={store}>
      <div className="index-page">
        <NavBar />
        <div className="content">
          <SearchBar />
          <TrendingTileGroup tiles={tiles} />
          <RegularTileGroup tiles={tiles} />
        </div>
        <style jsx>{`
          .index-page {
            display: flex;
          }
          .content {
            width: 90%;
          }
          @media only screen and (max-width: 768px) {
            .index-page {
              flex-direction: column;
              align-items: center;
            }
          }
        `}</style>
      </div>
    </Provider>
  );
};

export default MainPage;
