import logo from "../assets/logo.svg";
import iconNavHome from "../assets/icon-nav-home.svg";
import iconNavMovies from "../assets/icon-nav-movies.svg";
import iconNavTVSeries from "../assets/icon-nav-tv-series.svg";
import iconNavBookmark from "../assets/icon-nav-bookmark.svg";
import SideBarButton from "./SideBarButton";
import Image from "next/image";
import SideBarAvatarButton from "./SideBarAvatarButton";

const SideBar = () => (
  <div className="sidebar">
    <div id="main-logo">
      <Image className="icon" src={logo} alt="Vercel Logo" />
    </div>
    <div className="sidebar-radiogroup">
      <SideBarButton src={iconNavHome} alt="Home" />
      <SideBarButton src={iconNavMovies} alt="Movie" />
      <SideBarButton src={iconNavTVSeries} alt="TV" />
      <SideBarButton src={iconNavBookmark} alt="Bookmarked" />
    </div>
    <SideBarAvatarButton />
    <style jsx>
      {`
        .sidebar {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          background-color: var(--custom-middle-blue);
          color: white;
          height: 90vh;
          border-radius: 20px;
          margin: 32px;
        }
        .sidebar div {
          margin: 20px;
        }

        .sidebar-radiogroup {
          display: flex;
          flex-direction: column;
        }

        /*Tablet*/
        @media only screen and (max-width: 768px) {
          .sidebar {
            height: 96px;
            width: 80%;
            flex-direction: row;
          }
          .sidebar-radiogroup {
            flex-direction: row;
          }
        }
        /*Mobile*/
        @media only screen and (max-width: 375px) {
          .sidebar {
          }
        }
      `}
    </style>
  </div>
);
export default SideBar;
