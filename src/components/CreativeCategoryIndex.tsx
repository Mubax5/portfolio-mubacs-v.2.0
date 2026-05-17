import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { creativeCollections } from "../data/creativeMedia";
import type { CreativeCollection } from "../data/creativeMedia";

gsap.registerPlugin(ScrollTrigger);

function CollectionPreview({ collection, index }: { collection: CreativeCollection; index: number }) {
  const heights = ["min-h-[28rem]", "min-h-[22rem]", "min-h-[25rem]", "min-h-[20rem]", "min-h-[24rem]", "min-h-[30rem]"];
  const n = String(index + 1).padStart(2, "0");
  const glyphs = [
    [
      { className: "col-span-2 row-span-2 bg-white text-black", label: n, scale: "mega" },
      { className: "bg-base-900 text-base-500", label: "////", scale: "mono" },
      { className: "row-span-2 bg-base-850 text-base-300", label: "AX", scale: "tall" },
      { className: "col-span-2 bg-base-950 text-base-500", label: "00.0", scale: "mono" },
      { className: "bg-base-800 text-base-300", label: "X", scale: "mark" },
      { className: "col-span-2 bg-base-900 text-base-400", label: "X/0 X/0", scale: "mono" },
    ],
    [
      { className: "row-span-2 bg-base-900 text-base-400", label: "I", scale: "tall" },
      { className: "col-span-2 bg-white text-black", label: n, scale: "wide" },
      { className: "col-span-2 row-span-2 bg-base-950 text-base-300", label: "K-0", scale: "mega" },
      { className: "bg-base-800 text-base-300", label: "11", scale: "mark" },
      { className: "col-span-3 bg-base-900 text-base-500", label: "///// ////", scale: "mono" },
    ],
    [
      { className: "col-span-3 bg-base-850 text-base-300", label: "//// //// ////", scale: "mono" },
      { className: "col-span-2 row-span-3 bg-white text-black", label: n, scale: "mega" },
      { className: "bg-base-950 text-base-500", label: "A", scale: "mark" },
      { className: "bg-base-900 text-base-500", label: "B", scale: "mark" },
      { className: "bg-base-800 text-base-300", label: "C", scale: "mark" },
    ],
  ];
  const cells = glyphs[index % glyphs.length];
  const scaleClass = {
    mega: "text-6xl font-semibold md:text-8xl",
    wide: "text-4xl font-semibold md:text-6xl",
    tall: "text-5xl font-semibold [writing-mode:vertical-rl] md:text-7xl",
    mark: "text-4xl font-semibold md:text-5xl",
    mono: "font-mono text-[10px] tracking-[0.22em]",
  };

  return (
    <div className="bg-base-950 p-px">
      <div className={`grid grid-cols-3 grid-rows-4 gap-px bg-base-900 ${heights[index % heights.length]}`}>
        {cells.map((cell, i) => (
          <div key={`${collection.slug}-${i}`} className={`relative overflow-hidden p-4 ${cell.className}`}>
            <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] [background-size:28px_28px]" />
            <div className="absolute bottom-3 left-3 right-3 h-px bg-current opacity-20" />
            <p className="relative font-mono text-[10px] uppercase tracking-[0.18em] opacity-45">{String(i + 1).padStart(2, "0")}</p>
            <p className={`relative mt-3 break-words uppercase leading-none ${scaleClass[cell.scale as keyof typeof scaleClass]}`}>
              {cell.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CreativeCategoryIndex() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-cat-card]",
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
            ref.current?.querySelectorAll<HTMLElement>("[data-cat-card]").forEach((item) => {
              item.style.filter = "none";
            });
          },
        }
      );
      gsap.to("[data-cat-card]", {
        y: (i) => (i % 2 === 0 ? -26 : -12),
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 1.4 },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative z-10 px-5 py-20 md:px-12 md:py-28">
      <div className="mb-10 md:mb-16">
        <p className="mono-label mb-2">02 / Creative Work</p>
        <h1 className="text-section">VISUAL CREATIVE</h1>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
        {creativeCollections.map((collection, index) => {
          return (
            <Link
              key={collection.slug}
              to={`/porto-visual/${collection.slug}`}
              data-cat-card
              className="group mb-4 block break-inside-avoid overflow-hidden border border-base-900 bg-black/70 transition-[border-color,transform,background-color] duration-700 hover:-translate-y-1 hover:border-base-500 hover:bg-base-950"
              data-cursor-label="OPEN"
            >
              <CollectionPreview collection={collection} index={index} />

              <div className="flex min-h-[15rem] flex-col justify-between p-5 md:p-6">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-base-600">{String(index + 1).padStart(2, "0")}</p>
                    <ArrowUpRight className="h-4 w-4 text-base-600 transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="break-words text-3xl font-semibold uppercase leading-none text-white md:text-5xl">{collection.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-base-500">{collection.description}</p>
                </div>
                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-base-600">{collection.items.length} pieces / {collection.layout}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
