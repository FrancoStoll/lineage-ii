"use client";

import { useState } from "react";
import Link from "next/link";
import { BiMenu, BiX } from "react-icons/bi";
import { BsWindows } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/data/nav";

export const MenuMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative block xl:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="grid h-10 w-10 place-items-center rounded-md text-title transition-colors hover:bg-gold/10"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <BiX size={30} /> : <BiMenu size={30} />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 -z-10 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-14 z-20 w-64 rounded-xl border border-gold/20 bg-header/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-md"
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:bg-gold/10 hover:text-title"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="#community"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-gold-dark via-gold to-gold-dark px-4 py-2.5 text-sm font-bold text-black"
              >
                <BsWindows />
                Download
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
