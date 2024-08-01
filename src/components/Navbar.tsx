import Link from "next/link";
import { BsWindows } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="bg-header px-10 md:px-5 xl:px-20 py-3 flex justify-between items-center max-w-full">
      <p className="text-5xl font-black pr-10">Lineage II</p>

      <ul className="flex gap-10 uppercase flex-1 items-center justify-center">
        <li className="hover:text-orange-300 transition-colors cursor-pointer">
          Features
        </li>
        <li className="hover:text-orange-300 transition-colors cursor-pointer">
          Forum
        </li>
        <li className="hover:text-orange-300 transition-colors cursor-pointer hidden md:block">
          Epic Boss
        </li>
        <li className="hover:text-orange-300 transition-colors cursor-pointer hidden md:block">
          Support
        </li>
        <li className="hover:text-orange-300 transition-colors cursor-pointer hidden md:block">
          Schedules
        </li>
      </ul>

      <div className="md:flex gap-10 hidden">
        <Link
          className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-10 border text-sm border-gray-400 rounded-md"
          href="/"
          type="button"
        >
          Sign In
        </Link>
        <Link
          className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-md bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 text-black flex gap-2 items-center"
          href="/"
          type="button"
        >
          <BsWindows />
          Download now
        </Link>
      </div>
    </div>
  );
};

{
  /* <button className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-orange-200 to-red-500 text-white">Click on me</button> */
}
