import React, { useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { PerspectiveCamera } from "@react-three/drei";
import DistortionPlane from "./DistortionPlane";

interface WebGLBackgroundProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  distortionStrength?: number;
  openingProgress?: number;
}

export default function WebGLBackground({
  mouse,
  distortionStrength = 1.0,
  openingProgress = 0.0,
}: WebGLBackgroundProps) {
  const handleCreated = useCallback(({ gl }: { gl: THREE.WebGLRenderer }) => {
    gl.setClearColor(0x000000, 0);
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        onCreated={handleCreated as any}
        style={{ background: "#000000" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 1]} />
        <DistortionPlane
          mouse={mouse}
          distortionStrength={distortionStrength}
          openingProgress={openingProgress}
        />
      </Canvas>
    </div>
  );
}
