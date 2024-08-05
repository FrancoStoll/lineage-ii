import Link from "next/link";
import { BsWindows } from "react-icons/bs";
import { MenuDesktop } from "./MenuDesktop";
import { MenuMobile } from "./MenuMobile";

export const Navbar = () => {
  return (
    <div className="bg-header px-10 md:px-5 xl:px-20 py-6 flex justify-between items-center max-w-full">
      <p className="text-3xl md:text-4xl xl:text-6xl font-black pr-10 text-nowrap">
        Lineage II
      </p>

      <MenuDesktop />

      <div className="flex gap-8 items-center">
        <Link
          className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-10 border text-sm border-gray-400 rounded-md"
          href="/"
          type="button"
        >
          Sign In
        </Link>
        <Link
          className="hidden hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-md bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 text-black md:flex gap-2 items-center"
          href="/"
          type="button"
        >
          <BsWindows />
          Download now
        </Link>
        <MenuMobile />
      </div>
    </div>
  );
};
