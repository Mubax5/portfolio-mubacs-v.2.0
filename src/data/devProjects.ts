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
      "Sistem akademik TKIT Madani Montessori untuk admin, guru, orang tua, PPDB, absensi, jurnal perkembangan, raport, agenda, dan notifikasi.",
    thumbnail: "/img/madani-nidham/02-dashboard-page.webp",
    gallery: [
      { src: "/img/madani-nidham/02-dashboard-page.webp", title: "Dashboard", type: "app" },
      { src: "/img/madani-nidham/03-murid-page.webp", title: "Data Murid", type: "app" },
      { src: "/img/madani-nidham/04-absensi-page.webp", title: "Absensi", type: "app" },
      { src: "/img/madani-nidham/05-jurnal-page.webp", title: "Jurnal Perkembangan", type: "app" },
      { src: "/img/madani-nidham/09-raport-page.webp", title: "Raport PDF", type: "app" },
      { src: "/img/madani-nidham/14-ppdb-page.webp", title: "PPDB", type: "app" },
    ],
    repoUrl: "https://github.com/Mubax5/Madani-Nidham",
    projectUrl: "https://github.com/Mubax5/Madani-Nidham",
    ctaLabel: "Open GitHub",
    features: [
      "Role admin, guru, dan orang tua",
      "Dashboard statistik sekolah",
      "Manajemen murid, kelas, dan user",
      "Absensi batch dan rekap",
      "Jurnal perkembangan dan area Montessori",
      "Raport PDF",
      "Pengumuman, agenda, dan notifikasi",
      "PPDB publik sampai convert menjadi murid",
    ],
    overview:
      "Madani Nidham adalah sistem akademik untuk TKIT Madani Montessori Islamic School. Phase awal menggabungkan Laravel API, dashboard Next.js, dan integrasi PPDB publik.",
    problem:
      "Aktivitas sekolah seperti absensi, jurnal perkembangan, raport, agenda, dan PPDB perlu dikelola lebih rapi agar admin, guru, dan orang tua memakai satu sumber data.",
    solution:
      "Membangun sistem end-to-end dengan API Laravel, autentikasi Sanctum, dashboard Next.js, reporting PDF, dan modul akademik inti yang siap dikembangkan.",
    flow:
      "Admin mengelola data sekolah -> Guru mengisi absensi dan jurnal -> Orang tua melihat informasi -> PPDB direview lalu dikonversi menjadi data murid.",
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
      "Website resmi Madani Montessori Islamic School dengan halaman publik, galeri, agenda, kontak, PPDB, dan Admin CMS untuk update konten tanpa ubah kode.",
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
      "Dashboard PC untuk monitoring mesin sorting ikan bersama mitra Sarva Purwokerto, membaca produksi, kamera, event SQLite, dan perintah Raspberry Pi via TCP WiFi.",
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
      "Konsep SaaS AI Admin Autopilot untuk freelancer dan UMKM Indonesia: invoice, reminder pembayaran, deadline, morning brief, dan rekomendasi aksi.",
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
      "Aplikasi desktop manajemen klinik untuk reservasi pasien, verifikasi admin, check-in, antrian, pemeriksaan dokter, resep, medical record, dashboard, dan laporan.",
    thumbnail: "/img/simanik/01-login-page.webp",
    gallery: [
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
];
