
import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Edges, Float } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer } from 'three-stdlib';
import * as Random from 'maath/random';

function ParallaxRig() {
  const { camera, pointer } = useThree();
  const v = React.useRef(new THREE.Vector3());
  useFrame(() => {
    v.current.set(pointer.x * 0.6, pointer.y * 0.4, camera.position.z);
    camera.position.lerp(v.current, 0.05);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Particles({ count = 600 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const pts = Random.inSphere(new Float32Array(count * 3), { radius: 3.2 });
    return pts;
  }, [count]);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.04;
    ref.current.rotation.x = Math.sin(t * 0.2) * 0.05;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#67e8f9"
        size={0.008}
        sizeAttenuation
        transparent
        opacity={0.7}
        depthWrite={false}
      />
    </points>
  );
}

function FoxHead() {
  // Fox head geometry: center, ears, and jaw as separate blue pyramids
  // All faces are blue, edges are black
  // This is a stylized, low-poly look
  const blue = '#003cff';
  return (
    <group>
      {/* Center face */}
      <mesh position={[0, 0, 0]}>
        <coneGeometry args={[1, 1.2, 4]} />
        <meshStandardMaterial color={blue} flatShading={true} />
        <Edges scale={1.01} threshold={15}>
          <lineBasicMaterial color="black" linewidth={2} />
        </Edges>
      </mesh>
      {/* Left ear */}
      <mesh position={[-0.7, 0.9, 0]} rotation={[0, 0, Math.PI / 8]}>
        <coneGeometry args={[0.35, 0.8, 4]} />
        <meshStandardMaterial color={blue} flatShading={true} />
        <Edges scale={1.01} threshold={15}>
          <lineBasicMaterial color="black" linewidth={2} />
        </Edges>
      </mesh>
      {/* Right ear */}
      <mesh position={[0.7, 0.9, 0]} rotation={[0, 0, -Math.PI / 8]}>
        <coneGeometry args={[0.35, 0.8, 4]} />
        <meshStandardMaterial color={blue} flatShading={true} />
        <Edges scale={1.01} threshold={15}>
          <lineBasicMaterial color="black" linewidth={2} />
        </Edges>
      </mesh>
      {/* Jaw */}
      <mesh position={[0, -0.85, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.5, 0.9, 4]} />
        <meshStandardMaterial color={blue} flatShading={true} />
        <Edges scale={1.01} threshold={15}>
          <lineBasicMaterial color="black" linewidth={2} />
        </Edges>
      </mesh>
    </group>
  );
}

function GeoCore() {
  // No auto-rotation, smaller scale
  return (
    <group scale={[0.6, 0.6, 0.6]}>
      <FoxHead />
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[3, 3, 2]} intensity={1.2} color={'#9ab9ff'} />
      <pointLight position={[-3, -2, -2]} intensity={0.7} color={'#a78bfa'} />
    </>
  );
}

function EffectsLayer() {
  return null; // Effects removed due to missing exports
}

function HeroScene() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 3.2], fov: 50 }} gl={{ antialias: true, powerPreference: 'high-performance' }}>
      <color attach="background" args={["#0a0b0f"]} />
      <Suspense fallback={null}>
        <Lights />
        <Particles count={800} />
        <GeoCore />
        <EffectsLayer />
      </Suspense>
      <ParallaxRig />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
}

export default HeroScene;
