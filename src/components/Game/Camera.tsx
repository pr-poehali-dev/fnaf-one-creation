import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraControllerProps {
  onRotationChange?: (rotation: number) => void;
}

export default function CameraController({ onRotationChange }: CameraControllerProps) {
  const { camera } = useThree();
  const [targetRotation, setTargetRotation] = useState(0);
  const currentRotation = useRef(0);

  useFrame(() => {
    currentRotation.current = THREE.MathUtils.lerp(
      currentRotation.current,
      targetRotation,
      0.1
    );
    camera.rotation.y = currentRotation.current;
    onRotationChange?.(currentRotation.current);
  });

  const handleMouseMove = (e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    setTargetRotation(x * Math.PI / 3);
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', handleMouseMove);
  }

  return null;
}
