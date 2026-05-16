import { Link, useParams } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import FooterContact from "../components/FooterContact";
import { ToolBadge } from "../components/ToolLogo";
import { getSkill, skills } from "../data/skills";

export default function SkillDetailPage() {
  const { slug } = useParams();
  const skill = getSkill(slug) ?? skills[0];
  const next = skills[(skills.findIndex((item) => item.slug === skill.slug) + 1) % skills.length];

  return (
    <main className="relative z-10 px-5 pt-28 md:px-12 md:pt-32">
      <section className="pb-14 md:pb-20">
        <Link to="/" className="mono-label mb-6 block text-base-600 hover:text-white">Back / Main</Link>
        <p className="mono-label mb-4">Skill / Professional Capability</p>
        <h1 className="text-hero break-words">{skill.title}</h1>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-base-300 md:text-2xl">{skill.summary}</p>
      </section>

      <section className="grid gap-6 border-t border-base-900 py-12 md:grid-cols-[0.32fr_1fr] md:gap-8 md:py-16">
        <h2 className="mono-label">Tools</h2>
        <div className="flex flex-wrap gap-3">
          {skill.tools.map((tool) => (
            <span key={tool} className="border border-base-800 bg-black/45 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-base-300">
              <ToolBadge tool={tool} />
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-6 border-t border-base-900 py-12 md:grid-cols-[0.32fr_1fr] md:gap-8 md:py-16">
        <h2 className="mono-label">Proof</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {skill.proof.map((item) => (
            <p key={item} className="border border-base-900 bg-base-950/70 p-4 text-base-300">{item}</p>
          ))}
        </div>
      </section>

      <section className="grid gap-6 border-t border-base-900 py-12 md:grid-cols-[0.32fr_1fr] md:gap-8 md:py-16">
        <h2 className="mono-label">References</h2>
        <div className="flex flex-wrap gap-3">
          {skill.links.map((link) => (
            <a key={link.href} href={link.href} target={link.href.startsWith("/") ? undefined : "_blank"} rel={link.href.startsWith("/") ? undefined : "noreferrer"} className="inline-flex items-center gap-2 border border-base-800 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-base-300 hover:border-white hover:text-white">
              {link.label} <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-5 border-t border-base-900 py-12 md:flex-row md:items-center md:justify-between md:py-16">
        <p className="mono-label text-base-600">Next Skill</p>
        <Link to={`/skills/${next.slug}`} className="mono-label max-w-full break-words text-base-300 hover:text-white">{next.title}</Link>
      </section>
      <FooterContact />
    </main>
  );
}
