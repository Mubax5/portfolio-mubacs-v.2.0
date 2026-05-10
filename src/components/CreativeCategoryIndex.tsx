import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { creativeCategories } from "../data/creativeCategories";

gsap.registerPlugin(ScrollTrigger);

export default function CreativeCategoryIndex() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo("[data-cat-row]", { autoAlpha: 0, y: 72, filter: "blur(28px)" }, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1.35, stagger: 0.1, ease: "power4.out", scrollTrigger: { trigger: ref.current, start: "top 84%", toggleActions: "play none none none", once: true } });
      gsap.to("[data-cat-row]", { y: (i) => (i % 2 === 0 ? -28 : -14), ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 1.4 } });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="relative z-10 px-5 py-20 md:px-12 md:py-28">
      <div className="mb-10 md:mb-16">
        <p className="mono-label mb-2">02 / Creative Work</p>
        <h1 className="text-section">VISUAL CREATIVE</h1>
      </div>
      <div className="space-y-0">
        {creativeCategories.map((cat, i) => (
          <Link key={cat.slug} to={`/porto-visual/${cat.slug}`} data-cat-row className="group grid gap-4 border-b border-base-900 py-7 transition-colors hover:border-base-600 md:grid-cols-[1fr_22rem] md:items-center" data-cursor-label="OPEN">
            <div className="flex items-start gap-5 md:items-center md:gap-8">
              <span className="font-mono text-[10px] text-base-600">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-section text-base-300 group-hover:text-white transition-colors">{cat.title}</h3>
            </div>
            <p className="max-w-sm text-sm text-base-600">{cat.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
