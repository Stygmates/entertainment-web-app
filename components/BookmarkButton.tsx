import Image from "next/image";
import IconBookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import IconBookmarkFull from "../assets/icon-bookmark-full.svg";

function BookmarkButton(props: any) {
  let icon = props.bookmarked ? IconBookmarkFull : IconBookmarkEmpty;
  return (
    <button>
      <Image src={icon} alt="Bookmark" width={16} height={16} />
      <style jsx>{`
        button {
          background-color: rgba(0, 0, 0, 0.5);
          border: none;
          border-radius: 20px;
          width: 32px;
          height: 32px;
        }

        button:hover {
          filter: invert(1);
        }
      `}</style>
    </button>
  );
}
export default BookmarkButton;
