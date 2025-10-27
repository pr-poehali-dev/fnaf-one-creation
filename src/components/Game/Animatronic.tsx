import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AnimatronicProps {
  position: [number, number, number];
  color: string;
  name: string;
  onJumpscare?: () => void;
}

export default function Animatronic({ position, color, name, onJumpscare }: AnimatronicProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [currentLocation, setCurrentLocation] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const locations: [number, number, number][] = [
    [0, 0, -8],
    [-5, 0, -5],
    [-8, 0, 0],
    [-8, 0, 5],
  ];

  useEffect(() => {
    const moveInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const nextLocation = (currentLocation + 1) % locations.length;
        setCurrentLocation(nextLocation);
        setIsActive(true);
        
        if (nextLocation === locations.length - 1 && Math.random() > 0.5) {
          onJumpscare?.();
        }
      }
    }, 5000);

    return () => clearInterval(moveInterval);
  }, [currentLocation, onJumpscare]);

  useFrame(() => {
    if (groupRef.current) {
      const targetPos = locations[currentLocation];
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        targetPos[0],
        0.01
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        targetPos[1],
        0.01
      );
      groupRef.current.position.z = THREE.MathUtils.lerp(
        groupRef.current.position.z,
        targetPos[2],
        0.01
      );
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 2, 1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </mesh>
      
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </mesh>

      <mesh position={[-0.25, 1.4, 0.5]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#ffffff" emissive="#ff0000" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.25, 1.4, 0.5]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#ffffff" emissive="#ff0000" emissiveIntensity={0.5} />
      </mesh>

      {isActive && (
        <pointLight position={[0, 2, 0]} intensity={1} color={color} distance={5} />
      )}
    </group>
  );
}
