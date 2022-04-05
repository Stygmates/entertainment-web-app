import logo from "../assets/logo.svg";
import iconNavHome from "../assets/icon-nav-home.svg";
import iconNavMovies from "../assets/icon-nav-movies.svg";
import iconNavTVSeries from "../assets/icon-nav-tv-series.svg";
import iconNavBookmark from "../assets/icon-nav-bookmark.svg";
import iconAvatar from "../assets/image-avatar.png";
import Image from "next/image";

const SideBar = () => (
  <div className="sidebar">
    <div id="main-logo">
      <Image src={logo} alt="Vercel Logo" width={40} height={40} />
    </div>
    <div className="sidebar-radiogroup">
      <label className="sidebar-label">
        <input type="radio" name="navbar" value="small" />
        <Image src={iconNavHome} alt="Home" width={40} height={40} />
      </label>
      <label className="sidebar-label">
        <input type="radio" name="navbar" value="small" />
        <Image src={iconNavMovies} alt="Movie" width={40} height={40} />
      </label>
      <label className="sidebar-label">
        <input type="radio" name="navbar" value="small" />
        <Image src={iconNavTVSeries} alt="TV" width={40} height={40} />
      </label>
      <label className="sidebar-label">
        <input type="radio" name="navbar" value="small" />
        <Image src={iconNavBookmark} alt="Bookmarked" width={40} height={40} />
      </label>
    </div>

    <div className="avatar-icon">
      <button>
        <Image src={iconAvatar} alt="Avatar" width={40} height={40} />
      </button>
    </div>
    <style jsx>
      {`
        .sidebar {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          background-color: var(--custom-middle-blue);
          color: white;
          width: 96px;
          height: 960px;
          border-radius: 20px;
          margin: 32px;
        }
        .sidebar div {
          margin: 20px;
        }

        .sidebar-radiogroup {
          display: flex;
          flex-direction: column;
          height: 800px;
        }

        .sidebar-label {
          margin: 1rem;
        }

        .sidebar-radiogroup [type="radio"] {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

        .sidebar-radiogroup:hover {
          filter: brightness(150%);
        }

        .avatar-icon button {
          background-color: transparent;
          border: none;
        }
      `}
    </style>
  </div>
);
export default SideBar;
