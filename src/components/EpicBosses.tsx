import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import { bosses } from "@/data/bosses";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export const EpicBosses = () => {
  return (
    <section id="bosses" className="relative bg-surface py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Raid the World"
          title="Epic Bosses"
          description="Rally your clan and march on the ancients. Only the strongest will claim their legendary spoils."
        />

        {/* Banner destacado */}
        <Reveal className="mb-12">
          <div className="relative overflow-hidden rounded-2xl border border-gold/20">
            <Image
              src="/Lineage-2-Essence-W-Arata.jpg"
              alt="Epic battle"
              width={1200}
              height={500}
              className="h-56 w-full object-cover sm:h-72"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-12">
              <h3 className="max-w-md font-display text-2xl font-bold uppercase leading-tight text-title sm:text-4xl">
                Conquer the Ancients
              </h3>
              <p className="mt-3 max-w-sm text-sm text-white/85 sm:text-base">
                Twelve world bosses roam Aden, each guarding artifacts of
                unimaginable power. Will you be the one to fell them?
              </p>
            </div>
          </div>
        </Reveal>

        {/* Grilla de bosses */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bosses.map((boss, i) => (
            <Reveal key={boss.name} delay={(i % 3) * 0.08}>
              <div className="group flex h-full items-start gap-4 rounded-xl border border-gold/10 bg-background p-5 transition-all duration-300 hover:border-gold/40">
                <div className="grid h-14 w-14 flex-none place-items-center rounded-lg border border-gold/20 bg-gold/5 text-gold">
                  <boss.Icon size={30} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-display text-lg font-bold uppercase tracking-wide text-title">
                      {boss.name}
                    </h4>
                    <span className="flex-none rounded border border-gold/25 px-2 py-0.5 text-[11px] font-semibold text-gold">
                      Lv {boss.level}
                    </span>
                  </div>
                  <p className="text-xs italic text-secondary">{boss.title}</p>

                  <div className="mt-4 space-y-1.5 text-sm">
                    <p className="flex items-center gap-2 text-white/80">
                      <FaRegClock className="text-gold" size={13} />
                      {boss.schedule}
                    </p>
                    <p className="flex items-center gap-2 text-white/80">
                      <GiTwoCoins className="text-gold" size={15} />
                      {boss.reward}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
