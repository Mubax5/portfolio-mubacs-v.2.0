import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function EditorialGallery() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-index-panel]",
        { autoAlpha: 0, y: 84, filter: "blur(32px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.45,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 82%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      gsap.to("[data-index-panel]", {
        y: (i) => (i === 0 ? -38 : -20),
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.45,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative z-10 bg-white px-5 py-20 text-black md:px-12 md:py-24">
      <p className="mono-label mb-10 !text-black/50">06 / Index</p>
      <div className="grid min-h-[72vh] gap-px bg-black/10 md:grid-cols-2">
        <Link to="/porto-dev" data-index-panel className="group relative flex min-h-[52vh] flex-col justify-end bg-white p-6 transition-colors hover:bg-black hover:text-white md:p-10" data-cursor-label="ENTER">
          <div className="absolute left-6 top-6 font-mono text-xs uppercase tracking-[0.2em] text-black/45 transition-colors group-hover:text-white/50 md:left-10 md:top-10">Development</div>
          <div>
            <h2 className="text-section !text-current transition-colors">PORTO DEV</h2>
            <p className="mt-4 max-w-sm text-black/55 transition-colors group-hover:text-white/65">Systems, dashboards, CMS, SaaS concepts, and interface builds.</p>
          </div>
        </Link>
        <Link to="/porto-visual" data-index-panel className="group relative flex min-h-[52vh] flex-col justify-end bg-white p-6 transition-colors hover:bg-black hover:text-white md:p-10" data-cursor-label="ENTER">
          <div className="absolute left-6 top-6 font-mono text-xs uppercase tracking-[0.2em] text-black/45 transition-colors group-hover:text-white/50 md:left-10 md:top-10">Creative</div>
          <div>
            <h2 className="text-section !text-current transition-colors">VISUAL CREATIVE</h2>
            <p className="mt-4 max-w-sm text-black/55 transition-colors group-hover:text-white/65">Design archives, visual systems, GMV, layout, and creative explorations.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
