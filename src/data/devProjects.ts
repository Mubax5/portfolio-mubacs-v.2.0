export interface DevProject {
  id: number;
  title: string;
  slug: string;
  type: string;
  role: string;
  year: number;
  stack: string[];
  description: string;
  features: string[];
  projectUrl: string;
  overview?: string;
  problem?: string;
  solution?: string;
  flow?: string;
}

export const devProjects: DevProject[] = [
  {
    id: 1,
    title: "Madani Montessori Landing Page & CMS",
    slug: "madani-montessori-cms",
    type: "Website + Admin CMS",
    role: "Full-stack Web Developer / UI Implementation",
    year: 2026,
    stack: ["Laravel", "Blade", "Tailwind CSS", "Filament", "MySQL", "Vite"],
    description:
      "A premium school website and CMS system for managing pages, programs, gallery, agenda, contact, and WhatsApp CTA without touching code.",
    features: [
      "Public multipage website",
      "Admin CMS",
      "Dynamic content management",
      "Gallery management",
      "Agenda management",
      "FAQ management",
      "Contact management",
      "WhatsApp CTA",
      "Responsive interface",
    ],
    projectUrl: "#",
    overview:
      "A complete web presence for Madani Montessori Islamic School \u2014 a public-facing website paired with a powerful content management system built on Filament.",
    problem:
      "The school needed a professional website that staff could update without developer help, covering programs, gallery, agenda, and parent communication.",
    solution:
      "Built a Laravel + Filament CMS with Tailwind-styled frontend, giving non-technical staff full control over every content section through an intuitive admin panel.",
    flow:
      "Admin logs in \u2192 manages content sections \u2192 changes reflect on the public site instantly. Parents browse programs, gallery, and agenda, and reach out via WhatsApp CTA.",
  },
  {
    id: 2,
    title: "SIMANIK",
    slug: "simanik",
    type: "Clinic Management Desktop App",
    role: "Desktop App Developer / System Design",
    year: 2026,
    stack: ["C#", "Windows Forms", ".NET Framework 4.7.2", "MySQL"],
    description:
      "A clinic management desktop system covering reservation, admin verification, queue, doctor examination, prescription, medical records, dashboards, and reports.",
    features: [
      "Multi-role login",
      "Reservation",
      "Check-in",
      "Queue",
      "Doctor examination",
      "Prescription",
      "Medical record",
      "Dashboard",
      "Operational reports",
    ],
    projectUrl: "#",
    overview:
      "A desktop application designed to streamline clinic operations from patient reservation through examination, prescription, and reporting.",
    problem:
      "Clinics needed an integrated system to manage patient flow, medical records, and reporting without relying on paper or fragmented tools.",
    solution:
      "Developed a multi-role Windows Forms application with MySQL backend, covering the entire patient journey from reservation to report generation.",
    flow:
      "Patient reserves \u2192 Admin verifies \u2192 Queue managed \u2192 Doctor examines \u2192 Prescription issued \u2192 Records saved \u2192 Reports generated.",
  },
  {
    id: 3,
    title: "Beresin.click",
    slug: "beresin-click",
    type: "AI Admin SaaS Concept",
    role: "Product Concept / SaaS System / AI Workflow",
    year: 2026,
    stack: ["Next.js", "Supabase", "PostgreSQL", "AI Agent Concept"],
    description:
      "An AI admin autopilot concept for Indonesian freelancers and UMKM, designed to manage invoices, reminders, deadlines, morning briefs, and business admin.",
    features: [
      "Invoice generator",
      "Payment reminder",
      "Morning brief",
      "Client management",
      "Deadline tracking",
      "AI recommendation",
      "WhatsApp/email workflow",
    ],
    projectUrl: "#",
    overview:
      "A SaaS concept that acts as an AI-powered admin assistant, automating repetitive business tasks for freelancers and small businesses in Indonesia.",
    problem:
      "Indonesian freelancers and UMKM owners spend too much time on invoicing, client follow-ups, and admin tasks instead of their core work.",
    solution:
      "Designed an AI autopilot system that handles invoicing, reminders, briefs, and client management through automated workflows with WhatsApp and email integration.",
    flow:
      "User onboards \u2192 AI scans tasks \u2192 Generates invoices \u2192 Sends reminders \u2192 Delivers morning brief \u2192 Tracks deadlines \u2192 Recommends actions.",
  },
  {
    id: 4,
    title: "Stoqi / KasirMitra POS",
    slug: "stoqi-kasirmitra-pos",
    type: "POS + Inventory SaaS",
    role: "Product System / Dashboard Design",
    year: 2026,
    stack: ["Web App", "PWA", "PostgreSQL", "QRIS Flow"],
    description:
      "A POS and inventory SaaS concept for UMKM, focused on fast transactions, stock movement, QRIS records, reports, and owner-friendly insights.",
    features: [
      "Fast transaction",
      "Stock auto deduction",
      "QRIS record",
      "Daily reports",
      "Multi-role",
      "Multi-outlet",
      "Owner dashboard",
      "WhatsApp report",
    ],
    projectUrl: "#",
    overview:
      "A point-of-sale and inventory management SaaS designed for Indonesian small businesses, emphasizing speed, simplicity, and actionable owner insights.",
    problem:
      "UMKM owners struggle with slow POS systems, manual stock tracking, and lack of business visibility across outlets.",
    solution:
      "Built a PWA-based POS with automatic stock deduction, QRIS payment tracking, multi-outlet support, and an owner dashboard with WhatsApp-delivered reports.",
    flow:
      "Cashier scans items \u2192 Transaction processed \u2192 Stock auto-deducted \u2192 QRIS recorded \u2192 Daily report generated \u2192 Owner receives WhatsApp summary.",
  },
];
