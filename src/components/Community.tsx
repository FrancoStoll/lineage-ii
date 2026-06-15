import Link from "next/link";
import Image from "next/image";
import { BsWindows } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { Reveal } from "./Reveal";

export const Community = () => {
  return (
    <section id="community" className="relative overflow-hidden py-24 sm:py-32">
      <Image
        src="/Lineage-2-Essence-W-Arata.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div className="absolute inset-0 bg-background/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      <div className="container relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Begin your journey
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-tight text-gold-gradient sm:text-6xl">
            Your Legend Awaits
          </h2>
          <div className="ornate-divider mt-6">
            <span />
          </div>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/85">
            Download the game for free, join thousands of players and write your
            name into the history of Aden. The battlefield is calling.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-gold-dark via-gold to-gold-dark px-8 py-4 font-bold text-black shadow-gold transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              <BsWindows />
              Download now
            </Link>
            <Link
              href="https://discord.com"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition-colors hover:border-gold/50 hover:text-title"
            >
              <FaDiscord size={20} />
              Join Discord
            </Link>
          </div>

          <p className="mt-6 text-sm text-secondary">
            Free to play · 3,214 heroes online now
          </p>
        </Reveal>
      </div>
    </section>
  );
};
