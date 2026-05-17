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
    summary: "Modern web UI, responsive layout, motion, dashboard interface, landing page, and portfolio implementation.",
    tools: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "Laravel", "Framer", "GSAP"],
    proof: ["Madani Nidham dashboard", "Portfolio v2", "My Official Portfolio", "Madani Montessori website", "Beresin.click landing concept"],
    links: [
      { label: "Madani Nidham", href: "https://github.com/Mubax5/Madani-Nidham" },
      { label: "Portfolio v2", href: "https://github.com/Mubax5/portfolio-mubacs-v.2.0" },
      { label: "Old Portfolio", href: "https://mubax5.github.io/My-Official-Portofolio/" },
    ],
  },
  {
    title: "Backend Development",
    slug: "backend-development-database",
    summary: "API, CMS, auth, roles, relational database, reporting, admin workflows, and product data flow.",
    tools: ["Laravel", "PHP", "Sanctum", "Filament", "REST API", "MySQL", "PostgreSQL", "SQLite", "Supabase"],
    proof: ["Madani Nidham Laravel API", "Madani Montessori CMS", "SIMANIK MySQL flow", "Fish Sorting SQLite logging"],
    links: [
      { label: "Madani CMS", href: "https://github.com/Mubax5/madani-montessori-landing-page" },
      { label: "Madani Nidham", href: "https://github.com/Mubax5/Madani-Nidham" },
      { label: "SIMANIK", href: "https://github.com/Mubax5/SIMANIK" },
    ],
  },
  {
    title: "DevOps",
    slug: "devops",
    summary: "Deployment setup, hosting config, source control workflow, production preview, and release-oriented project setup.",
    tools: ["Cloudflare", "Netlify", "Google Cloud", "Git", "Linux", "Docker"],
    proof: ["Cloudflare Pages / Workers setup", "GitHub Pages deployment", "Vite production build flow", "Repository release hygiene"],
    links: [
      { label: "Portfolio v2", href: "https://github.com/Mubax5/portfolio-mubacs-v.2.0" },
      { label: "Old Portfolio Live", href: "https://mubax5.github.io/My-Official-Portofolio/" },
    ],
  },
  {
    title: "Tools / Technologies",
    slug: "tools-technologies",
    summary: "Daily engineering stack for code, package workflow, API work, documentation, debugging, and handoff.",
    tools: ["Git", "GitHub", "VS Code", "Postman", "NPM", "REST API", "JSON", "Notion"],
    proof: ["Git-based project workflow", "API testing and docs", "Package/build configuration", "Technical documentation"],
    links: [
      { label: "GitHub", href: "https://github.com/Mubax5" },
    ],
  },
  {
    title: "Mobile Development",
    slug: "mobile-development",
    summary: "Cross-platform mobile app workflow, interface slicing, responsive states, and mobile-first product flow.",
    tools: ["Flutter", "Dart", "Firebase", "REST API", "Figma"],
    proof: ["Flutter app workflow", "Mobile UI slicing", "API-connected mobile flow", "Responsive product interface"],
    links: [
      { label: "GitHub", href: "https://github.com/Mubax5" },
    ],
  },
  {
    title: "UI/UX",
    slug: "ui-ux",
    summary: "Interface exploration, wireframe, prototype, design system thinking, layout hierarchy, and interaction direction.",
    tools: ["Figma", "Framer"],
    proof: ["SIAKAD PNC visual exploration", "Yale University of Art redesign case", "Madani Montessori design direction", "Portfolio interaction design"],
    links: [
      { label: "UI Exploration", href: "/porto-visual/ui-visual-exploration" },
      { label: "Portfolio", href: "https://github.com/Mubax5/portfolio-mubacs-v.2.0" },
    ],
  },
  {
    title: "Visual Design",
    slug: "visual-design",
    summary: "Brand visual, campaign asset, poster, social layout, video editing, 3D support, and institutional communication design.",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Adobe After Effects", "Adobe Dimension", "Figma", "Blender"],
    proof: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Adobe Dimension", "Figma", "Blender"],
    links: [
      { label: "Visual Creative", href: "/porto-visual" },
      { label: "Design Archive", href: "/porto-visual/design" },
    ],
  },
];

export function getSkill(slug?: string) {
  return skills.find((skill) => skill.slug === slug);
}
