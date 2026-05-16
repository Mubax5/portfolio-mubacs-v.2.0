import { useState } from "react";

const iconSlugs: Record<string, string> = {
  React: "react",
  "Next.js": "nextdotjs",
  TypeScript: "typescript",
  Vite: "vite",
  "Tailwind CSS": "tailwindcss",
  "Framer Motion": "framer",
  GSAP: "greensock",
  Laravel: "laravel",
  PHP: "php",
  Sanctum: "laravel",
  Filament: "filament",
  Blade: "laravel",
  "REST API": "openapiinitiative",
  DomPDF: "googledocs",
  "C#": "csharp",
  "Windows Forms": "windows",
  ".NET Framework": "dotnet",
  Python: "python",
  CustomTkinter: "python",
  OpenCV: "opencv",
  SQLite: "sqlite",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  Supabase: "supabase",
  "TanStack Query": "reactquery",
  Recharts: "chartdotjs",
  Reporting: "googleanalytics",
  "Adobe Photoshop": "adobephotoshop",
  "Adobe Illustrator": "adobeillustrator",
  "Adobe Premiere Pro": "adobepremierepro",
  "Adobe After Effects": "adobeaftereffects",
  Figma: "figma",
  Canva: "canva",
  "Adobe Family": "adobe",
  "Design Systems": "figma",
  Wireframe: "figma",
  Prototype: "figma",
  "Motion Direction": "framer",
};

function mono(tool: string) {
  return tool
    .replace(/[^a-z0-9+#. ]/gi, "")
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

interface ToolLogoProps {
  tool: string;
  tone?: "light" | "dark";
  className?: string;
}

export default function ToolLogo({ tool, tone = "light", className = "" }: ToolLogoProps) {
  const [failed, setFailed] = useState(false);
  const slug = iconSlugs[tool];
  const color = tone === "dark" ? "111111" : "d4d4d8";

  return (
    <span className={`grid h-5 w-5 shrink-0 place-items-center ${className}`} aria-hidden="true">
      {slug && !failed ? (
        <img
          src={`https://cdn.simpleicons.org/${slug}/${color}`}
          alt=""
          className="h-full w-full object-contain"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <svg viewBox="0 0 24 24" className="h-full w-full" fill="none">
          <rect x="3.5" y="3.5" width="17" height="17" stroke="currentColor" strokeWidth="1.5" />
          <text x="12" y="15.2" textAnchor="middle" className="fill-current font-mono text-[8px] font-semibold">
            {mono(tool)}
          </text>
        </svg>
      )}
    </span>
  );
}

export function ToolBadge({ tool, tone = "light" }: { tool: string; tone?: "light" | "dark" }) {
  return (
    <span className={`inline-flex items-center gap-2 ${tone === "dark" ? "text-black" : "text-base-300"}`}>
      <ToolLogo tool={tool} tone={tone} />
      <span>{tool}</span>
    </span>
  );
}
