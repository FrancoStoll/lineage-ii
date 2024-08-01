import { cards } from "@/data/CardData";

import Image from "next/image";
import { Card } from "./Card";

/* eslint-disable @next/next/no-img-element */
export const CardGrid = () => {
  return (
    <div className="relative mx-auto w-full h-screen">
      <img
        src="/back.jpg"
        alt="back"
        className="absolute top-0 z-0 shadow-header w-full object-cover"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* card */}

        {cards.map((card) => (
          <Card key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
};
