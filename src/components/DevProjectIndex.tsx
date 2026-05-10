import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { devProjects } from "../data/devProjects";

gsap.registerPlugin(ScrollTrigger);

export default function DevProjectIndex() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo("[data-project-row]", { autoAlpha: 0, y: 72, filter: "blur(28px)" }, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1.35, stagger: 0.1, ease: "power4.out", scrollTrigger: { trigger: ref.current, start: "top 84%", toggleActions: "play none none none", once: true } });
      gsap.to("[data-project-row]", { y: (i) => (i % 2 === 0 ? -28 : -14), ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 1.4 } });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="relative z-10 px-5 py-20 md:px-12 md:py-28">
      <div className="mb-10 md:mb-16">
        <p className="mono-label mb-2">02 / Development Work</p>
        <h1 className="text-section">PORTO DEV</h1>
      </div>
      <div className="space-y-0">
        {devProjects.map((p, i) => (
          <Link key={p.slug} to={`/porto-dev/${p.slug}`} data-project-row className="group relative grid gap-4 border-b border-base-900 py-7 transition-colors hover:border-base-600 md:grid-cols-[40px_1fr_auto] md:items-center md:gap-8" data-cursor-label="VIEW">
            <span className="font-mono text-[10px] text-base-600">{String(i + 1).padStart(2, "0")}</span>
            <div className="flex-1">
              <h3 className="break-words text-xl font-semibold uppercase text-white transition-colors group-hover:text-base-200">{p.title}</h3>
              <p className="mt-1 text-sm text-base-500 group-hover:text-base-400 transition-colors">{p.type}</p>
              <p className="mt-3 max-w-lg text-sm text-base-600 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">{p.description}</p>
            </div>
            <div className="hidden text-right md:block">
              <p className="font-mono text-[10px] text-base-600">{p.year}</p>
              <p className="mt-1 font-mono text-[10px] text-base-600">{p.role.split(" / ")[0]}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
