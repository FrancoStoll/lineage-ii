import { GiUpgrade, GiTwoCoins, GiDragonHead } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { Reveal } from "./Reveal";

const STATS = [
  { Icon: GiUpgrade, value: "x50", label: "XP / SP Rate" },
  { Icon: GiTwoCoins, value: "x10", label: "Adena Rate" },
  { Icon: GiDragonHead, value: "12", label: "Epic Raid Bosses" },
  { Icon: FaUsers, value: "3,214", label: "Heroes Online" },
];

export const Stats = () => {
  return (
    <section className="relative border-y border-gold/15 bg-surface">
      <div className="container py-12">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center">
                <stat.Icon className="mb-3 text-gold" size={34} />
                <span className="font-display text-3xl font-bold text-title sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs uppercase tracking-widest text-secondary">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
