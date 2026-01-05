import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';

/**
 * Camera Rig for mouse movement (Parallax)
 */
const Rig = () => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1, 15), 0.05);
    camera.lookAt(0, 0, 0);
  });
};

/**
 * Interactive Magic Field (Floating stardust that follows cursor)
 */
const MagicField = () => {
  const { mouse } = useThree();
  const points = useRef<THREE.Points>(null);
  const vec = new THREE.Vector3();
  const count = 1500;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (points.current) {
      // Gentle constant rotation
      points.current.rotation.y = state.clock.elapsedTime * 0.015;
      
      // Follow cursor effect
      const targetX = mouse.x * 10;
      const targetY = mouse.y * 8;
      
      points.current.position.lerp(vec.set(targetX, targetY, 0), 0.03);
      
      // Tilt towards mouse
      points.current.rotation.x = THREE.MathUtils.lerp(points.current.rotation.x, -mouse.y * 0.4, 0.03);
      points.current.rotation.z = THREE.MathUtils.lerp(points.current.rotation.z, mouse.x * 0.4, 0.03);
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={count} 
          array={positions} 
          itemSize={3} 
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.06} 
        color="#4ade80" 
        transparent 
        opacity={0.5} 
        sizeAttenuation 
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

/**
 * Shooting Stars effect (Rare magic streaks)
 */
const ShootingStars = () => {
  const points = useRef<THREE.Points>(null);
  const count = 3;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 2] = -30; // Deep background
    }
    return pos;
  }, []);

  useFrame(() => {
    if (!points.current) return;
    const attr = points.current.geometry.attributes.position as THREE.BufferAttribute;
    
    for (let i = 0; i < count; i++) {
      let py = attr.getY(i);
      let px = attr.getX(i);
      
      px += 0.5; // High speed
      py -= 0.3;
      
      if (px > 40) {
        px = -40;
        py = (Math.random() - 0.5) * 60;
      }
      
      attr.setXY(i, px, py);
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={count} 
          array={positions} 
          itemSize={3} 
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.4} 
        color="#60a5fa" 
        transparent 
        opacity={0.8} 
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const Scene3D = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-[#010a08]">
      <Canvas camera={{ position: [0, 0, 20], fov: 60, far: 5000 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#4ade80" />
        <Suspense fallback={null}>
          <Rig />
          <MagicField />
          <ShootingStars />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;