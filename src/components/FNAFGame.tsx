import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useState, useEffect } from 'react';
import Office from './game/Office';
import GameUI from './game/GameUI';
import CameraSystem from './game/CameraSystem';

interface GameState {
  power: number;
  time: number;
  night: number;
  leftDoorClosed: boolean;
  rightDoorClosed: boolean;
  leftLightOn: boolean;
  rightLightOn: boolean;
  cameraActive: boolean;
  currentCamera: number;
  gameOver: boolean;
  animatronics: {
    [key: string]: number;
  };
}

const FNAFGame = () => {
  const [gameState, setGameState] = useState<GameState>({
    power: 100,
    time: 0,
    night: 1,
    leftDoorClosed: false,
    rightDoorClosed: false,
    leftLightOn: false,
    rightLightOn: false,
    cameraActive: false,
    currentCamera: 0,
    gameOver: false,
    animatronics: {
      freddy: 0,
      bonnie: 0,
      chica: 0,
      foxy: 0
    }
  });

  useEffect(() => {
    const powerDrain = setInterval(() => {
      setGameState(prev => {
        if (prev.power <= 0) return { ...prev, power: 0 };
        
        let drain = 1;
        if (prev.leftDoorClosed) drain += 1;
        if (prev.rightDoorClosed) drain += 1;
        if (prev.leftLightOn) drain += 0.5;
        if (prev.rightLightOn) drain += 0.5;
        if (prev.cameraActive) drain += 0.5;
        
        return { ...prev, power: Math.max(0, prev.power - drain) };
      });
    }, 1000);

    return () => clearInterval(powerDrain);
  }, []);

  useEffect(() => {
    const timeProgress = setInterval(() => {
      setGameState(prev => {
        if (prev.time >= 360) {
          return { ...prev, time: 0, night: prev.night + 1 };
        }
        return { ...prev, time: prev.time + 1 };
      });
    }, 1000);

    return () => clearInterval(timeProgress);
  }, []);

  const toggleLeftDoor = () => {
    setGameState(prev => ({ ...prev, leftDoorClosed: !prev.leftDoorClosed }));
  };

  const toggleRightDoor = () => {
    setGameState(prev => ({ ...prev, rightDoorClosed: !prev.rightDoorClosed }));
  };

  const toggleLeftLight = () => {
    setGameState(prev => ({ ...prev, leftLightOn: !prev.leftLightOn }));
  };

  const toggleRightLight = () => {
    setGameState(prev => ({ ...prev, rightLightOn: !prev.rightLightOn }));
  };

  const toggleCamera = () => {
    setGameState(prev => ({ ...prev, cameraActive: !prev.cameraActive }));
  };

  const selectCamera = (cameraIndex: number) => {
    setGameState(prev => ({ ...prev, currentCamera: cameraIndex }));
  };

  return (
    <div className="w-full h-screen relative bg-black">
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 1.6, 0]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 2, 0]} intensity={0.5} />
        
        <Office 
          leftDoorClosed={gameState.leftDoorClosed}
          rightDoorClosed={gameState.rightDoorClosed}
          leftLightOn={gameState.leftLightOn}
          rightLightOn={gameState.rightLightOn}
        />
        
        <OrbitControls 
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 3}
          maxAzimuthAngle={Math.PI / 3}
        />
      </Canvas>

      <GameUI
        power={gameState.power}
        time={gameState.time}
        night={gameState.night}
        leftDoorClosed={gameState.leftDoorClosed}
        rightDoorClosed={gameState.rightDoorClosed}
        leftLightOn={gameState.leftLightOn}
        rightLightOn={gameState.rightLightOn}
        cameraActive={gameState.cameraActive}
        onToggleLeftDoor={toggleLeftDoor}
        onToggleRightDoor={toggleRightDoor}
        onToggleLeftLight={toggleLeftLight}
        onToggleRightLight={toggleRightLight}
        onToggleCamera={toggleCamera}
      />

      {gameState.cameraActive && (
        <CameraSystem
          currentCamera={gameState.currentCamera}
          onSelectCamera={selectCamera}
          animatronics={gameState.animatronics}
        />
      )}
    </div>
  );
};

export default FNAFGame;
