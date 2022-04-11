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
    <div className="logo">
      <SideBarButton src={logo} alt="Logo" />
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
          margin: 10px;
        }

        .sidebar-radiogroup,
        .logo {
          display: flex;
          flex-direction: column;
        }

        /*Tablet*/
        @media only screen and (max-width: 768px) {
          .sidebar {
            height: 72px;
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
            height: 56px;
            width: 100vw;
            border-radius: 0px;
            margin-top: 0px;
          }
        }
      `}
    </style>
  </div>
);
export default SideBar;
