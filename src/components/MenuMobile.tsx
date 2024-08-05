"use client";

import { useState } from "react";
import { BiMenu } from "react-icons/bi";

export const MenuMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden block">
      <BiMenu
        size={40}
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="w-56 h-auto absolute -left-48 top-14 z-20 bg-header p-5 rounded-xl fadeIn">
          <ul className="flex flex-col gap-2 uppercase">
            <li className="hover:text-orange-300 transition-colors cursor-pointer">
              Features
            </li>
            <li className="hover:text-orange-300 transition-colors cursor-pointer">
              Forum
            </li>
            <li className="hover:text-orange-300 transition-colors cursor-pointer">
              Epic Boss
            </li>
            <li className="hover:text-orange-300 transition-colors cursor-pointer">
              Support
            </li>
            <li className="hover:text-orange-300 transition-colors cursor-pointer">
              Schedules
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
