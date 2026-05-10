export interface CreativeWork {
  title: string;
  description?: string;
  image?: string;
  video?: string;
}

export interface CreativeOrganization {
  id: number;
  name: string;
  slug: string;
  category: string;
  role: string;
  year: string;
  description: string;
  visualDirection?: string;
  tools?: string[];
  works: CreativeWork[];
}

export const creativeOrganizations: CreativeOrganization[] = [
  {
    id: 1,
    name: "Madani Montessori Islamic School",
    slug: "madani-montessori",
    category: "design",
    role: "Visual Designer",
    year: "2025 \u2014 2026",
    description:
      "Design archive for school communication, brand consistency, and organized visual material.",
    visualDirection:
      "Clean, warm, and educational \u2014 maintaining brand consistency across all school communication materials.",
    tools: ["Figma", "Adobe Illustrator", "Canva"],
    works: [
      {
        title: "Admission Campaign Visual",
        description:
          "A series of visuals for the annual admission campaign, designed for print and social media.",
      },
      {
        title: "Program Announcement Layout",
        description:
          "Structured layouts for announcing school programs, extracurriculars, and events.",
      },
      {
        title: "School Information Post",
        description:
          "Informational post designs for parents, covering schedules, policies, and updates.",
      },
      {
        title: "Brand Guideline Sheet",
        description:
          "A condensed brand guideline for internal use, covering logo usage, colors, and typography.",
      },
    ],
  },
  {
    id: 2,
    name: "Organization A",
    slug: "organization-a",
    category: "design",
    role: "Visual Designer",
    year: "2025",
    description: "Replace this with real organization details.",
    works: [],
  },
  {
    id: 3,
    name: "Organization B",
    slug: "organization-b",
    category: "design",
    role: "Visual Designer",
    year: "2025",
    description: "Replace this with real organization details.",
    works: [],
  },
  {
    id: 4,
    name: "Community C",
    slug: "community-c",
    category: "gmv",
    role: "Video Editor",
    year: "2025",
    description:
      "Short visual editing archive. Creative video edits for community content.",
    works: [],
  },
  {
    id: 5,
    name: "Institution D",
    slug: "institution-d",
    category: "social-media",
    role: "Social Media Designer",
    year: "2025 \u2014 2026",
    description:
      "Social media layout archive for institutional communication.",
    works: [],
  },
];
