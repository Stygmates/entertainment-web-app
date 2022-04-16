import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import IconSearch from "../assets/icon-search.svg";
import { selectActiveTab } from "../features/activeTab/ActiveTabSlice";
import { setSearchBar } from "../features/searchBar/SearchBarSlice";

function get_placeholder(activeTab: string | null) {
  switch (activeTab) {
    case "Movie":
      return "Search for movies";
    case "TV Series":
      return "Search for TV series";
    case "Bookmarked":
      return "Search for bookmarked shows";
    default:
      return "Search for movies or TV series";
  }
}
export default function SearchBar() {
  const activeTab = useSelector(selectActiveTab);
  return <PureSearchBar placeholder={get_placeholder(activeTab)} />;
}

type Props = { placeholder: string };
function PureSearchBar({ placeholder }: Props) {
  const dispatch = useDispatch();
  return (
    <div className="searchbar">
      <label>
        <Image
          id="icon-search"
          src={IconSearch}
          width={32}
          height={32}
          alt="Search icon"
        />
      </label>
      <input
        className="heading-m"
        type="text"
        placeholder={placeholder}
        onChange={(event) => {
          dispatch(setSearchBar(event.target.value));
        }}
      />
      <style jsx>
        {`
          input {
            border: none;
            background-color: transparent;
            color: white;
            width: 360px;
            height: 30px;
            vertical-align: top;
          }
          input:focus {
            border-bottom: solid 1px var(--custom-light-blue);
            outline: none;
          }
          .searchbar {
            height: 32px;
            margin-top: 64px;
          }
          @media only screen and (max-width: 768px) {
            input {
              width: 257px;
              font-weight: 300;
              font-size: 16px;
              line-height: 20px;
            }
            .searchbar {
              margin-top: 0px;
            }
          }
        `}
      </style>
    </div>
  );
}
