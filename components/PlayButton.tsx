import Image from "next/image";
import IconPlay from "../assets/icon-play.svg";

function PlayButton(props: any) {
  return (
    <div className="play-button">
      <Image src={IconPlay} alt="Play" width={30} height={30} />
      <div className="heading-xs">Play</div>
      <style jsx>{`
        .play-button {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 117px;
          height: 48px;
          border-radius: 28.5px;
          background-color: rgba(255, 255, 255, 0.25);
        }
      `}</style>
    </div>
  );
}
export default PlayButton;
