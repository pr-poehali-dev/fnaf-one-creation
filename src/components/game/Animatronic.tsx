import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AnimatronicProps {
  position: [number, number, number];
  color: string;
  type: 'freddy' | 'bonnie' | 'chica' | 'foxy';
  isActive: boolean;
}

const Animatronic = ({ position, color, type, isActive }: AnimatronicProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!isActive || !headRef.current) return;

    const time = state.clock.getElapsedTime();
    headRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
    
    if (leftEyeRef.current && rightEyeRef.current) {
      const glowIntensity = Math.sin(time * 2) * 0.5 + 0.5;
      const eyeMaterial = leftEyeRef.current.material as THREE.MeshStandardMaterial;
      eyeMaterial.emissiveIntensity = glowIntensity * 2;
    }
  });

  useEffect(() => {
    if (groupRef.current && isActive) {
      groupRef.current.visible = true;
    } else if (groupRef.current) {
      groupRef.current.visible = false;
    }
  }, [isActive]);

  return (
    <group ref={groupRef} position={position}>
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[0.8, 1, 0.8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh ref={headRef} position={[0, 2.3, 0]}>
        <boxGeometry args={[0.7, 0.7, 0.7]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh ref={leftEyeRef} position={[-0.2, 2.4, 0.35]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ff0000" 
          emissiveIntensity={1.5}
        />
      </mesh>

      <mesh ref={rightEyeRef} position={[0.2, 2.4, 0.35]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ff0000" 
          emissiveIntensity={1.5}
        />
      </mesh>

      <mesh position={[0, 2.1, 0.35]}>
        <boxGeometry args={[0.3, 0.2, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      <mesh position={[-0.5, 1, 0]}>
        <boxGeometry args={[0.25, 1.2, 0.25]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0.5, 1, 0]}>
        <boxGeometry args={[0.25, 1.2, 0.25]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[-0.25, 0.4, 0]}>
        <boxGeometry args={[0.3, 0.8, 0.3]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0.25, 0.4, 0]}>
        <boxGeometry args={[0.3, 0.8, 0.3]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {type === 'freddy' && (
        <mesh position={[0, 2.8, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      )}

      {type === 'bonnie' && (
        <>
          <mesh position={[-0.45, 2.9, 0]}>
            <boxGeometry args={[0.2, 0.5, 0.2]} />
            <meshStandardMaterial color={color} />
          </mesh>
          <mesh position={[0.45, 2.9, 0]}>
            <boxGeometry args={[0.2, 0.5, 0.2]} />
            <meshStandardMaterial color={color} />
          </mesh>
        </>
      )}

      {type === 'chica' && (
        <mesh position={[0, 1.8, 0.5]}>
          <coneGeometry args={[0.15, 0.3, 8]} />
          <meshStandardMaterial color="#FFA500" />
        </mesh>
      )}

      {type === 'foxy' && (
        <mesh position={[-0.5, 1, 0.2]}>
          <coneGeometry args={[0.1, 0.4, 4]} />
          <meshStandardMaterial color="#8B0000" />
        </mesh>
      )}
    </group>
  );
};

export default Animatronic;
