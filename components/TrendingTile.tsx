import Image from "next/image";
import BookmarkButton from "./BookmarkButton";
import PlayButton from "./PlayButton";
import movieIcon from "../assets/icon-category-movie.svg";
import tvIcon from "../assets/icon-category-tv.svg";
import { Tile } from "./Tile";

function TrendingTile({ tile, itemId }: { tile: Tile; itemId: string }) {
  let videoType;
  if (tile.category === "Movie") {
    videoType = (
      <Image src={movieIcon} alt="Categorie" width={12} height={12} />
    );
  } else if (tile.category === "TV Series") {
    videoType = <Image src={tvIcon} alt="Categorie" width={12} height={12} />;
  }

  let thumbnailSource = tile.thumbnail.trending
    ? tile.thumbnail.trending.large.substring(1)
    : "";
  return (
    <div className="trending-tile">
      <div className="tile-thumbnail">
        <Image
          src={thumbnailSource}
          alt="Vercel Logo"
          width={470}
          height={230}
        />
      </div>
      <div className="play-button">
        <PlayButton />
      </div>
      <div className="bookmark-button">
        <BookmarkButton bookmarked={tile.isBookmarked} />
      </div>
      <div id="tile-information">
        <div id="tile-description" className="body-m">
          {tile.year} • {videoType} {tile.category} • {tile.rating}
        </div>
        <div className="heading-s">{tile.title}</div>
      </div>
      <style jsx>{`
        .trending-tile {
          display: inline-block;
          margin: 10px;
          width: 470px;
          height: 230px;
          position: relative;
          color: white;

          /*To get rounded corner: */
          overflow: hidden;
          border-radius: 10px;
        }

        .trending-tile:hover .tile-thumbnail {
          filter: brightness(50%);
        }

        .trending-tile:hover .play-button {
          visibility: visible;
        }

        #tile-information {
          position: absolute;
          bottom: 20px;
          left: 20px;
        }

        .bookmark-button {
          position: absolute;
          top: 20px;
          right: 20px;
        }

        .play-button {
          visibility: hidden;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  );
}
export default TrendingTile;
