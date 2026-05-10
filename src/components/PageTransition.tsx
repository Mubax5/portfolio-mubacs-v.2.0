import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { EASE } from "../utils/animation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const label = location.pathname === "/" ? "MAIN" : location.pathname.split("/").filter(Boolean).join(" / ").toUpperCase();

  // Premium crossfade + scale instead of stiff wipe
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={location.pathname} className="relative z-10" initial="initial" animate="enter" exit="exit">
        {/* Soft blackout layer over old page during exit */}
        <motion.div
          className="pointer-events-none fixed inset-0 z-[90] bg-black"
          variants={{
            initial: { opacity: 1 },
            enter: { opacity: 0 },
            exit: { opacity: 1 },
          }}
          transition={{ duration: 0.8, ease: EASE.out }}
        >
          <motion.div className="absolute inset-0 flex items-center justify-center" variants={{ initial: { opacity: 1, scale: 1 }, enter: { opacity: 0, scale: 1.1 }, exit: { opacity: 1, scale: 1 } }} transition={{ duration: 0.6, ease: EASE.out }}>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-base-200">{label}</span>
          </motion.div>
        </motion.div>

        {/* Content motion - smooth blur up */}
        <motion.div
          variants={{
            initial: { opacity: 0, y: 15, scale: 0.98, filter: "blur(8px)" },
            enter: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
            exit: { opacity: 0, y: -15, scale: 1.02, filter: "blur(8px)" },
          }}
          transition={{ duration: 0.8, ease: EASE.smooth }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
