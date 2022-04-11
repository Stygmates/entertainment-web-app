import Image from "next/image";

export default function SideBarButton({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <label className="sidebar-label">
      <input type="radio" name="navbar" value="small" />
      <Image src={src} alt={alt} width="100%" height="100%" />
      <style jsx>{`
        input {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }
        .sidebar-label {
          width: 40px;
          height: 40px;
          margin: 10px;
        }
        .sidebar-label:hover {
          filter: brightness(150%);
        }

        @media only screen and (max-width: 768px) {
          .sidebar-label {
            width: 20px;
            height: 20px;
          }
        }
        @media only screen and (max-width: 375px) {
          .sidebar-label {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </label>
  );
}
