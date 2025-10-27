import { Canvas } from '@react-three/fiber';
import { useState, useEffect } from 'react';
import Office from '@/components/Game/Office';
import CameraController from '@/components/Game/Camera';
import GameUI from '@/components/Game/GameUI';
import CameraSystem from '@/components/Game/CameraSystem';
import Animatronic from '@/components/Game/Animatronic';
import Jumpscare from '@/components/Game/Jumpscare';

const Index = () => {
  const [power, setPower] = useState(100);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [leftDoorClosed, setLeftDoorClosed] = useState(false);
  const [rightDoorClosed, setRightDoorClosed] = useState(false);
  const [leftLightOn, setLeftLightOn] = useState(false);
  const [rightLightOn, setRightLightOn] = useState(false);
  const [showJumpscare, setShowJumpscare] = useState(false);
  const [jumpscareAnimatronic, setJumpscareAnimatronic] = useState('');

  useEffect(() => {
    const powerDrain = setInterval(() => {
      setPower((prev) => {
        let drain = 1;
        if (leftDoorClosed) drain += 1;
        if (rightDoorClosed) drain += 1;
        if (leftLightOn) drain += 0.5;
        if (rightLightOn) drain += 0.5;
        if (cameraOpen) drain += 0.5;
        
        return Math.max(0, prev - drain / 10);
      });
    }, 1000);

    return () => clearInterval(powerDrain);
  }, [leftDoorClosed, rightDoorClosed, leftLightOn, rightLightOn, cameraOpen]);

  useEffect(() => {
    if (power <= 0) {
      setLeftDoorClosed(false);
      setRightDoorClosed(false);
      setLeftLightOn(false);
      setRightLightOn(false);
    }
  }, [power]);

  const handleJumpscare = (name: string) => {
    setJumpscareAnimatronic(name);
    setShowJumpscare(true);
  };

  const handleJumpscareEnd = () => {
    setShowJumpscare(false);
    setPower(100);
    setLeftDoorClosed(false);
    setRightDoorClosed(false);
    setLeftLightOn(false);
    setRightLightOn(false);
  };

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {showJumpscare && (
        <Jumpscare 
          animatronicName={jumpscareAnimatronic}
          onEnd={handleJumpscareEnd}
        />
      )}

      {cameraOpen ? (
        <CameraSystem onClose={() => setCameraOpen(false)} />
      ) : (
        <>
          <Canvas
            camera={{ position: [0, 1, 5], fov: 75 }}
            className="w-full h-full"
          >
            <ambientLight intensity={0.3} />
            <CameraController />
            <Office />
            <Animatronic 
              position={[0, 0, -8]} 
              color="#8B4513" 
              name="Freddy"
              onJumpscare={() => handleJumpscare('Freddy')}
            />
            <Animatronic 
              position={[3, 0, -8]} 
              color="#4169E1" 
              name="Bonnie"
              onJumpscare={() => handleJumpscare('Bonnie')}
            />
            <Animatronic 
              position={[-3, 0, -8]} 
              color="#FFD700" 
              name="Chica"
              onJumpscare={() => handleJumpscare('Chica')}
            />
          </Canvas>

          <GameUI
            power={power}
            onCameraOpen={() => setCameraOpen(true)}
            onDoorToggle={(side) => {
              if (power > 0) {
                if (side === 'left') setLeftDoorClosed(!leftDoorClosed);
                else setRightDoorClosed(!rightDoorClosed);
              }
            }}
            onLightToggle={(side) => {
              if (power > 0) {
                if (side === 'left') setLeftLightOn(!leftLightOn);
                else setRightLightOn(!rightLightOn);
              }
            }}
            leftDoorClosed={leftDoorClosed}
            rightDoorClosed={rightDoorClosed}
            leftLightOn={leftLightOn}
            rightLightOn={rightLightOn}
          />
        </>
      )}
    </div>
  );
};

export default Index;