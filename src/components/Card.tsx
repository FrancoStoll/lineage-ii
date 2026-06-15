import Link from "next/link";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import type { GameClass } from "@/data/CardData";

interface Props {
  card: GameClass;
}

export const Card = ({ card }: Props) => {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-gold/15 bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/45 hover:shadow-gold-sm">
      <div className="relative h-72 overflow-hidden bg-gradient-to-b from-header to-surface">
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl transition-opacity duration-300 group-hover:bg-gold/20" />
        <Image
          src={card.img}
          alt={card.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain object-bottom drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full border border-gold/30 bg-black/50 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-title backdrop-blur">
          {card.element}
        </span>
      </div>

      <div className="flex flex-1 flex-col border-t border-gold/10 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
          {card.role}
        </p>
        <h3 className="mt-1 font-display text-lg font-bold uppercase tracking-wide text-title">
          {card.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-secondary">
          {card.description}
        </p>

        <Link
          target="_blank"
          href={card.videoUrl}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-gold"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-black">
            <FaPlay size={11} />
          </span>
          Watch skills
        </Link>
      </div>
    </article>
  );
};
