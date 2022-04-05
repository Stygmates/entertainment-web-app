import { ReactChild, ReactFragment, ReactPortal } from "react";
import RecommendedTile from "./RecommendedTile";
import { Tile } from "./Tile";
import { useHorizontalScroll } from "./helpers/HorizontalScroll";

interface TileGroup {
  TileGroup: Tile[];
}

function RecommendedTileGroup(props: { tilegroup: TileGroup }) {
  const scrollRef = useHorizontalScroll();
  return (
    <div ref={scrollRef} className="recommended-tile-group">
      {props.tilegroup.TileGroup.map((tile, index) => {
        return <RecommendedTile key={index} tile={tile} />;
      })}
      <style jsx>
        {`
          .recommended-tile-group {
            width: 1240px;
          }
        `}
      </style>
    </div>
  );
}
export default RecommendedTileGroup;
