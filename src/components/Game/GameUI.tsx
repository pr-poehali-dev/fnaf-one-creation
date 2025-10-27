import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface GameUIProps {
  power: number;
  onCameraOpen: () => void;
  onDoorToggle: (side: 'left' | 'right') => void;
  onLightToggle: (side: 'left' | 'right') => void;
  leftDoorClosed: boolean;
  rightDoorClosed: boolean;
  leftLightOn: boolean;
  rightLightOn: boolean;
}

export default function GameUI({
  power,
  onCameraOpen,
  onDoorToggle,
  onLightToggle,
  leftDoorClosed,
  rightDoorClosed,
  leftLightOn,
  rightLightOn,
}: GameUIProps) {
  const [time, setTime] = useState('12:00 AM');
  const [night, setNight] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const hour = Math.floor(Math.random() * 6);
      setTime(`${hour === 0 ? 12 : hour}:00 AM`);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="fixed top-4 left-4 z-50">
        <Card className="bg-black/80 border-gray-700 p-4">
          <div className="text-green-400 font-mono space-y-2">
            <div className="text-xl">Night {night}</div>
            <div className="text-lg">{time}</div>
          </div>
        </Card>
      </div>

      <div className="fixed top-4 right-4 z-50">
        <Card className="bg-black/80 border-gray-700 p-4 min-w-[200px]">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-yellow-400">
              <span className="font-mono">POWER</span>
              <span className="font-mono font-bold">{power}%</span>
            </div>
            <Progress value={power} className="h-3" />
          </div>
        </Card>
      </div>

      <div className="fixed bottom-4 left-4 z-50 space-y-2">
        <Card className="bg-black/80 border-gray-700 p-3">
          <div className="space-y-2">
            <div className="text-white font-mono text-sm mb-2">LEFT DOOR</div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={leftDoorClosed ? 'default' : 'outline'}
                onClick={() => onDoorToggle('left')}
                className="font-mono"
              >
                <Icon name={leftDoorClosed ? 'Lock' : 'LockOpen'} size={16} />
              </Button>
              <Button
                size="sm"
                variant={leftLightOn ? 'default' : 'outline'}
                onClick={() => onLightToggle('left')}
                className="font-mono"
              >
                <Icon name="Lightbulb" size={16} />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        <Card className="bg-black/80 border-gray-700 p-3">
          <div className="space-y-2">
            <div className="text-white font-mono text-sm mb-2">RIGHT DOOR</div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={rightDoorClosed ? 'default' : 'outline'}
                onClick={() => onDoorToggle('right')}
                className="font-mono"
              >
                <Icon name={rightDoorClosed ? 'Lock' : 'LockOpen'} size={16} />
              </Button>
              <Button
                size="sm"
                variant={rightLightOn ? 'default' : 'outline'}
                onClick={() => onLightToggle('right')}
                className="font-mono"
              >
                <Icon name="Lightbulb" size={16} />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <Button
          onClick={onCameraOpen}
          className="bg-green-600/80 hover:bg-green-700 text-white font-mono px-8 py-6 text-lg"
        >
          <Icon name="Video" size={24} className="mr-2" />
          OPEN CAMERAS
        </Button>
      </div>
    </>
  );
}
