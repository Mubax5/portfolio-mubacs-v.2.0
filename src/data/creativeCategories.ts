export interface CreativeCategory {
  id: number;
  title: string;
  slug: string;
  description: string;
}

export const creativeCategories: CreativeCategory[] = [
  {
    id: 1,
    title: "Personal Project",
    slug: "personal-project",
    description: "Semua visual personal project dari folder lokal.",
  },
  {
    id: 2,
    title: "Design",
    slug: "design",
    description: "Piforia, OSBA, BEM PNC, Ifest, PKKMB, Diesnatalis, dan folder design lain.",
  },
  {
    id: 3,
    title: "GMV",
    slug: "gmv",
    description: "Video GMV dari Instagram Reels dan YouTube Shorts.",
  },
  {
    id: 4,
    title: "Logo/Brand Visual",
    slug: "brand-identity",
    description: "Logo dan brand visual, ditampilkan sebagai gallery next/previous.",
  },
  {
    id: 5,
    title: "Other",
    slug: "other",
    description: "Semua asset dari folder Other.",
  },
  {
    id: 6,
    title: "UI Visual Exploration",
    slug: "ui-visual-exploration",
    description: "IMK dan SIAKAD PNC visual exploration.",
  },
];
