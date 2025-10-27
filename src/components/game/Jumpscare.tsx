import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

interface JumpscareProps {
  animatronic: 'freddy' | 'bonnie' | 'chica' | 'foxy';
  onRestart: () => void;
}

const animatronicColors = {
  freddy: '#8B4513',
  bonnie: '#4169E1',
  chica: '#FFD700',
  foxy: '#8B0000'
};

const Jumpscare = ({ animatronic, onRestart }: JumpscareProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-200 ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundColor: animatronicColors[animatronic] }}
    >
      <div className="absolute inset-0 animate-pulse bg-black opacity-30" />
      
      <div className="relative z-10 text-center space-y-8 animate-shake">
        <div className="text-9xl font-bold text-white drop-shadow-2xl animate-glitch">
          {animatronic.toUpperCase()}
        </div>
        
        <div className="text-6xl font-bold text-red-600 animate-pulse drop-shadow-2xl">
          GAME OVER
        </div>

        <div className="pt-8">
          <Button
            onClick={onRestart}
            size="lg"
            className="bg-black hover:bg-gray-900 text-white font-bold text-2xl px-12 py-6 border-4 border-white"
          >
            ПОПРОБОВАТЬ СНОВА
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10% { transform: translateX(-10px) rotate(-1deg); }
          20% { transform: translateX(10px) rotate(1deg); }
          30% { transform: translateX(-10px) rotate(-1deg); }
          40% { transform: translateX(10px) rotate(1deg); }
          50% { transform: translateX(-10px) rotate(-1deg); }
          60% { transform: translateX(10px) rotate(1deg); }
          70% { transform: translateX(-10px) rotate(-1deg); }
          80% { transform: translateX(10px) rotate(1deg); }
          90% { transform: translateX(-10px) rotate(-1deg); }
        }
        
        @keyframes glitch {
          0% { text-shadow: 2px 2px #ff0000, -2px -2px #00ffff; }
          25% { text-shadow: -2px 2px #ff0000, 2px -2px #00ffff; }
          50% { text-shadow: 2px -2px #ff0000, -2px 2px #00ffff; }
          75% { text-shadow: -2px -2px #ff0000, 2px 2px #00ffff; }
          100% { text-shadow: 2px 2px #ff0000, -2px -2px #00ffff; }
        }
        
        .animate-shake {
          animation: shake 0.5s infinite;
        }
        
        .animate-glitch {
          animation: glitch 0.3s infinite;
        }
      `}</style>
    </div>
  );
};

export default Jumpscare;
