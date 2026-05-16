import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { creativeCollections } from "../data/creativeMedia";

gsap.registerPlugin(ScrollTrigger);

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

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {creativeCollections.map((collection, index) => {
          const preview = collection.items.slice(0, 3);
          return (
            <Link
              key={collection.slug}
              to={`/porto-visual/${collection.slug}`}
              data-cat-card
              className={`${index === 0 ? "xl:col-span-2" : ""} group overflow-hidden border border-base-900 bg-black/70 transition-[border-color,transform,background-color] duration-700 hover:-translate-y-1 hover:border-base-500 hover:bg-base-950`}
              data-cursor-label="OPEN"
            >
              <div className={`grid gap-px bg-base-900 ${index === 0 ? "grid-cols-[1.2fr_0.8fr]" : "grid-cols-2"}`}>
                <div className="relative overflow-hidden bg-base-950">
                  {preview[0]?.src && (
                    <div className={`grid place-items-center ${preview[0].fit === "contain" ? "p-3" : ""}`}>
                      <img
                        src={preview[0].src}
                        alt={`${collection.title} preview`}
                        loading="lazy"
                        className={`w-full transition-transform duration-700 group-hover:scale-[1.04] ${preview[0].fit === "contain" ? "object-contain" : "object-cover"} ${index === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}`}
                        style={{ objectPosition: preview[0].objectPosition }}
                      />
                    </div>
                  )}
                  {collection.layout === "video" && (
                    <div className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-black/65 text-white backdrop-blur-md">
                      <Play className="h-4 w-4 fill-current" />
                    </div>
                  )}
                </div>
                <div className="grid gap-px">
                  {preview.slice(1).map((item) => (
                    <div key={item.title} className="overflow-hidden bg-base-950">
                      {item.src && (
                        <div className={`grid aspect-square place-items-center ${item.fit === "contain" ? "p-3" : ""}`}>
                          <img
                            src={item.src}
                            alt={`${item.title} preview`}
                            loading="lazy"
                            className={`h-full w-full opacity-75 transition-transform duration-700 group-hover:scale-[1.04] group-hover:opacity-100 ${item.fit === "contain" ? "object-contain" : "object-cover"}`}
                            style={{ objectPosition: item.objectPosition }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

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
