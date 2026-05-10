import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { devProjects } from "../data/devProjects";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  ...devProjects.map((p) => ({ id: p.slug, title: p.title, role: p.role, year: p.year, stack: p.stack.join(" / "), desc: p.description, link: `/porto-dev/${p.slug}` })),
  { id: "creative", title: "Creative Visual Archive", role: "Visual Designer", year: 2026, stack: "Design / GMV / Brand / Social", desc: "Design archives, layouts, brand visuals, and creative explorations made for clarity and visual rhythm.", link: "/porto-visual" },
];

export default function FeaturedProjectSlider() {
  const [index, setIndex] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nav = useNavigate();

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setControlsVisible(entry.isIntersecting),
      { rootMargin: "-18% 0px -18% 0px", threshold: 0.08 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-feature-copy]",
        { y: 120 },
        {
          y: -90,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.25,
          },
        }
      );

      gsap.fromTo(
        "[data-feature-visual]",
        { y: -90, rotate: -2 },
        {
          y: 90,
          rotate: 2,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.6,
          },
        }
      );

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const go = (dir: number) => {
    const next = (index + dir + slides.length) % slides.length;
    if (!containerRef.current) { setIndex(next); return; }
    const content = containerRef.current.querySelector("[data-slider-content]");
    gsap.to(content, { opacity: 0, y: dir > 0 ? -40 : 40, duration: 0.35, ease: "power2.in", onComplete: () => {
      setIndex(next);
      gsap.fromTo(content, { opacity: 0, y: dir > 0 ? 40 : -40 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });
    }});
  };

  const s = slides[index];
  const controls = (
    <div className={`fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-4 border border-base-800 bg-black/80 px-4 py-3 backdrop-blur-md transition-all duration-500 md:bottom-8 ${controlsVisible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"}`}>
      <button onClick={() => go(-1)} className="flex h-11 w-11 items-center justify-center border border-base-700 text-base-300 transition-colors hover:border-white hover:text-white" aria-label="Previous project" data-cursor-label="PREV">
        <ArrowLeft size={18} strokeWidth={1.6} />
      </button>
      <div className="h-px w-24 bg-base-800">
        <div className="h-full bg-white transition-all duration-500" style={{ width: `${((index + 1) / slides.length) * 100}%` }} />
      </div>
      <button onClick={() => go(1)} className="flex h-11 w-11 items-center justify-center border border-base-700 text-base-300 transition-colors hover:border-white hover:text-white" aria-label="Next project" data-cursor-label="NEXT">
        <ArrowRight size={18} strokeWidth={1.6} />
      </button>
    </div>
  );

  return (
    <>
      <section ref={sectionRef} className="relative z-10 flex min-h-screen items-center overflow-hidden bg-black/60 px-5 py-28 md:px-12 md:py-40">
        <div className="grid w-full gap-10 md:grid-cols-2">
          <div ref={containerRef} data-feature-copy className="will-change-transform">
            <p className="mono-label mb-6">03 / Featured Work</p>
            <div data-slider-content>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-base-500">{String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</p>
              <h2 className="mb-4 text-section max-w-xl">{s.title}</h2>
              <div className="mb-4 flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-base-400">
                <span>{s.role}</span><span>{s.year}</span>
              </div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-base-600">{s.stack}</p>
              <p className="mb-8 max-w-md text-base text-base-300">{s.desc}</p>
              <button onClick={() => nav(s.link)} className="mono-label border border-base-700 px-6 py-3 text-base-300 transition-colors hover:border-white hover:text-white" data-cursor-label="VIEW">View case</button>
            </div>
          </div>
          <div data-feature-visual className="relative hidden aspect-[4/3] items-end justify-between overflow-hidden border border-base-800 bg-base-950 p-8 will-change-transform md:flex">
            <div className="absolute inset-0 opacity-35" style={{ backgroundImage: "linear-gradient(var(--base-800) 1px, transparent 1px), linear-gradient(90deg, var(--base-800) 1px, transparent 1px)", backgroundSize: "52px 52px" }} />
            <div className="relative z-10">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-base-500">Selected Case</p>
              <h3 className="max-w-md text-4xl font-semibold uppercase leading-none text-white">{s.title}</h3>
            </div>
            <p className="relative z-10 font-mono text-[10px] uppercase tracking-[0.24em] text-base-500">{String(index + 1).padStart(2, "0")}</p>
          </div>
        </div>
      </section>
      {typeof document !== "undefined" ? createPortal(controls, document.body) : controls}
    </>
  );
}
