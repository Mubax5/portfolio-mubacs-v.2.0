import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FileText } from "lucide-react";
import { profile } from "../data/profile";

gsap.registerPlugin(ScrollTrigger);

const heroWords = [
  { text: "MUBACS", depth: 22 },
  { text: "BUILDS", depth: 46 },
  { text: "QUIET", depth: 70 },
  { text: "THINGS", depth: 96 },
];

export default function HeroStage({ reveal = true }: { reveal?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.to("[data-hero-word]", {
        y: (i, target) => Number((target as HTMLElement).dataset.depth ?? 40),
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 1.2 },
      });
      gsap.to(metaRef.current, { y: -60, opacity: 0, scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 1 } });
      gsap.to(hintRef.current, { opacity: 0, scrollTrigger: { trigger: ref.current, start: "10% top", end: "30% top", scrub: 1 } });
      gsap.to("[data-hero-heading]", { y: -36, scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 1.5 } });

    }, ref);
    return () => ctx.revert();
  }, []);

  const metaRevealClass = reveal ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 blur-2xl";
  const hintRevealClass = reveal ? "translate-y-0 opacity-30" : "translate-y-7 opacity-0 blur-xl";

  return (
    <section ref={ref} data-text-motion-ignore className="relative z-10 flex min-h-screen flex-col justify-end overflow-hidden px-5 pb-12 pt-32 md:px-12">
      <div className="pointer-events-none absolute inset-0" data-parallax-bg>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      </div>
      <div ref={metaRef} data-hero-meta className={`mb-10 grid gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-base-500 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:grid-cols-5 ${metaRevealClass}`}>
        <span>01 / Web Developer</span><span>02 / Visual Designer</span><span>03 / Creative Technologist</span><span>{profile.location}</span><span>{profile.availability}</span>
      </div>
      <div data-hero-heading className="text-hero">
        {heroWords.map((word, wordIndex) => (
          <span key={word.text} className="block overflow-hidden">
            <span
              className={`block transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${reveal ? "translate-y-0 opacity-100" : "translate-y-[118%] opacity-0 blur-2xl"}`}
              style={{ transitionDelay: `${wordIndex * 120}ms` }}
            >
              <span
                data-hero-word
                data-depth={word.depth}
                className="block will-change-transform"
              >
                {word.text}
              </span>
            </span>
          </span>
        ))}
      </div>
      <p className={`relative z-30 mt-8 max-w-xl text-lg font-medium text-white mix-blend-difference transition-all duration-[1150ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${metaRevealClass}`} data-hero-meta>Creative technologist and web developer shaping clean interfaces, useful systems, and visual work with restraint.</p>
      <div data-hero-meta className={`relative z-30 mt-7 transition-all duration-[1150ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${metaRevealClass}`}>
        <a
          href={profile.cv}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex w-fit items-center gap-3 border border-white/15 bg-black/35 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-base-200 backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          data-cursor-label="CV"
        >
          <FileText className="h-3.5 w-3.5" aria-hidden="true" />
          <span>View CV</span>
        </a>
      </div>
      <div ref={hintRef} data-scroll-hint className={`mt-16 font-mono text-[10px] uppercase tracking-[0.3em] text-base-600 transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${hintRevealClass}`}>Scroll / Let it move</div>
    </section>
  );
}
