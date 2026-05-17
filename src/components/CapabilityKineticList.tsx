import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { skills } from "../data/skills";
import { ToolBadge } from "./ToolLogo";

gsap.registerPlugin(ScrollTrigger);

export default function CapabilityKineticList() {
  const ref = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-skill-row]",
        { autoAlpha: 0, y: 76, filter: "blur(30px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.35,
          stagger: 0.09,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 84%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      gsap.to("[data-skill-row]", {
        y: (i) => (i % 2 === 0 ? -28 : -14),
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative z-10 px-5 pb-24 pt-6 md:px-12 md:pb-28 md:pt-8">
      <p className="mono-label mb-12">05 / Skills</p>
      <div className="space-y-0">
        {skills.map((item, i) => (
          <Link
            key={item.slug}
            to={`/skills/${item.slug}`}
            data-skill-row
            className="group relative block overflow-hidden border-b border-base-900 py-6 transition-colors hover:border-base-500"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            data-cursor-hover
            data-cursor-label="EXPLORE"
          >
            <div className={`grid gap-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:grid-cols-[0.84fr_0.62fr_auto] md:items-center ${hovered === i ? "translate-x-2 text-white md:translate-x-5" : hovered !== null ? "text-base-600" : "text-base-200"}`}>
              <span className="text-4xl font-semibold uppercase leading-none transition-colors sm:text-5xl md:text-6xl">{item.title}</span>
              <span className="max-w-md text-sm leading-relaxed text-base-500">{item.summary}</span>
              <span className="hidden font-mono text-xs text-base-600 md:block">View</span>
            </div>
            <div data-text-motion-ignore className={`mt-4 flex flex-wrap gap-2 overflow-hidden transition-all duration-700 ${hovered === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
              {item.tools.map((tool) => (
                <span key={tool} className="border border-white/20 bg-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-black">
                  <ToolBadge tool={tool} tone="dark" />
                </span>
              ))}
            </div>
            <div className="mt-4 h-px bg-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ width: hovered === i ? "100%" : "0%" }} />
          </Link>
        ))}
      </div>
    </section>
  );
}
