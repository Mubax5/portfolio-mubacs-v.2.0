import { useRef } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { devProjects } from "../data/devProjects";

gsap.registerPlugin(ScrollTrigger);

export default function DevProjectIndex() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-project-card]",
        { autoAlpha: 0, y: 72, filter: "blur(28px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.35,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: { trigger: ref.current, start: "top 84%", toggleActions: "play none none none", once: true },
          onComplete: () => {
            ref.current?.querySelectorAll<HTMLElement>("[data-project-card]").forEach((item) => {
              item.style.filter = "none";
            });
          },
        }
      );
      gsap.to("[data-project-card]", {
        y: (i) => (i % 2 === 0 ? -24 : -10),
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 1.4 },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative z-10 px-5 py-20 md:px-12 md:py-28">
      <div className="mb-10 md:mb-16">
        <p className="mono-label mb-2">02 / Development Work</p>
        <h1 className="text-section">PORTO DEV</h1>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {devProjects.map((project, index) => (
          <Link
            key={project.slug}
            to={`/porto-dev/${project.slug}`}
            data-project-card
            className={`group relative overflow-hidden border border-base-900 bg-black/70 transition-[border-color,transform,background-color] duration-700 hover:-translate-y-1 hover:border-base-500 hover:bg-base-950 ${
              index === 0 ? "lg:col-span-2" : ""
            }`}
            data-cursor-label="VIEW"
          >
            <div className={`grid gap-0 ${index === 0 ? "md:grid-cols-[1.2fr_0.8fr]" : ""}`}>
              <div className="relative overflow-hidden bg-base-950">
                <img src={project.thumbnail} alt={`${project.title} preview`} loading="lazy" className="aspect-[1900/935] w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />
                <div className="absolute left-4 top-4 border border-white/15 bg-black/60 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/75 backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="flex flex-col justify-between p-5 md:p-7">
                <div>
                  <p className="mono-label mb-3">{project.type}</p>
                  <h3 className="break-words text-3xl font-semibold uppercase leading-none text-white md:text-5xl">{project.title}</h3>
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-base-400 md:text-base">{project.description}</p>
                </div>

                <div className="mt-8 flex flex-col gap-5 border-t border-base-900 pt-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-base-600">{project.year}</p>
                    <p className="mt-1 text-sm text-base-500">{project.role.split(" / ")[0]}</p>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-base-400 transition-colors group-hover:text-white">
                    View case <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
