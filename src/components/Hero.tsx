"use client";

import Link from "next/link";
import { BsWindows } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        loop
        autoPlay
        muted
        playsInline
        poster="/hero.jpg"
      >
        <source src="/header.webm" type="video/webm" />
        <source src="/header.mp4" type="video/mp4" />
      </video>

      {/* Capas de oscurecido para legibilidad */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-transparent to-background/40" />

      <div className="container relative z-10 py-32">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-black/40 px-4 py-1.5 text-xs font-medium tracking-wide text-title backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            3,214 heroes online
          </span>

          <h1 className="mt-6 font-display text-6xl font-black uppercase leading-none tracking-tight text-gold-gradient sm:text-7xl xl:text-8xl">
            Lineage II
          </h1>
          <p className="mt-3 font-display text-2xl uppercase tracking-[0.2em] text-title sm:text-3xl">
            Shield of the Kingdom
          </p>

          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            Forge your legend in a world of eternal war. Lay siege to mighty
            castles, slay ancient dragons, and rise to glory alongside thousands
            of heroes.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#community"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-gold-dark via-gold to-gold-dark px-7 py-3.5 font-bold text-black shadow-gold transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              <BsWindows />
              Download now
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=T1fMwOAtF_g"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:border-gold/50 hover:text-title"
            >
              <FaPlay size={13} />
              Watch trailer
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
};
