import logo from "../assets/logo.svg";
import iconNavHome from "../assets/icon-nav-home.svg";
import iconNavMovies from "../assets/icon-nav-movies.svg";
import iconNavTVSeries from "../assets/icon-nav-tv-series.svg";
import iconNavBookmark from "../assets/icon-nav-bookmark.svg";
import NavBarButton from "./NavBarButton";
import NavBarAvatarButton from "./NavBarAvatarButton";
export default function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <NavBarButton src={logo} alt="Logo" />
      </div>
      <div className="navbar-radiogroup">
        <NavBarButton src={iconNavHome} alt="Home" />
        <NavBarButton src={iconNavMovies} alt="Movie" />
        <NavBarButton src={iconNavTVSeries} alt="TV" />
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
          .navbar div {
            margin: 10px;
          }

          .navbar-radiogroup,
          .logo {
            display: flex;
            flex-direction: column;
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