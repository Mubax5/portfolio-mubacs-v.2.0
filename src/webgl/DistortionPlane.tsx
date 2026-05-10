import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface DistortionPlaneProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  distortionStrength?: number;
  openingProgress?: number;
}

export default function DistortionPlane({
  mouse,
  distortionStrength = 1.0,
  openingProgress = 0.0,
}: DistortionPlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uDistortionStrength: { value: distortionStrength },
      uOpeningProgress: { value: openingProgress },
    }),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const material = meshRef.current.material as THREE.ShaderMaterial;
    material.uniforms.uTime.value = state.clock.elapsedTime;
    material.uniforms.uMouse.value.set(mouse.current.x, mouse.current.y);
    material.uniforms.uDistortionStrength.value = distortionStrength;
    material.uniforms.uOpeningProgress.value = openingProgress;
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uDistortionStrength;
    uniform float uOpeningProgress;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }

    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p *= 2.0;
        a *= 0.5;
      }
      return v;
    }

    void main() {
      vec2 uv = vUv;
      float time = uTime * 0.12;
      float strength = uDistortionStrength;

      vec2 mouseDir = uv - uMouse;
      float mouseDist = length(mouseDir);
      float mouseInfluence = smoothstep(0.6, 0.0, mouseDist) * strength * 0.4;

      float n1 = fbm(uv * 3.0 + time);
      float n2 = fbm(uv * 3.0 + time + vec2(5.2, 1.3));
      float n3 = fbm(uv * 2.0 + vec2(n1, n2) * 0.5 + time * 0.5);

      float flow = n3 * strength * 0.15;

      // Mouse ripple
      float ripple = sin(mouseDist * 20.0 - uTime * 2.0) * 0.03 * mouseInfluence;

      // Combine
      float luminance = flow + ripple;

      // Opening flash
      float flash = uOpeningProgress * 0.08 * sin(uv.y * 6.28 + uTime * 3.0);
      luminance += flash;

      // Grain
      float grain = (hash(uv * vec2(1000.0) + fract(uTime * 0.1)) - 0.5) * 0.06;

      // Final color: dark monochrome
      float base = 0.03 + luminance + grain;
      base = clamp(base, 0.0, 0.15);

      // Subtle radial light
      float radial = 1.0 - smoothstep(0.0, 0.8, length(uv - vec2(0.5)));
      base += radial * 0.02;

      gl_FragColor = vec4(vec3(base), 1.0);
    }
  `;

  return (
    <mesh ref={meshRef} scale={[2, 2, 1]}>
      <planeGeometry args={[2, 2, 64, 64]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
      />
    </mesh>
  );
}
