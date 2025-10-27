import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface OfficeProps {
  leftDoorClosed: boolean;
  rightDoorClosed: boolean;
  leftLightOn: boolean;
  rightLightOn: boolean;
}

const Office = ({ leftDoorClosed, rightDoorClosed, leftLightOn, rightLightOn }: OfficeProps) => {
  const leftDoorRef = useRef<THREE.Mesh>(null);
  const rightDoorRef = useRef<THREE.Mesh>(null);
  const leftLightRef = useRef<THREE.PointLight>(null);
  const rightLightRef = useRef<THREE.PointLight>(null);

  useFrame(() => {
    if (leftDoorRef.current) {
      const targetY = leftDoorClosed ? 0 : 2.5;
      leftDoorRef.current.position.y = THREE.MathUtils.lerp(
        leftDoorRef.current.position.y,
        targetY,
        0.1
      );
    }

    if (rightDoorRef.current) {
      const targetY = rightDoorClosed ? 0 : 2.5;
      rightDoorRef.current.position.y = THREE.MathUtils.lerp(
        rightDoorRef.current.position.y,
        targetY,
        0.1
      );
    }

    if (leftLightRef.current) {
      leftLightRef.current.intensity = leftLightOn ? 2 : 0;
    }

    if (rightLightRef.current) {
      rightLightRef.current.intensity = rightLightOn ? 2 : 0;
    }
  });

  return (
    <group>
      <mesh position={[0, 0, -3]} receiveShadow>
        <planeGeometry args={[10, 5]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      <mesh position={[0, 2.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      <mesh position={[-5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[10, 5]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      <mesh position={[5, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[10, 5]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      <mesh position={[-3, 1, 2]}>
        <boxGeometry args={[1.5, 1, 0.1]} />
        <meshStandardMaterial color="#333" emissive="#111" />
      </mesh>

      <mesh position={[-1.5, 1, 2]}>
        <boxGeometry args={[1, 0.8, 0.1]} />
        <meshStandardMaterial color="#222" emissive="#0a0a0a" />
      </mesh>

      <mesh position={[0.5, 0.5, 2]}>
        <boxGeometry args={[0.8, 0.5, 0.5]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      <mesh ref={leftDoorRef} position={[-4.8, 2.5, 0]} castShadow>
        <boxGeometry args={[0.2, 5, 3]} />
        <meshStandardMaterial color="#555" metalness={0.5} />
      </mesh>

      <mesh ref={rightDoorRef} position={[4.8, 2.5, 0]} castShadow>
        <boxGeometry args={[0.2, 5, 3]} />
        <meshStandardMaterial color="#555" metalness={0.5} />
      </mesh>

      <pointLight ref={leftLightRef} position={[-4, 1, 2]} color="#ffff88" intensity={0} />
      <pointLight ref={rightLightRef} position={[4, 1, 2]} color="#ffff88" intensity={0} />

      <mesh position={[-4, 0, 2]}>
        <boxGeometry args={[0.3, 0.3, 0.1]} />
        <meshStandardMaterial color="#ff4444" emissive="#ff0000" emissiveIntensity={0.5} />
      </mesh>

      <mesh position={[4, 0, 2]}>
        <boxGeometry args={[0.3, 0.3, 0.1]} />
        <meshStandardMaterial color="#ff4444" emissive="#ff0000" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

export default Office;
