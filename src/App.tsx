import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import CustomCursor from "./components/CustomCursor";
import SmoothScrollProvider, { useSmoothScroll } from "./components/SmoothScrollProvider";
import WebGLOpening from "./components/WebGLOpening";
import WebGLBackground from "./webgl/WebGLBackground";
import PageTransition from "./components/PageTransition";
import GlobalTextMotion from "./components/GlobalTextMotion";

import MainPage from "./pages/MainPage";
import PortoDev from "./pages/PortoDev";
import DevProjectDetail from "./pages/DevProjectDetail";
import PortoVisual from "./pages/PortoVisual";
import CreativeCategoryPage from "./pages/CreativeCategoryPage";
import CreativeOrganizationPage from "./pages/CreativeOrganizationPage";

function AppContent() {
  const [openingComplete, setOpeningComplete] = useState(false);
  const [heroRevealStarted, setHeroRevealStarted] = useState(false);
  const location = useLocation();
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const scrollVelocity = useRef(0);
  const lastScroll = useRef(0);
  const [distortion, setDistortion] = useState(0.85);
  const [transitionBoost, setTransitionBoost] = useState(0);
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    setTransitionBoost(1.4);
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const id = window.setTimeout(() => setTransitionBoost(0), 800);
    return () => window.clearTimeout(id);
  }, [location.pathname, lenis]);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    if (!openingComplete) {
      root.style.overflow = "hidden";
      body.style.overflow = "hidden";
      lenis?.stop();

      return () => {
        root.style.overflow = previousRootOverflow;
        body.style.overflow = previousBodyOverflow;
        lenis?.start();
      };
    }

    lenis?.start();
    root.style.overflow = previousRootOverflow;
    body.style.overflow = previousBodyOverflow;
  }, [openingComplete, lenis]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = 1 - e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    let rafId: number;
    const track = () => {
      const curr = window.scrollY;
      const vel = Math.abs(curr - lastScroll.current);
      scrollVelocity.current += (vel - scrollVelocity.current) * 0.1;
      lastScroll.current = curr;
      setDistortion(0.7 + Math.min(scrollVelocity.current * 0.008, 1.2));
      rafId = requestAnimationFrame(track);
    };
    rafId = requestAnimationFrame(track);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      <CustomCursor />
      <WebGLBackground
        mouse={mouse}
        distortionStrength={distortion + transitionBoost}
        openingProgress={0.12 + transitionBoost + scrollVelocity.current * 0.002}
      />
      <Navigation />
      {openingComplete && <GlobalTextMotion routeKey={location.pathname} />}
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainPage heroRevealStarted={openingComplete || heroRevealStarted} />} />
          <Route path="/porto-dev" element={<PortoDev />} />
          <Route path="/porto-dev/:slug" element={<DevProjectDetail />} />
          <Route path="/porto-visual" element={<PortoVisual />} />
          <Route path="/porto-visual/:category" element={<CreativeCategoryPage />} />
          <Route path="/porto-visual/:category/:organizationSlug" element={<CreativeOrganizationPage />} />
        </Routes>
      </PageTransition>
      {!openingComplete && (
        <WebGLOpening
          onRevealStart={() => setHeroRevealStarted(true)}
          onComplete={() => setOpeningComplete(true)}
        />
      )}
    </>
  );
}

export default function App() {
  return (
    <SmoothScrollProvider>
      <AppContent />
    </SmoothScrollProvider>
  );
}
