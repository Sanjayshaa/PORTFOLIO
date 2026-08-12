/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function TechCoreMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerWireRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
    }
    if (outerWireRef.current) {
      outerWireRef.current.rotation.y -= delta * 0.25;
      outerWireRef.current.rotation.z += delta * 0.15;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.8;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.9;
    }
  });

  return (
    <group scale={1.3}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        {/* Core Glowing Orb */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1, 4]} />
          <MeshDistortMaterial
            color="#a855f7"
            emissive="#581c87"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.8}
            distort={0.35}
            speed={2}
          />
        </mesh>

        {/* Orbiting Orbital Rings */}
        <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[1.5, 0.02, 16, 100]} />
          <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={1} wireframe />
        </mesh>

        <mesh ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
          <torusGeometry args={[1.8, 0.02, 16, 100]} />
          <meshStandardMaterial color="#c084fc" emissive="#a855f7" emissiveIntensity={1} wireframe />
        </mesh>

        {/* Outer Tech Wireframe Shell */}
        <group ref={outerWireRef}>
          <mesh>
            <dodecahedronGeometry args={[2.1, 0]} />
            <meshStandardMaterial color="#38bdf8" wireframe transparent opacity={0.35} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export interface ModelViewerProps {
  autoRotate?: boolean;
  className?: string;
}

export default function ModelViewer({ autoRotate = true, className = '' }: ModelViewerProps) {
  return (
    <div className={`w-full h-full relative cursor-grab active:cursor-grabbing ${className}`}>
      <Canvas gl={{ alpha: true, antialias: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
        
        {/* Ambient & Directional Lights */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#a855f7" />
        <pointLight position={[0, 0, 2]} intensity={2} color="#38bdf8" />

        <TechCoreMesh />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={autoRotate}
          autoRotateSpeed={1.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
