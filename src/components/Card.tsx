/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

interface Props {
  card: {
    img: string;
    title: string;
    description: string;
    videoUrl: string;
  };
}

export const Card = ({ card }: Props) => {
  return (
    <div className="z-10 flex p-4 border border-[#eccbac] mt-20 rounded-xl w-full h-auto relative">
      <img
        src="/border.svg"
        alt="border"
        className="absolute w-2 top-[50%] -left-1"
      />
      <img
        src="/border.svg"
        alt="border"
        className="absolute w-2 top-[50%] -right-1"
      />
      {/* imagen */}
      <img src={`${card.img}`} alt={card.title} className="max-w-[300px]" />
      {/* info + video */}
      <div className="p-4">
        <p className="text-title text-xl">{card.title}</p>
        <p className="text-secondary text-sm mt-2 mb-5">{card.description}</p>
        <Link
          target="_blank"
          href={card.videoUrl}
          className="w-[250px] flex justify-center items-center h-[150px] border border-[#eccbac] rounded-md"
        >
          <FaPlay className="" size={26} />
        </Link>
      </div>
    </div>
  );
};
