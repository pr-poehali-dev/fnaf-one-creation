import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface GameUIProps {
  power: number;
  time: number;
  night: number;
  leftDoorClosed: boolean;
  rightDoorClosed: boolean;
  leftLightOn: boolean;
  rightLightOn: boolean;
  cameraActive: boolean;
  onToggleLeftDoor: () => void;
  onToggleRightDoor: () => void;
  onToggleLeftLight: () => void;
  onToggleRightLight: () => void;
  onToggleCamera: () => void;
}

const GameUI = ({
  power,
  time,
  night,
  leftDoorClosed,
  rightDoorClosed,
  leftLightOn,
  rightLightOn,
  cameraActive,
  onToggleLeftDoor,
  onToggleRightDoor,
  onToggleLeftLight,
  onToggleRightLight,
  onToggleCamera
}: GameUIProps) => {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 60);
    return `${hours}:00 AM`;
  };

  const getPowerUsage = () => {
    let usage = 1;
    if (leftDoorClosed) usage += 1;
    if (rightDoorClosed) usage += 1;
    if (leftLightOn) usage += 1;
    if (rightLightOn) usage += 1;
    if (cameraActive) usage += 1;
    return usage;
  };

  return (
    <>
      <div className="absolute top-4 left-4 text-green-400 font-mono space-y-2 text-shadow">
        <div className="text-2xl font-bold">Night {night}</div>
        <div className="text-xl">{formatTime(time)}</div>
      </div>

      <div className="absolute top-4 right-4 text-yellow-400 font-mono space-y-1 text-right">
        <div className="text-3xl font-bold">{Math.floor(power)}%</div>
        <div className="flex items-center gap-1 justify-end">
          {Array.from({ length: getPowerUsage() }).map((_, i) => (
            <div key={i} className="w-3 h-3 bg-yellow-400 animate-pulse" />
          ))}
        </div>
        <div className="text-sm">USAGE</div>
      </div>

      <div className="absolute bottom-4 left-4 flex flex-col gap-2">
        <Button
          onClick={onToggleLeftDoor}
          variant={leftDoorClosed ? "destructive" : "secondary"}
          size="lg"
          className="w-40"
        >
          <Icon name={leftDoorClosed ? "DoorClosed" : "DoorOpen"} size={20} />
          <span className="ml-2">LEFT DOOR</span>
        </Button>
        <Button
          onClick={onToggleLeftLight}
          variant={leftLightOn ? "default" : "secondary"}
          size="lg"
          className="w-40"
        >
          <Icon name={leftLightOn ? "Lightbulb" : "LightbulbOff"} size={20} />
          <span className="ml-2">LEFT LIGHT</span>
        </Button>
      </div>

      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <Button
          onClick={onToggleRightDoor}
          variant={rightDoorClosed ? "destructive" : "secondary"}
          size="lg"
          className="w-40"
        >
          <Icon name={rightDoorClosed ? "DoorClosed" : "DoorOpen"} size={20} />
          <span className="ml-2">RIGHT DOOR</span>
        </Button>
        <Button
          onClick={onToggleRightLight}
          variant={rightLightOn ? "default" : "secondary"}
          size="lg"
          className="w-40"
        >
          <Icon name={rightLightOn ? "Lightbulb" : "LightbulbOff"} size={20} />
          <span className="ml-2">RIGHT LIGHT</span>
        </Button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={onToggleCamera}
          variant={cameraActive ? "default" : "secondary"}
          size="lg"
          className="w-48"
        >
          <Icon name="Camera" size={24} />
          <span className="ml-2">CAMERAS</span>
        </Button>
      </div>
    </>
  );
};

export default GameUI;
