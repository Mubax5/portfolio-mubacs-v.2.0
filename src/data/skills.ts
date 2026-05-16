export interface SkillItem {
  title: string;
  slug: string;
  summary: string;
  tools: string[];
  proof: string[];
  links: { label: string; href: string }[];
}

export const skills: SkillItem[] = [
  {
    title: "Frontend Development",
    slug: "frontend-development",
    summary: "React, Next.js, Vite, Tailwind, responsive UI, motion, dashboard, and portfolio-grade interface implementation.",
    tools: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "GSAP"],
    proof: ["Madani Nidham dashboard", "Portfolio v2", "Madani Montessori website", "Landing pages"],
    links: [
      { label: "Madani Nidham", href: "https://github.com/Mubax5/Madani-Nidham" },
      { label: "Portfolio v2", href: "https://github.com/Mubax5/portfolio-mubacs-v.2.0" },
    ],
  },
  {
    title: "Backend & CMS",
    slug: "backend-cms",
    summary: "Laravel API, CMS architecture, auth, roles, database-backed content, PDF output, and admin workflows.",
    tools: ["Laravel", "PHP", "Sanctum", "Filament", "Blade", "REST API", "DomPDF"],
    proof: ["Madani Montessori landing page + CMS", "Madani Nidham Laravel API", "PPDB workflow"],
    links: [
      { label: "Madani CMS", href: "https://github.com/Mubax5/madani-montessori-landing-page" },
      { label: "Madani Nidham", href: "https://github.com/Mubax5/Madani-Nidham" },
    ],
  },
  {
    title: "Desktop Apps & Automation",
    slug: "desktop-apps-automation",
    summary: "Desktop app development, data-heavy UI, local tooling, image/video processing, and monitoring dashboards.",
    tools: ["C#", "Windows Forms", ".NET Framework", "Python", "CustomTkinter", "OpenCV", "SQLite"],
    proof: ["SIMANIK clinic system", "Fish Sorting Monitor", "Convertssor", "Feeds-Stitcher"],
    links: [
      { label: "SIMANIK", href: "https://github.com/Mubax5/SIMANIK" },
      { label: "Fish Sorting", href: "https://github.com/Mubax5/ui-sorting-fish-sarva" },
      { label: "Convertssor", href: "https://github.com/Mubax5/Convertssor" },
      { label: "Feeds-Stitcher", href: "https://github.com/Mubax5/Feeds-Stitcher" },
    ],
  },
  {
    title: "Database & Product Systems",
    slug: "database-product-systems",
    summary: "Relational data modeling, product flows, admin dashboards, reporting, and SaaS concepts for real operational use.",
    tools: ["MySQL", "PostgreSQL", "Supabase", "SQLite", "TanStack Query", "Recharts", "Reporting"],
    proof: ["SIMANIK medical record flow", "Madani Nidham academic modules", "Beresin.click SaaS concept"],
    links: [
      { label: "Beresin", href: "https://github.com/Mubax5/Beresin" },
      { label: "SIMANIK", href: "https://github.com/Mubax5/SIMANIK" },
    ],
  },
  {
    title: "Visual Design",
    slug: "visual-design",
    summary: "Professional visual design for brand systems, event campaigns, social layouts, posters, and institutional communication.",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Adobe After Effects", "Figma", "Canva"],
    proof: ["OSBA", "Piforia", "BEM PNC", "Ifest", "PKKMB", "Diesnatalis PNC", "Brand identity systems"],
    links: [
      { label: "Visual Creative", href: "/porto-visual" },
      { label: "Design Archive", href: "/porto-visual/design" },
    ],
  },
  {
    title: "UI/UX & Creative Direction",
    slug: "ui-ux-creative-direction",
    summary: "Interface exploration, layout systems, brand consistency, information hierarchy, and polished visual direction.",
    tools: ["Figma", "Adobe Family", "Design Systems", "Wireframe", "Prototype", "Motion Direction"],
    proof: ["SIAKAD PNC visual exploration", "Madani Montessori design direction", "Portfolio interaction design"],
    links: [
      { label: "UI Exploration", href: "/porto-visual/ui-visual-exploration" },
      { label: "Portfolio", href: "https://github.com/Mubax5/portfolio-mubacs-v.2.0" },
    ],
  },
];

export function getSkill(slug?: string) {
  return skills.find((skill) => skill.slug === slug);
}
