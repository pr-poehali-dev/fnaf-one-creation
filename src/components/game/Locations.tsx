import * as THREE from 'three';

interface LocationProps {
  position: [number, number, number];
  name: string;
}

export const ShowStage = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[8, 3, 0.5]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      <mesh position={[-2, 1, 0.5]}>
        <boxGeometry args={[1, 2, 1]} />
        <meshStandardMaterial color="#4169E1" />
      </mesh>
      
      <mesh position={[0, 1, 0.5]}>
        <boxGeometry args={[1, 2, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      <mesh position={[2, 1, 0.5]}>
        <boxGeometry args={[1, 2, 1]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>

      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
    </group>
  );
};

export const Hallway = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[3, 3, 10]} />
        <meshStandardMaterial color="#1a1a1a" side={THREE.BackSide} />
      </mesh>

      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3, 10]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      <pointLight position={[0, 2.5, 0]} intensity={0.3} color="#ffff88" />
      <pointLight position={[0, 2.5, 5]} intensity={0.3} color="#ffff88" />
    </group>
  );
};

export const Kitchen = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      <mesh position={[0, 0, -3]}>
        <boxGeometry args={[6, 3, 0.2]} />
        <meshStandardMaterial color="#3a3a3a" />
      </mesh>

      <mesh position={[-2, 0.5, -2]}>
        <boxGeometry args={[1.5, 1, 1]} />
        <meshStandardMaterial color="#555" />
      </mesh>

      <mesh position={[2, 0.5, -2]}>
        <boxGeometry args={[1.5, 1, 1]} />
        <meshStandardMaterial color="#555" />
      </mesh>

      <mesh position={[0, 1.5, -2]}>
        <boxGeometry args={[4, 0.5, 0.5]} />
        <meshStandardMaterial color="#666" />
      </mesh>

      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      <pointLight position={[0, 2.5, -1]} intensity={0.5} color="#ffffff" />
    </group>
  );
};

export const SupplyCloset = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[4, 3, 4]} />
        <meshStandardMaterial color="#1a1a1a" side={THREE.BackSide} />
      </mesh>

      <mesh position={[-1, 0.5, -1]}>
        <boxGeometry args={[0.8, 1.5, 0.6]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      <mesh position={[1, 0.5, -1]}>
        <boxGeometry args={[0.8, 1.5, 0.6]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      <mesh position={[0, 1.2, 1]}>
        <boxGeometry args={[2, 0.3, 1]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      <pointLight position={[0, 2.5, 0]} intensity={0.3} color="#ffaa44" />
    </group>
  );
};

export const Backstage = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[5, 3, 5]} />
        <meshStandardMaterial color="#0a0a0a" side={THREE.BackSide} />
      </mesh>

      <mesh position={[-1.5, 0.7, -1.5]}>
        <boxGeometry args={[0.6, 1.4, 0.6]} />
        <meshStandardMaterial color="#666" />
      </mesh>

      <mesh position={[0, 0.7, -1.5]}>
        <boxGeometry args={[0.6, 1.4, 0.6]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      <mesh position={[1.5, 0.7, -1.5]}>
        <boxGeometry args={[0.6, 1.4, 0.6]} />
        <meshStandardMaterial color="#888" />
      </mesh>

      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      <pointLight position={[0, 2.8, 0]} intensity={0.2} color="#ff4444" />
    </group>
  );
};
