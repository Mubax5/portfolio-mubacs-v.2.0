export interface CreativeCategory {
  id: number;
  title: string;
  slug: string;
  description: string;
}

export const creativeCategories: CreativeCategory[] = [
  {
    id: 1,
    title: "Design",
    slug: "design",
    description:
      "Visual design archives for organizations, institutions, and brands \u2014 layouts, posters, and communication materials.",
  },
  {
    id: 2,
    title: "GMV",
    slug: "gmv",
    description:
      "Short-form video edits, visual rhythm pieces, and motion-aware content for social and digital channels.",
  },
  {
    id: 3,
    title: "Brand Visual",
    slug: "brand-visual",
    description:
      "Brand identity systems, visual guidelines, logo treatments, and cohesive design language.",
  },
  {
    id: 4,
    title: "Social Media",
    slug: "social-media",
    description:
      "Social media layouts, carousel designs, story templates, and content systems for consistent posting.",
  },
  {
    id: 5,
    title: "Poster / Illustration",
    slug: "poster-illustration",
    description:
      "Event posters, editorial illustrations, and visual compositions with typographic focus.",
  },
  {
    id: 6,
    title: "UI Visual Exploration",
    slug: "ui-visual",
    description:
      "Interface mood boards, UI concept explorations, dashboard layouts, and visual-first interface studies.",
  },
];
