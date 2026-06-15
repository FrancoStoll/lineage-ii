"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BsWindows } from "react-icons/bs";
import { MenuDesktop } from "./MenuDesktop";
import { MenuMobile } from "./MenuMobile";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-gold/15 bg-header/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <Link
          href="#home"
          className="font-display text-2xl font-bold uppercase leading-none tracking-[0.18em] text-gold-gradient sm:text-3xl"
        >
          Lineage&nbsp;II
        </Link>

        <MenuDesktop />

        <div className="flex items-center gap-3">
          <Link
            className="hidden rounded-md border border-gold/40 px-6 py-2.5 text-sm font-semibold text-title transition-colors hover:bg-gold/10 md:block"
            href="#community"
          >
            Sign In
          </Link>
          <Link
            className="hidden items-center gap-2 rounded-md bg-gradient-to-r from-gold-dark via-gold to-gold-dark px-5 py-2.5 text-sm font-bold text-black shadow-gold-sm transition-all hover:brightness-110 md:flex"
            href="#community"
          >
            <BsWindows />
            Download
          </Link>
          <MenuMobile />
        </div>
      </div>
    </header>
  );
};
