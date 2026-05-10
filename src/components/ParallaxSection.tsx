import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  fade?: boolean;
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 80,
  fade = true,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: speed, opacity: fade ? 0.42 : 1, scale: 0.985 },
        {
          y: -speed * 0.45,
          opacity: 1,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [speed, fade]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
