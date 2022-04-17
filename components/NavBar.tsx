import logo from "../assets/logo.svg";
import iconNavHome from "../assets/icon-nav-home.svg";
import iconNavMovies from "../assets/icon-nav-movies.svg";
import iconNavTVSeries from "../assets/icon-nav-tv-series.svg";
import iconNavBookmark from "../assets/icon-nav-bookmark.svg";
import NavBarButton from "./NavBarButton";
import NavBarAvatarButton from "./NavBarAvatarButton";
import Image from "next/image";

type Props = {};
export default function NavBar({}: Props) {
  return (
    <div className="navbar">
      <div className="logo">
        <Image src={logo} alt="Logo" layout="fill" />
      </div>
      <div className="navbar-radiogroup">
        <NavBarButton src={iconNavHome} alt="Home" />
        <NavBarButton src={iconNavMovies} alt="Movie" />
        <NavBarButton src={iconNavTVSeries} alt="TV Series" />
        <NavBarButton src={iconNavBookmark} alt="Bookmarked" />
      </div>
      <NavBarAvatarButton />
      <style jsx>
        {`
          .navbar {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background-color: var(--custom-middle-blue);
            color: white;
            width: 96px;
            height: 90vh;
            border-radius: 20px;
            margin: 32px;
          }

          .navbar-radiogroup,
          .logo {
            display: flex;
            flex-direction: column;
          }

          .logo {
            position: relative;
            width: 20px;
            height: 20px;
            margin: 20px;
          }

          /*Tablet*/
          @media only screen and (max-width: 768px) {
            .navbar {
              height: 72px;
              width: 80%;
              flex-direction: row;
            }
            .navbar-radiogroup {
              flex-direction: row;
            }
          }
          /*Mobile*/
          @media only screen and (max-width: 375px) {
            .navbar {
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
}
