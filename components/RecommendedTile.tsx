import Image from "next/image";
import BookmarkButton from "./BookmarkButton";
import PlayButton from "./PlayButton";
import movieIcon from "../assets/icon-category-movie.svg";
import tvIcon from "../assets/icon-category-tv.svg";

function RecommendedTile(props: any) {
  let videoType;
  if (props.tile.category === "Movie") {
    videoType = (
      <Image src={movieIcon} alt="Categorie" width={12} height={12} />
    );
  } else if (props.tile.category === "TV Series") {
    videoType = <Image src={tvIcon} alt="Categorie" width={12} height={12} />;
  }
  let thumbnailSource = props.tile.thumbnail.regular.large.substring(1);
  return (
    <div className="recommended-tile">
      <div className="tile-thumbnail-group">
        <div className="tile-thumbnail">
          <Image src={thumbnailSource} alt="Vercel Logo" layout="fill" />
        </div>
        <div className="play-button">
          <PlayButton />
        </div>
        <div className="bookmark-button">
          <BookmarkButton bookmarked={props.tile.isBookmarked} />
        </div>
      </div>
      <div id="tile-information">
        <div id="tile-description" className="body-s">
          {props.tile.year} • {videoType} {props.tile.category} •{" "}
          {props.tile.rating}
        </div>
        <div className="heading-xs">{props.tile.title}</div>
      </div>
      <style jsx>{`
        .recommended-tile {
          display: inline-block;
          margin: 5px;
          height: 226px;
          position: relative;
          color: white;
        }

        .tile-thumbnail {
          position: relative;
          height: 174px;
          width: 280px;
          /*To get rounded corner: */
          overflow: hidden;
          border-radius: 10px;
        }

        .tile-thumbnail-group {
          position: relative;
        }

        .recommended-tile:hover .tile-thumbnail {
          filter: brightness(50%);
        }

        .recommended-tile:hover .play-button {
          visibility: visible;
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
        @media only screen and (max-width: 376px) {
          .tile-thumbnail {
            width: 164px;
            height: 110px;
          }
        }
      `}</style>
    </div>
  );
}
export default RecommendedTile;
