import Image from "next/image";
import iconAvatar from "../assets/image-avatar.png";

type Props = {};
export default function NavBarAvatarButton({}: Props) {
  return (
    <div className="avatar-icon">
      <button>
        <Image src={iconAvatar} alt="Avatar" layout="fill" />
      </button>
      <style jsx>{`
        .avatar-icon button {
          position: relative;
          background-color: transparent;
          border: none;
          width: 40px;
          height: 40px;
          margin: 20px;
        }
        @media only screen and (max-width: 768px) {
          .avatar-icon button {
            width: 32px;
            height: 32px;
          }
        }
        @media only screen and (max-width: 375px) {
          .avatar-icon button {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>
    </div>
  );
}
