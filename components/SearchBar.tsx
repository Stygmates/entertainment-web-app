import Image from "next/image";
import IconSearch from "../assets/icon-search.svg";
function SearchBar(props: any) {
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
        placeholder="Search for movies or TV series"
      />
      <style jsx>
        {`
          input {
            border: none;
            background-color: transparent;
            color: white;
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
            .searchbar {
              margin-top: 0px;
            }
          }
        `}
      </style>
    </div>
  );
}
export default SearchBar;
