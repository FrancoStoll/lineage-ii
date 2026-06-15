export type GameClass = {
  img: string;
  title: string;
  role: string;
  element: "Light" | "Dark";
  description: string;
  videoUrl: string;
};

export const cards: GameClass[] = [
  {
    img: "/hell.png",
    title: "Hell Knight",
    role: "Tank · Melee DPS",
    element: "Dark",
    description:
      "A fearsome warrior pledged to darkness, ready to destroy anyone in his way. Able to summon a Dark Panther, he excels in melee combat — blocking enemy abilities and knocking them down while dealing heavy damage.",
    videoUrl: "https://www.youtube.com/watch?v=T1fMwOAtF_g&t=103s",
  },
  {
    img: "/fenix.png",
    title: "Phoenix Knight",
    role: "Tank · Support",
    element: "Light",
    description:
      "A servant of light who has mastered physical and magical defense. He vigilantly protects allies while engaging at range, with reworked skills like Wings of Fire, Phoenix Glide and the Summon Phoenix Cubic.",
    videoUrl: "https://www.youtube.com/watch?v=T1fMwOAtF_g&t=103s",
  },
  {
    img: "/templar.png",
    title: "Shillien Templar",
    role: "Tank · DPS",
    element: "Dark",
    description:
      "Only the most devoted followers of Shillien, goddess of death, become her Templars. He pulls enemies into pools of darkness, improves Chained Death Scythe and regenerates his own health.",
    videoUrl: "https://www.youtube.com/watch?v=T1fMwOAtF_g&t=103s",
  },
  {
    img: "/eva.png",
    title: "Eva's Templar",
    role: "Tank · Anti-Mage",
    element: "Light",
    description:
      "Protector of the weak and punisher of the wicked, blessed by Eva herself. This Elven Knight is especially adept against magic threats — dealing more damage, pulling enemies and blocking their spells.",
    videoUrl: "https://www.youtube.com/watch?v=T1fMwOAtF_g&t=103s",
  },
];
