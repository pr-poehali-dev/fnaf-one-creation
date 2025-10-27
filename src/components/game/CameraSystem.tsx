import { Button } from '@/components/ui/button';

interface CameraSystemProps {
  currentCamera: number;
  onSelectCamera: (index: number) => void;
  animatronics: {
    [key: string]: number;
  };
}

const cameras = [
  { id: 0, name: 'Show Stage', description: 'Главная сцена' },
  { id: 1, name: 'Dining Area', description: 'Столовая' },
  { id: 2, name: 'Backstage', description: 'За кулисами' },
  { id: 3, name: 'Kitchen', description: 'Кухня' },
  { id: 4, name: 'Left Hall', description: 'Левый коридор' },
  { id: 5, name: 'Right Hall', description: 'Правый коридор' },
  { id: 6, name: 'Supply Closet', description: 'Подсобка' },
  { id: 7, name: 'West Hall Corner', description: 'Угол западного коридора' },
  { id: 8, name: 'East Hall Corner', description: 'Угол восточного коридора' },
];

const CameraSystem = ({ currentCamera, onSelectCamera, animatronics }: CameraSystemProps) => {
  const currentCam = cameras.find(cam => cam.id === currentCamera) || cameras[0];

  return (
    <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center pointer-events-auto">
      <div className="w-full max-w-4xl h-96 bg-gray-900 border-4 border-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="text-center">
            <div className="text-green-400 text-4xl font-mono mb-4 animate-pulse">
              {currentCam.name}
            </div>
            <div className="text-green-300 text-xl font-mono mb-8">
              {currentCam.description}
            </div>
            <div className="text-gray-500 text-sm font-mono">
              [CAMERA FEED PLACEHOLDER]
            </div>
          </div>
        </div>

        <div className="absolute top-2 left-2 text-green-400 font-mono text-sm flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          <span>REC</span>
        </div>

        <div className="absolute top-2 right-2 text-green-400 font-mono text-sm">
          CAM {String(currentCamera).padStart(2, '0')}
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-0.5 bg-green-400 opacity-20 animate-scan" />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-3 max-w-2xl">
        {cameras.map(cam => (
          <Button
            key={cam.id}
            onClick={() => onSelectCamera(cam.id)}
            variant={currentCamera === cam.id ? "default" : "secondary"}
            className="h-16 flex flex-col items-center justify-center"
          >
            <div className="font-bold text-xs">CAM {String(cam.id).padStart(2, '0')}</div>
            <div className="text-xs">{cam.name}</div>
          </Button>
        ))}
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(400px); }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CameraSystem;
