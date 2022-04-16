import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  selectActiveTab,
  setActiveTab,
} from "../features/activeTab/ActiveTabSlice";

export default function SideBarButton({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const activeTab = useSelector(selectActiveTab);
  const dispatch = useDispatch();
  return (
    <button
      className={activeTab === alt ? "active" : ""}
      onClick={() => {
        dispatch(setActiveTab(alt));
      }}
    >
      <Image src={src} alt={alt} layout="fill" />
      <style jsx>{`
        button {
          width: 20px;
          height: 20px;
          margin: 10px;
          position: relative;
          background-color: transparent;
          border: none;
        }
        .active {
          filter: brightness(0) invert(1);
        }
        button:hover {
          filter: brightness(150%);
        }

        @media only screen and (max-width: 768px) {
        }
        @media only screen and (max-width: 375px) {
          .sidebar-label {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </button>
  );
}
