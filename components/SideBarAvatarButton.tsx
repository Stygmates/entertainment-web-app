import Image from "next/image";
import iconAvatar from "../assets/image-avatar.png";

export default function SideBarAvatarButton() {
  return (
    <div className="avatar-icon">
      <button>
        <Image src={iconAvatar} alt="Avatar" />
      </button>
      <style jsx>{`
        .avatar-icon button {
          background-color: transparent;
          border: none;
          width: 40px;
          margin: 20px;
        }
        @media only screen and (max-width: 768px) {
          .avatar-icon button {
            width: 32px;
          }
        }
        @media only screen and (max-width: 375px) {
          .avatar-icon button {
            width: 24px;
          }
        }
      `}</style>
    </div>
  );
}
