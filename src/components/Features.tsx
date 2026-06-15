import { features } from "@/data/features";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export const Features = () => {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="The World"
          title="A Realm Built for War"
          description="Everything you love about Lineage II, refined for a new generation of heroes."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.1}>
              <div className="group h-full rounded-xl border border-gold/10 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold-sm">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-lg border border-gold/20 bg-gold/5 text-gold transition-colors group-hover:bg-gold/10">
                  <feature.Icon size={30} />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-title">
                  {feature.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-secondary">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
