import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const lines = [
  "Builds",
  "Quiet Thing,",
  "cuz",
  "The Silent",
  "So Loud.",
];

export default function ManifestoScene() {
  const ref = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>("[data-manifesto-line]");
      let revealed = false;

      gsap.set(lines, { y: 140, filter: "blur(46px)", opacity: 0 });

      const revealLines = () => {
        if (revealed) return;
        revealed = true;
        gsap.to(lines, {
          y: 0,
          filter: "blur(0px)",
          opacity: 1,
          stagger: 0.18,
          duration: 1.65,
          ease: "power4.out",
          onComplete: () => {
            lines.forEach((line) => {
              line.style.filter = "none";
            });
          },
        });
      };

      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 88%",
        onEnter: revealLines,
        onEnterBack: revealLines,
        once: true,
      });

      requestAnimationFrame(() => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect && rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
          revealLines();
        }
        ScrollTrigger.refresh();
      });

      gsap.to(textRef.current, {
        y: -90,
        scale: 1.04,
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(glowRef.current, {
        xPercent: 18,
        yPercent: -12,
        scale: 1.25,
        opacity: 0.42,
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
    <section ref={ref} data-text-motion-ignore className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-5 py-32">
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 52%, rgba(255,255,255,0.12), transparent 70%)",
        }}
      />

      <div ref={textRef} className="relative z-20 mx-auto max-w-6xl text-center">
        {lines.map((line) => (
          <p
            key={line}
            data-manifesto-line
            className="text-5xl font-bold uppercase leading-[0.86] text-white opacity-100 md:text-8xl lg:text-9xl"
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
