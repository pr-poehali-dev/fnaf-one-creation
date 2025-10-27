import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Office() {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef}>
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      <mesh position={[0, 3, -10]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      <mesh position={[10, 3, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      <mesh position={[-10, 3, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      <mesh position={[-5, 0, -5]}>
        <boxGeometry args={[3, 2, 1]} />
        <meshStandardMaterial color="#3a3a3a" />
      </mesh>

      <mesh position={[5, 0, -5]}>
        <boxGeometry args={[3, 2, 1]} />
        <meshStandardMaterial color="#3a3a3a" />
      </mesh>

      <mesh position={[-8, 1, 3]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.5, 3, 2]} />
        <meshStandardMaterial color="#4a4a4a" />
      </mesh>

      <mesh position={[8, 1, 3]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.5, 3, 2]} />
        <meshStandardMaterial color="#4a4a4a" />
      </mesh>

      <pointLight position={[0, 4, 0]} intensity={0.5} color="#ffddaa" />
      <pointLight position={[-5, 2, -5]} intensity={0.3} color="#aaddff" />
      <pointLight position={[5, 2, -5]} intensity={0.3} color="#aaddff" />
    </group>
  );
}
