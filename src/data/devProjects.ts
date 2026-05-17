export interface ProjectImage {
  src: string;
  title: string;
  type?: "public" | "admin" | "app";
}

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
  thumbnail: string;
  gallery: ProjectImage[];
  repoUrl: string;
  liveUrl?: string;
  projectUrl: string;
  ctaLabel: string;
  overview: string;
  problem: string;
  solution: string;
  flow: string;
}

export const devProjects: DevProject[] = [
  {
    id: 1,
    title: "Madani Nidham",
    slug: "madani-nidham",
    type: "Academic Information System",
    role: "Full-stack Developer / Product Interface",
    year: 2026,
    stack: ["Laravel 11", "Next.js 14", "Sanctum", "Tailwind CSS", "TanStack Query", "Recharts", "MySQL"],
    description:
      "Academic system for TKIT Madani Montessori — admin, teachers, parents, enrollment, attendance, development journals, report cards, agenda, and notifications.",
    thumbnail: "/img/madani-nidham/02-dashboard-page.webp",
    gallery: [
      { src: "/img/madani-nidham/02-dashboard-page.webp", title: "Dashboard", type: "app" },
      { src: "/img/madani-nidham/03-murid-page.webp", title: "Student Data", type: "app" },
      { src: "/img/madani-nidham/04-absensi-page.webp", title: "Attendance", type: "app" },
      { src: "/img/madani-nidham/05-jurnal-page.webp", title: "Development Journal", type: "app" },
      { src: "/img/madani-nidham/09-raport-page.webp", title: "Report Card PDF", type: "app" },
      { src: "/img/madani-nidham/14-ppdb-page.webp", title: "PPDB", type: "app" },
    ],
    repoUrl: "https://github.com/Mubax5/Madani-Nidham",
    projectUrl: "https://github.com/Mubax5/Madani-Nidham",
    ctaLabel: "Open GitHub",
    features: [
      "Admin, teacher, and parent roles",
      "School statistics dashboard",
      "Student, class, and user management",
      "Batch attendance and recap",
      "Development journals and Montessori areas",
      "PDF report cards",
      "Announcements, agenda, and notifications",
      "Public enrollment to student conversion",
    ],
    overview:
      "Academic system for TKIT Madani Montessori Islamic School. Initial phase combines a Laravel API, Next.js dashboard, and public enrollment integration.",
    problem:
      "School activities like attendance, journals, report cards, agenda, and enrollment needed a single source of truth for admin, teachers, and parents.",
    solution:
      "End-to-end system with Laravel API, Sanctum auth, Next.js dashboard, PDF reporting, and core academic modules ready for expansion.",
    flow:
      "Admin manages school data -> Teachers fill attendance and journals -> Parents view information -> Enrollment reviewed and converted to student records.",
  },
  {
    id: 2,
    title: "Madani Montessori Website",
    slug: "madani-montessori-website",
    type: "Landing Page + Admin CMS",
    role: "Full-stack Web Developer / CMS Builder",
    year: 2026,
    stack: ["Laravel", "Blade", "Tailwind CSS", "Filament", "MySQL", "Vite"],
    description:
      "Official website for Madani Montessori Islamic School — public pages, gallery, agenda, contact, enrollment, and an Admin CMS for code-free content updates.",
    thumbnail: "/img/madani-montes-cms/01-hero-landing-page.webp",
    gallery: [
      { src: "/img/madani-montes-cms/01-hero-landing-page.webp", title: "Hero Landing", type: "public" },
      { src: "/img/madani-montes-cms/02-about-page.webp", title: "About Page", type: "public" },
      { src: "/img/madani-montes-cms/03-program-page.webp", title: "Program Page", type: "public" },
      { src: "/img/madani-montes-cms/04-agenda-page.webp", title: "Agenda Page", type: "public" },
      { src: "/img/madani-montes-cms/05-galeri-page.webp", title: "Gallery Page", type: "public" },
      { src: "/img/madani-montes-cms/06-kontak-page.webp", title: "Contact Page", type: "public" },
      { src: "/img/madani-montes-cms/07-ppdb-page.webp", title: "PPDB Page", type: "public" },
      { src: "/img/madani-montes-cms/11-admin-dashboard-page.webp", title: "Admin Dashboard", type: "admin" },
      { src: "/img/madani-montes-cms/14-admin-pendaftaran-page.webp", title: "Admin Registration", type: "admin" },
      { src: "/img/madani-montes-cms/15-admin-edit-image-page.webp", title: "Admin Image Editor", type: "admin" },
    ],
    repoUrl: "https://github.com/Mubax5/madani-montessori-landing-page",
    liveUrl: "https://madanimontessori.online/",
    projectUrl: "https://madanimontessori.online/",
    ctaLabel: "Visit Website",
    features: [
      "Multipage public website",
      "Admin login and dashboard",
      "Dynamic hero, program, agenda, gallery, FAQ, and contact content",
      "PPDB and interest form",
      "WhatsApp CTA template",
      "Image upload and replacement",
      "Mobile, tablet, and desktop responsive",
    ],
    overview:
      "A complete web presence for Madani Montessori Islamic School, combining an elegant public website with a CMS so school staff can manage content independently.",
    problem:
      "The school needed a professional website for parents while keeping routine content updates manageable by non-technical staff.",
    solution:
      "Built a Laravel website and Admin CMS with structured content modules for pages, programs, agenda, gallery, contact, registration data, and WhatsApp calls to action.",
    flow:
      "Admin updates CMS content -> Public website reflects the latest information -> Parents explore programs, agenda, gallery, PPDB, and contact the school.",
  },
  {
    id: 3,
    title: "Fish Sorting Monitor System",
    slug: "fish-sorting-monitor-system",
    type: "Industrial Monitoring App",
    role: "Desktop UI Developer / System Integration",
    year: 2026,
    stack: ["Python", "Tkinter", "OpenCV", "SQLite", "TCP Socket", "Raspberry Pi", "JSON"],
    description:
      "PC dashboard for monitoring a fish sorting machine — production data, camera feed, SQLite events, and Raspberry Pi commands over TCP WiFi.",
    thumbnail: "/img/sarva/01-dashboard-stopped.webp",
    gallery: [
      { src: "/img/sarva/01-dashboard-stopped.webp", title: "Dashboard Standby", type: "app" },
      { src: "/img/sarva/02-dashboard-started.webp", title: "Dashboard Running", type: "app" },
      { src: "/img/sarva/03-settings-camera.webp", title: "Camera Settings", type: "app" },
      { src: "/img/sarva/04-settings-conveyor-defaults.webp", title: "Conveyor Defaults", type: "app" },
      { src: "/img/sarva/06-settings-data-tools.webp", title: "Data Tools", type: "app" },
      { src: "/img/sarva/08-settings-raspi-wifi.webp", title: "Raspi WiFi", type: "app" },
    ],
    repoUrl: "https://github.com/Mubax5/ui-sorting-fish-sarva",
    projectUrl: "https://github.com/Mubax5/ui-sorting-fish-sarva",
    ctaLabel: "Open GitHub",
    features: [
      "Machine status dashboard",
      "Camera capture panel",
      "Box manager and reject bin",
      "Production summary",
      "Velocity manager",
      "SQLite event logging",
      "TCP JSON bridge to Raspberry Pi",
      "Camera, conveyor, database, and WiFi settings",
    ],
    overview:
      "A PC dashboard for operators, technicians, and supervisors running a fish sorting machine. The app monitors production, machine events, camera state, and Raspberry Pi control.",
    problem:
      "Operators needed a clear interface to monitor production, machine state, conveyor settings, and field-device communication during sorting.",
    solution:
      "Built a Python desktop monitor with OpenCV camera handling, SQLite logging, settings panels, and TCP commands to a Raspberry Pi bridge for production hardware.",
    flow:
      "Operator starts machine -> PC activates camera and polling -> dashboard logs events -> Raspberry Pi receives system and conveyor commands over WiFi.",
  },
  {
    id: 4,
    title: "Beresin.click",
    slug: "beresin-click",
    type: "AI Admin SaaS Concept",
    role: "Product Designer / SaaS System Planner",
    year: 2026,
    stack: ["Next.js", "Supabase", "PostgreSQL", "AI Agent", "WhatsApp Workflow", "Email Workflow"],
    description:
      "AI Admin Autopilot SaaS concept for freelancers and small businesses — invoices, payment reminders, deadlines, morning briefs, and action recommendations.",
    thumbnail: "/img/beresin.click/01-landing-page.jpg",
    gallery: [
      { src: "/img/beresin.click/01-landing-page.jpg", title: "Landing Page", type: "public" },
    ],
    repoUrl: "https://github.com/Mubax5/Beresin",
    projectUrl: "https://github.com/Mubax5/Beresin",
    ctaLabel: "Open GitHub",
    features: [
      "Invoice generator",
      "Client management",
      "Payment reminders",
      "Deadline tracking",
      "Morning brief",
      "Cashflow summary",
      "AI recommendation",
      "WhatsApp and email workflow",
    ],
    overview:
      "Beresin.click is positioned as an active virtual admin, helping freelancers and small businesses handle routine business administration through dashboard, WhatsApp, and email.",
    problem:
      "Freelancers and UMKM often manage invoices, reminders, transactions, and deadlines manually across too many tools.",
    solution:
      "Designed an AI admin workflow that creates invoices, sends reminders, tracks deadlines, delivers daily briefs, and recommends next actions.",
    flow:
      "User adds clients and work -> system creates invoice and reminders -> AI sends daily brief -> user sees payment, deadline, and cashflow priorities.",
  },
  {
    id: 5,
    title: "SIMANIK",
    slug: "simanik",
    type: "Clinic Management Desktop App",
    role: "Desktop App Developer / System Design",
    year: 2026,
    stack: ["C#", "Windows Forms", ".NET Framework 4.7.2", "MySQL", "Laragon", "MySql.Data"],
    description:
      "Desktop clinic management app — patient reservations, admin verification, check-in, queue, doctor examination, prescriptions, medical records, and reports.",
    thumbnail: "/img/simanik/02-dashboard-admin.webp",
    gallery: [
      { src: "/img/simanik/02-dashboard-admin.webp", title: "Dashboard Admin", type: "admin" },
      { src: "/img/simanik/01-login-page.webp", title: "Login Multi-role", type: "app" },
    ],
    repoUrl: "https://github.com/Mubax5/SIMANIK",
    projectUrl: "https://github.com/Mubax5/SIMANIK",
    ctaLabel: "Open GitHub",
    features: [
      "Login multi-role",
      "Reservation and check-in",
      "Queue management",
      "Doctor examination",
      "Diagnosis and prescription",
      "Medical record",
      "Operational reports",
      "Admin, doctor, and patient dashboard",
    ],
    overview:
      "SIMANIK is a desktop clinic management system covering the full operational flow from patient reservation to doctor examination and reporting.",
    problem:
      "Small clinics often rely on manual administration, making patient data, queue status, medical history, medicine stock, and reports harder to manage.",
    solution:
      "Built a C# Windows Forms app with MySQL data flow for patients, admins, and doctors, including reservation, examination, prescription, records, and reports.",
    flow:
      "Patient reserves -> Admin verifies and checks in -> Doctor examines and gives medicine -> Patient sees history -> Admin reviews reports.",
  },
  {
    id: 6,
    title: "My Official Portfolio",
    slug: "my-official-portfolio",
    type: "Frontend Portfolio",
    role: "Frontend Developer / Personal Branding",
    year: 2024,
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    description:
      "Older personal portfolio published on GitHub Pages, showing early web identity, selected work, and frontend presentation.",
    thumbnail: "/img/my-official-portfolio/01-hero.webp",
    gallery: [
      { src: "/img/my-official-portfolio/01-hero.webp", title: "Hero Section", type: "public" },
      { src: "/img/my-official-portfolio/02-about.webp", title: "About Section", type: "public" },
      { src: "/img/my-official-portfolio/03-skills.webp", title: "Skills Section", type: "public" },
    ],
    repoUrl: "https://github.com/Mubax5/My-Official-Portofolio",
    liveUrl: "https://mubax5.github.io/My-Official-Portofolio/",
    projectUrl: "https://mubax5.github.io/My-Official-Portofolio/",
    ctaLabel: "Visit Website",
    features: [
      "Personal portfolio landing",
      "GitHub Pages deployment",
      "Responsive web layout",
      "Project showcase",
      "Personal brand presentation",
      "Static frontend structure",
    ],
    overview:
      "My Official Portfolio is the previous version of the personal portfolio, kept as part of the development archive and frontend progression.",
    problem:
      "Needed a simple public web presence to introduce skills, identity, and selected work before the current portfolio direction.",
    solution:
      "Built a static frontend portfolio and deployed it through GitHub Pages for a lightweight public showcase.",
    flow:
      "Visitor opens portfolio -> Reviews profile and work sections -> Opens selected links -> Continues to GitHub or contact.",
  },
];
