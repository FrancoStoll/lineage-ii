/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsWindows } from "react-icons/bs";
import hero from "/public/hero.jpg";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="mx-auto relative flex items-start min-h-[calc(100vh-15rem)]">
      <video
        src="/header.webm"
        className="absolute z-10 shadow-header h-full w-full object-cover 2xl:object-contain shadow-2xl"
        loop
        autoPlay
        muted
      >
        <source src="/header.webm" type="video/webm" />
        <source src="/header.mp4" type="video/mp4" />
      </video>
      <div className="max-w-7xl mx-auto flex-1 flex flex-col items-start min-h-[calc(100vh-15rem)]  justify-center gap-5 z-10 p-5">
        <h1 className="text-6xl xl:text-8xl text-title">Lineage 2</h1>
        <p className="text-title text-4xl">Shield of the kingdom</p>

        <p className="text-white text-md max-w-[499px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum error,
          veritatis itaque provident nesciunt delectus.
        </p>

        <div className="flex">
          <Link
            className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-md bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 text-black flex gap-2 items-center w-[250px] justify-center"
            href="/"
            type="button"
          >
            <BsWindows />
            Download now
          </Link>
        </div>
      </div>
    </section>
  );
};
