import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Camera {
  id: string;
  name: string;
  location: string;
}

const cameras: Camera[] = [
  { id: 'CAM1A', name: 'Show Stage', location: 'Main Stage' },
  { id: 'CAM1B', name: 'Dining Area', location: 'Dining Area' },
  { id: 'CAM1C', name: 'Pirate Cove', location: "Pirate's Cove" },
  { id: 'CAM2A', name: 'West Hall', location: 'West Hall' },
  { id: 'CAM2B', name: 'West Hall Corner', location: 'West Hall Corner' },
  { id: 'CAM3', name: 'Supply Closet', location: 'Supply Closet' },
  { id: 'CAM4A', name: 'East Hall', location: 'East Hall' },
  { id: 'CAM4B', name: 'East Hall Corner', location: 'East Hall Corner' },
  { id: 'CAM5', name: 'Backstage', location: 'Backstage' },
  { id: 'CAM6', name: 'Kitchen', location: 'Kitchen' },
  { id: 'CAM7', name: 'Restrooms', location: 'Restrooms' },
];

interface CameraSystemProps {
  onClose: () => void;
}

export default function CameraSystem({ onClose }: CameraSystemProps) {
  const [selectedCamera, setSelectedCamera] = useState<Camera>(cameras[0]);

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <div className="w-full h-full flex flex-col">
        <div className="flex-1 relative bg-gray-900 border-8 border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent pointer-events-none" />
          
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center space-y-4 relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9ImdyYXkiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
              
              <div className="relative">
                <div className="text-green-400 font-mono text-6xl animate-pulse">
                  {selectedCamera.id}
                </div>
                <div className="text-green-300 font-mono text-2xl mt-2">
                  {selectedCamera.location}
                </div>
                <div className="mt-8 text-gray-500 font-mono">
                  [NO SIGNAL - STATIC]
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-4 left-4 text-green-400 font-mono text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              REC
            </div>
          </div>

          <div className="absolute top-4 right-4 text-green-400 font-mono text-sm">
            {new Date().toLocaleTimeString()}
          </div>
        </div>

        <div className="bg-gray-950 border-t-4 border-gray-800 p-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-4 gap-2 mb-4">
              {cameras.map((camera) => (
                <Button
                  key={camera.id}
                  onClick={() => setSelectedCamera(camera)}
                  variant={selectedCamera.id === camera.id ? 'default' : 'outline'}
                  className={`font-mono ${
                    selectedCamera.id === camera.id
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  {camera.id}
                </Button>
              ))}
            </div>
            
            <Button
              onClick={onClose}
              className="w-full bg-red-600/80 hover:bg-red-700 font-mono text-lg py-6"
            >
              <Icon name="XCircle" size={24} className="mr-2" />
              CLOSE CAMERAS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
