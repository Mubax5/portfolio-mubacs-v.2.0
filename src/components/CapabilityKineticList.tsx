import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function CapabilityKineticList() {
  const ref = useRef<HTMLElement>(null);
  const list = [
    { name: "Frontend Interface", link: "/porto-dev" },
    { name: "Product Dashboard", link: "/porto-dev" },
    { name: "CMS Architecture", link: "/porto-dev" },
    { name: "Visual Identity", link: "/porto-visual" },
    { name: "Layout System", link: "/porto-visual" },
    { name: "Creative Direction", link: "/porto-visual" },
    { name: "AI-assisted Workflow", link: "/porto-dev" },
    { name: "Editorial Web Design", link: "/porto-visual" },
  ];
  const [hovered, setHovered] = useState<number | null>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-capability-row]",
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

      gsap.to("[data-capability-row]", {
        y: (i) => (i % 2 === 0 ? -34 : -18),
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
      <p className="mono-label mb-12">05 / Capabilities</p>
      <div className="space-y-0">
        {list.map((item, i) => (
          <Link
            key={item.name}
            to={item.link}
            data-capability-row
            className="group relative block overflow-hidden border-b border-base-900 py-6 transition-colors hover:border-base-600"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            data-cursor-hover
            data-cursor-label="EXPLORE"
          >
            <div className={`flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${hovered === i ? "text-white translate-x-4 md:translate-x-6" : hovered !== null ? "text-base-600" : "text-base-200"}`}>
              <span className="text-section font-semibold uppercase transition-colors md:text-5xl">{item.name}</span>
              <span className="hidden font-mono text-xs text-base-600 md:block">View</span>
            </div>
            <div className="mt-4 h-px bg-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ width: hovered === i ? "100%" : "0%" }} />
          </Link>
        ))}
      </div>
    </section>
  );
}
