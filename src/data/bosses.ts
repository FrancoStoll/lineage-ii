import type { IconType } from "react-icons";
import {
  GiDragonHead,
  GiSpikedDragonHead,
  GiAngelWings,
  GiAnt,
  GiSpiderFace,
  GiGears,
} from "react-icons/gi";

export type Boss = {
  Icon: IconType;
  name: string;
  title: string;
  level: number;
  schedule: string;
  reward: string;
};

export const bosses: Boss[] = [
  {
    Icon: GiDragonHead,
    name: "Antharas",
    title: "The Land Dragon",
    level: 79,
    schedule: "Sun · 21:00",
    reward: "Earring of Antharas",
  },
  {
    Icon: GiSpikedDragonHead,
    name: "Valakas",
    title: "The Fire Dragon",
    level: 85,
    schedule: "Sat · 22:00",
    reward: "Necklace of Valakas",
  },
  {
    Icon: GiAngelWings,
    name: "Baium",
    title: "The Fallen Angel",
    level: 75,
    schedule: "Wed · 20:00",
    reward: "Ring of Baium",
  },
  {
    Icon: GiAnt,
    name: "Queen Ant",
    title: "Eternal Matriarch",
    level: 40,
    schedule: "Daily · 20:30",
    reward: "Ring of Queen Ant",
  },
  {
    Icon: GiSpiderFace,
    name: "Orfen",
    title: "Lady of the Swamp",
    level: 50,
    schedule: "Daily · 21:30",
    reward: "Earring of Orfen",
  },
  {
    Icon: GiGears,
    name: "Core",
    title: "Heart of the Tower",
    level: 50,
    schedule: "Daily · 22:30",
    reward: "Ring of Core",
  },
];
