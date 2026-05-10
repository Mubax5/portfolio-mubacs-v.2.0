import { useCallback, useRef } from "react";
import { gsap } from "gsap";

export default function MagneticLink({ children, className = "", strength = 0.35 }: { children: React.ReactNode; className?: string; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    gsap.to(ref.current, { x: (e.clientX - (r.left + r.width / 2)) * strength, y: (e.clientY - (r.top + r.height / 2)) * strength, duration: 0.35, ease: "power3.out" });
  }, [strength]);
  const leave = useCallback(() => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.65, ease: "elastic.out(1,0.45)" });
  }, []);
  return <div ref={ref} onMouseMove={move} onMouseLeave={leave} className={`inline-block ${className}`}>{children}</div>;
}
