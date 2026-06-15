import { cards } from "@/data/CardData";
import { Card } from "./Card";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export const CardGrid = () => {
  return (
    <section id="classes" className="relative overflow-hidden py-24 sm:py-28">
      {/* Fondo gótico tenue */}
      <div
        className="absolute inset-0 z-0 bg-[url('/back.jpg')] bg-cover bg-center opacity-30"
        aria-hidden
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Choose your path"
          title="Legendary Classes"
          description="Each awakened class brings a unique playstyle to the battlefield. Pick the hero that matches your destiny."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={(i % 4) * 0.08}>
              <Card card={card} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
