import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  { label: "The Form of Emptiness", sub: "Personal Project", src: "/img/Personal Project/1.webp" },
  { label: "Perfect Time to Start", sub: "Personal Project", src: "/img/Personal Project/2.webp" },
  { label: "Just Lookin Forward", sub: "Personal Project", src: "/img/Personal Project/3.webp" },
  { label: "Showing Up", sub: "Personal Project", src: "/img/Personal Project/4.webp" },
  { label: "Find Your Path", sub: "Personal Project", src: "/img/Personal Project/5.webp" },
  { label: "CTRL + Z", sub: "Personal Project", src: "/img/Personal Project/6.webp" },
];

export default function InfiniteWarpGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const rowOneRef = useRef<HTMLDivElement>(null);
  const rowTwoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current || !rowOneRef.current || !rowTwoRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(rowOneRef.current, {
        xPercent: 0,
      }, {
        xPercent: -36,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "+=170%",
          scrub: 1.45,
        },
      });

      gsap.fromTo(rowTwoRef.current, {
        xPercent: -34,
      }, {
        xPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "+=170%",
          scrub: 1.6,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const renderPanels = (items: typeof panels, prefix: string) => (
    items.map((p, i) => (
      <div key={`${prefix}-${p.label}-${i}`} data-gallery-panel className="flex-shrink-0 will-change-transform">
        <div className="group relative h-[12.5rem] w-[12.5rem] transform-gpu overflow-hidden border border-base-800 bg-black/70 transition-[transform,box-shadow,border-color,background-color,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] hover:-rotate-[3deg] hover:-translate-y-4 hover:border-white hover:[box-shadow:0_24px_64px_rgba(255,255,255,0.18)] sm:h-[15rem] sm:w-[15rem] md:h-[18rem] md:w-[23rem]" data-cursor-hover data-cursor-label="VIEW">
          <img src={p.src} alt={p.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/18 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
            <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">{p.sub}</p>
            <h3 className="text-lg font-semibold uppercase text-white sm:text-2xl md:text-4xl">{p.label}</h3>
            <div className="mt-3 h-px w-0 bg-white transition-all duration-700 group-hover:w-full" />
          </div>
        </div>
      </div>
    ))
  );

  return (
    <section ref={ref} className="relative z-20 overflow-hidden pb-6 pt-16 md:pb-8 md:pt-20">
      <p className="mono-label relative z-30 mb-4 px-5 text-base-200 md:px-12">04 / Gallery</p>
      <div className="-mx-10 space-y-16 py-8 md:space-y-24 md:py-10">
        <div ref={rowOneRef} data-gallery-row className="flex w-max rotate-[3deg] transform-gpu items-center gap-6 pl-10 will-change-transform md:gap-7 md:pl-16">
          {renderPanels([...panels, ...panels], "row-one")}
        </div>
        <div ref={rowTwoRef} data-gallery-row className="flex w-max rotate-[3deg] transform-gpu items-center gap-6 pl-10 will-change-transform md:gap-7 md:pl-16">
          {renderPanels([...panels.slice(3), ...panels.slice(0, 3), ...panels], "row-two")}
        </div>
      </div>
    </section>
  );
}
