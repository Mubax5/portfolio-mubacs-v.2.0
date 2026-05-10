import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import DevProjectIndex from "../components/DevProjectIndex";
import FooterContact from "../components/FooterContact";

gsap.registerPlugin(ScrollTrigger);

export default function PortoDev() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-page-text]");
      let revealed = false;
      const revealItems = () => {
        if (revealed) return;
        revealed = true;
        gsap.to(items, {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.35,
          stagger: 0.1,
          ease: "power4.out",
          onComplete: () => items.forEach((item) => { item.style.filter = "none"; }),
        });
      };

      gsap.set(items, { autoAlpha: 0, y: 82, filter: "blur(34px)" });
      ScrollTrigger.create({ trigger: ref.current, start: "top 86%", once: true, onEnter: revealItems, onEnterBack: revealItems });
      requestAnimationFrame(() => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect && rect.top < window.innerHeight * 0.86 && rect.bottom > 0) {
          revealItems();
        }
      });
      items.forEach((item, i) => {
        gsap.to(item, {
          y: -(14 + i * 6),
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 1.25 },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return <main className="relative z-10 pt-28 md:pt-32">
    <section ref={ref} data-text-motion-ignore className="px-5 pb-14 md:px-12 md:pb-20">
      <p data-page-text className="mono-label mb-4">Development Portfolio</p>
      <h1 data-page-text className="text-hero break-words">PORTO<br/>DEV</h1>
      <p data-page-text className="mt-8 max-w-2xl text-lg text-base-300">Websites, systems, dashboards, CMS, SaaS concepts, and product interfaces built with structure and visual clarity.</p>
    </section>
    <DevProjectIndex />
    <FooterContact />
  </main>;
}
