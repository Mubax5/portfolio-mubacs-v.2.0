import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function WebGLOpening({
  onRevealStart,
  onComplete,
}: {
  onRevealStart: () => void;
  onComplete: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const isCompleted = useRef(false);

  useGSAP(() => {
    if (isCompleted.current) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    const words = gsap.utils.toArray<HTMLElement>("[data-intro-word]");
    const finalItems = gsap.utils.toArray<HTMLElement>("[data-final-item]");

    gsap.set("[data-intro-stage]", { opacity: 0, y: 28, scale: 0.99, filter: "blur(22px)" });
    gsap.set(words, { opacity: 0, y: 38, filter: "blur(22px)" });
    gsap.set("[data-final-screen]", { opacity: 1 });
    gsap.set(finalItems, { opacity: 0, y: 48, filter: "blur(24px)" });

    tl.to("[data-intro-stage]", {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.9,
      ease: "power4.out",
    }, 0);

    words.forEach((word) => {
      tl.to(word, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.72 })
        .to(word, { opacity: 0, y: -24, filter: "blur(14px)", duration: 0.42, ease: "power2.inOut" }, "+=0.18");
    });

    tl.to(finalItems, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: 0.14,
      duration: 0.95,
    }, "-=0.08");

    if (wipeRef.current) {
      tl.call(onRevealStart, undefined, "+=0.85")
        .to(wipeRef.current, {
        yPercent: -101,
        duration: 1.08,
        ease: "power4.inOut",
        onComplete: () => {
          if (!isCompleted.current) {
            isCompleted.current = true;
            onComplete();
          }
        }
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] overflow-hidden pointer-events-none">
      <div ref={wipeRef} className="intro-shell absolute inset-0 z-20 flex items-center justify-center px-5">
        <div data-intro-gradient className="intro-gradient-layer" />
        <div data-text-motion-ignore className="intro-texture-layer" />
        <div data-text-motion-ignore className="intro-grid-layer" />

        <div data-intro-stage className="relative flex min-h-[48vh] w-full items-center justify-center px-5 text-center">
          <h1 data-intro-word className="intro-type absolute text-sm font-medium uppercase tracking-[0.28em] text-white md:text-xl">Mubacs/</h1>
          <h1 data-intro-word className="intro-type absolute text-sm font-medium uppercase tracking-[0.28em] text-white md:text-xl">Code/</h1>
          <h1 data-intro-word className="intro-type absolute text-sm font-medium uppercase tracking-[0.28em] text-white md:text-xl">Creative/</h1>
          <h1 data-intro-word className="intro-type absolute text-sm font-medium uppercase tracking-[0.28em] text-white md:text-xl">Visual/</h1>

          <div data-final-screen className="absolute flex w-full flex-col items-center justify-center">
            <p data-final-item className="intro-type mb-4 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-white/55">Mubacs</p>
            <h2 data-final-item className="intro-type max-w-5xl text-center text-4xl font-semibold uppercase leading-[0.82] text-white md:text-7xl lg:text-8xl">
              <span className="block md:inline">Code</span>{" "}
              <span className="block md:inline">Creative</span>{" "}
              <span className="block md:inline">Visual</span>
            </h2>
            <p data-final-item className="intro-type mt-6 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/55">
              Web Developer & Creative Technologist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
