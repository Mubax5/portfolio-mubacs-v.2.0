import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const navLinks = [
  { label: "Main", path: "/" },
  { label: "Porto Dev", path: "/porto-dev" },
  { label: "Visual Creative", path: "/porto-visual" },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useGSAP(() => {
    if (!navRef.current) return;
    gsap.fromTo(navRef.current.querySelectorAll("[data-nav-item]"), { opacity: 0, y: -20 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.8, ease: "power3.out", delay: 0.2 });
  }, []);

  return (
    <nav ref={navRef} className="fixed left-0 right-0 top-0 z-50 grid grid-cols-[auto_1fr] items-start gap-4 px-5 py-5 text-white mix-blend-difference md:flex md:items-center md:justify-between md:px-12">
      <div data-nav-item className="flex min-w-max items-center gap-3">
        <Link to="/" className="font-mono text-xs uppercase tracking-[0.18em] text-white md:text-sm" data-cursor-label="HOME">MUBACS</Link>
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 md:inline">Hilmi Mubarok</span>
      </div>
      <div className="grid grid-cols-3 justify-items-center gap-3 md:flex md:items-center md:gap-8 md:justify-items-start">
        {navLinks.map((link) => {
          const active = link.path === "/" ? location.pathname === "/" : location.pathname.startsWith(link.path);
          return (
            <Link key={link.path} data-nav-item to={link.path} className={`group relative text-center font-mono text-[9px] uppercase leading-tight tracking-[0.16em] md:text-xs ${active ? "text-white" : "text-white/45"}`} data-cursor-label="OPEN">
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-500 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
