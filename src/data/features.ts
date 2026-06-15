import type { IconType } from "react-icons";
import {
  GiCastle,
  GiCrossedSwords,
  GiDragonHead,
  GiTwoCoins,
  GiBattleGear,
  GiUpgrade,
} from "react-icons/gi";

export type Feature = {
  Icon: IconType;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    Icon: GiCastle,
    title: "Castle Sieges",
    description:
      "Battle for control of mighty fortresses every week. Rule the land and tax its riches.",
  },
  {
    Icon: GiCrossedSwords,
    title: "Open-World PvP",
    description:
      "Massive battles erupt anywhere, anytime. Glory belongs only to the bold.",
  },
  {
    Icon: GiDragonHead,
    title: "Epic Raid Bosses",
    description:
      "Gather your clan to bring down ancient dragons and claim legendary loot.",
  },
  {
    Icon: GiBattleGear,
    title: "Clan Wars",
    description:
      "Forge alliances, declare war and carve your name into the kingdom's history.",
  },
  {
    Icon: GiTwoCoins,
    title: "Player Economy",
    description:
      "A living free market driven entirely by players. Trade, craft and prosper.",
  },
  {
    Icon: GiUpgrade,
    title: "Constant Updates",
    description:
      "Seasonal events and fresh content keep the world alive all year round.",
  },
];
