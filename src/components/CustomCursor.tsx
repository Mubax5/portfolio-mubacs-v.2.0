import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "../utils/useReducedMotion";
import { cn } from "../utils/cn";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const isReduced = useReducedMotion();

  const [label, setLabel] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If on a touch device or prefers reduced motion, hide custom cursor entirely
    if (isReduced || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    // Set initial position out of view
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        setIsVisible(true);
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
      }

      // Quick move for dot
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      // Smooth lerp for ring
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    };

    // Check elements for cursor interactions
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const interactable = target.closest(
        "a, button, [data-cursor-hover]"
      );
      
      if (interactable) {
        setIsHovered(true);
        const newLabel = interactable.getAttribute("data-cursor-label");
        setLabel(newLabel || null);

        gsap.to(dot, { scale: 0, duration: 0.3 });
        gsap.to(ring, {
          scale: 1.5,
          backgroundColor: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(2px)",
          borderWidth: 0,
          duration: 0.3,
        });

        if (newLabel && labelRef.current) {
          gsap.fromTo(
            labelRef.current,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 0.3, delay: 0.1 }
          );
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovered(false);
        setLabel(null);

        gsap.to(dot, { scale: 1, duration: 0.3 });
        gsap.to(ring, {
          scale: 1,
          backgroundColor: "transparent",
          backdropFilter: "none",
          borderWidth: 1,
          duration: 0.3,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isReduced, isVisible]);

  if (isReduced || window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] mix-blend-difference">
      {/* Small dot */}
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-white will-change-transform"
      />
      
      {/* Large ring */}
      <div
        ref={ringRef}
        className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 will-change-transform"
      >
        {label && (
          <span
            ref={labelRef}
            className="text-[9px] font-mono font-medium tracking-widest text-white uppercase whitespace-nowrap"
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
