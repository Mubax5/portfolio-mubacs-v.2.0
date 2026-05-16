import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../utils/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const textSelector = [
  "main h1",
  "main h2",
  "main h3",
  "main h4",
  "main h5",
  "main h6",
  "main p",
  "main a",
  "main button",
  "main span",
  "main li",
  "main dt",
  "main dd",
  "main div",
  "nav a",
  "nav span",
  "nav button",
  "footer h1",
  "footer h2",
  "footer h3",
  "footer p",
  "footer a",
  "footer span",
  "footer button",
].join(",");

function hasDirectText(el: Element) {
  return Array.from(el.childNodes).some((node) => node.nodeType === Node.TEXT_NODE && Boolean(node.textContent?.trim()));
}

function isMotionTarget(el: HTMLElement) {
  if (!el.textContent?.trim()) return false;
  if (!el.getClientRects().length) return false;
  if (el.closest("[data-text-motion-ignore]")) return false;
  if (el.matches("[data-hero-word], [data-intro-word], [data-final-item]")) return false;
  if (el.classList.contains("opacity-0")) return false;
  if (!hasDirectText(el)) return false;
  return true;
}

export default function GlobalTextMotion({ routeKey }: { routeKey: string }) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    let ctx: ReturnType<typeof gsap.context> | undefined;
    const timer = window.setTimeout(() => {
      const targets = Array.from(document.querySelectorAll<HTMLElement>(textSelector)).filter(isMotionTarget);
      ctx = gsap.context(() => {
        targets.forEach((target) => {
          target.classList.add("text-motion-reveal");
          if (getComputedStyle(target).display === "inline") {
            target.style.display = "inline-block";
          }
        });

        gsap.set(targets, {
          "--text-reveal-y": "62px",
          "--text-parallax-y": "20px",
          autoAlpha: 0,
          filter: "blur(58px)",
        });

        ScrollTrigger.batch(targets, {
          start: "top 98%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              "--text-reveal-y": "0px",
              autoAlpha: 1,
              filter: "blur(0px)",
              duration: 2.45,
              ease: "power4.out",
              stagger: 0.065,
              onComplete: () => {
                batch.forEach((target) => {
                  (target as HTMLElement).style.filter = "none";
                });
              },
            });
          },
        });

        targets.forEach((target, index) => {
          const depth = target.closest("nav") ? 6 : 18 + (index % 5) * 4;
          gsap.fromTo(
            target,
            { "--text-parallax-y": `${depth}px` },
            {
              "--text-parallax-y": `${-depth}px`,
              ease: "none",
              scrollTrigger: {
                trigger: target,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.55,
              },
            }
          );
        });

        ScrollTrigger.refresh();
      });
    }, 140);

    return () => {
      window.clearTimeout(timer);
      ctx?.revert();
    };
  }, [routeKey, reducedMotion]);

  return null;
}
