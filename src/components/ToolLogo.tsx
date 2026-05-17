import { useState } from "react";

const simpleIcon = (slug: string, monochrome = false) => ({ type: "simple" as const, slug, monochrome });
const devIcon = (path: string) => ({ type: "devicon" as const, path });
const externalIcon = (src: string) => ({ type: "external" as const, src });

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const ADOBE_PRODUCT_ICON = "https://main--cc--adobecom.aem.live/cc-shared/assets/img/product-icons/svg";

const iconSources: Record<string, ReturnType<typeof simpleIcon> | ReturnType<typeof devIcon> | ReturnType<typeof externalIcon>> = {
  React: devIcon("react/react-original.svg"),
  "Next.js": simpleIcon("nextdotjs", true),
  TypeScript: devIcon("typescript/typescript-original.svg"),
  Vite: devIcon("vitejs/vitejs-original.svg"),
  "Tailwind CSS": devIcon("tailwindcss/tailwindcss-original.svg"),
  Framer: simpleIcon("framer", true),
  "Framer Motion": simpleIcon("framer", true),
  GSAP: simpleIcon("greensock"),
  Laravel: devIcon("laravel/laravel-original.svg"),
  PHP: devIcon("php/php-original.svg"),
  Sanctum: devIcon("laravel/laravel-original.svg"),
  Filament: simpleIcon("filament"),
  Blade: devIcon("laravel/laravel-original.svg"),
  "REST API": simpleIcon("openapiinitiative"),
  DomPDF: simpleIcon("googledocs"),
  "C#": devIcon("csharp/csharp-original.svg"),
  "Windows Forms": devIcon("windows11/windows11-original.svg"),
  ".NET Framework": devIcon("dot-net/dot-net-original.svg"),
  Python: devIcon("python/python-original.svg"),
  CustomTkinter: devIcon("python/python-original.svg"),
  OpenCV: devIcon("opencv/opencv-original.svg"),
  SQLite: devIcon("sqlite/sqlite-original.svg"),
  MySQL: devIcon("mysql/mysql-original.svg"),
  PostgreSQL: devIcon("postgresql/postgresql-original.svg"),
  Supabase: devIcon("supabase/supabase-original.svg"),
  "TanStack Query": simpleIcon("reactquery"),
  Recharts: simpleIcon("chartdotjs"),
  Reporting: simpleIcon("googleanalytics"),
  Cloudflare: simpleIcon("cloudflare"),
  Netlify: simpleIcon("netlify"),
  "Google Cloud": devIcon("googlecloud/googlecloud-original.svg"),
  Git: devIcon("git/git-original.svg"),
  GitHub: simpleIcon("github", true),
  Linux: devIcon("linux/linux-original.svg"),
  Docker: devIcon("docker/docker-original.svg"),
  "VS Code": devIcon("vscode/vscode-original.svg"),
  Postman: devIcon("postman/postman-original.svg"),
  NPM: devIcon("npm/npm-original-wordmark.svg"),
  JSON: simpleIcon("json", true),
  Notion: simpleIcon("notion", true),
  Flutter: devIcon("flutter/flutter-original.svg"),
  Dart: devIcon("dart/dart-original.svg"),
  Firebase: devIcon("firebase/firebase-plain.svg"),
  "Adobe Photoshop": externalIcon(`${ADOBE_PRODUCT_ICON}/photoshop-64.svg`),
  "Adobe Illustrator": externalIcon(`${ADOBE_PRODUCT_ICON}/illustrator-64.svg`),
  "Adobe Premiere Pro": externalIcon(`${ADOBE_PRODUCT_ICON}/premiere-pro-64.svg`),
  "Adobe After Effects": externalIcon(`${ADOBE_PRODUCT_ICON}/after-effects-64.svg`),
  "Adobe Dimension": externalIcon(`${ADOBE_PRODUCT_ICON}/dimension-64.svg`),
  Figma: devIcon("figma/figma-original.svg"),
  Blender: devIcon("blender/blender-original.svg"),
  Canva: simpleIcon("canva"),
};

function iconSrc(tool: string, tone: "light" | "dark") {
  const source = iconSources[tool];
  if (!source) return undefined;
  if (source.type === "devicon") return `${DEVICON}/${source.path}`;
  if (source.type === "external") return source.src;
  if (!source.monochrome) return `https://cdn.simpleicons.org/${source.slug}`;
  const color = tone === "dark" ? "111111" : "f5f5f5";
  return `https://cdn.simpleicons.org/${source.slug}/${color}`;
}

interface ToolLogoProps {
  tool: string;
  tone?: "light" | "dark";
  className?: string;
}

export default function ToolLogo({ tool, tone = "light", className = "" }: ToolLogoProps) {
  const [failed, setFailed] = useState(false);
  const src = iconSrc(tool, tone);

  return (
    <span className={`grid h-5 w-5 shrink-0 place-items-center ${className}`} aria-hidden="true">
      {src && !failed ? (
        <img
          src={src}
          alt=""
          className="h-full w-full object-contain"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <svg viewBox="0 0 24 24" className="h-full w-full" fill="none">
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
    </span>
  );
}

export function ToolBadge({ tool, tone = "light" }: { tool: string; tone?: "light" | "dark" }) {
  return (
    <span className={`inline-flex min-w-0 items-center gap-2 ${tone === "dark" ? "text-black" : "text-base-300"}`}>
      <ToolLogo tool={tool} tone={tone} />
      <span className="min-w-0 truncate">{tool}</span>
    </span>
  );
}
