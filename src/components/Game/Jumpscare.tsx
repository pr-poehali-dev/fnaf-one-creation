import { useEffect, useState } from 'react';

interface JumpscareProps {
  animatronicName: string;
  onEnd: () => void;
}

export default function Jumpscare({ animatronicName, onEnd }: JumpscareProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      onEnd();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onEnd]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center animate-in fade-in duration-100">
      <div className="relative">
        <div className="absolute inset-0 animate-pulse">
          <div className="w-64 h-64 bg-red-600 rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="relative text-center space-y-4 animate-in zoom-in duration-200">
          <div className="text-9xl">🐻</div>
          <div className="text-red-500 font-bold text-4xl uppercase tracking-wider animate-pulse">
            {animatronicName}
          </div>
          <div className="text-white font-mono text-xl">
            YOU DIED
          </div>
        </div>
      </div>

      <audio autoPlay>
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGi77eafTRAMUKfj8LVjHAU7kdj0zHksByhzxe/glkILElyx6OyrVxQKQ5zd8sFuIgYsgs7y2Ik2CBdou+3mn00QDU+l4/C5ZB0FOI/X88x5LAcncsTu3JdDCxFYr+frrFgUCkCZ2/HEcCIHK3/O8tiJNggXaLvt5p9NEAxPpeTPumQdBTiP1/PMeSwHJ3LE7tyXQwsRWK/n66xYFApAmdzxxHAiByp/zvLYiTYIF2i77eafTRAMT6Xk0LplHgU3jdfzzHksByd0xO7cl0MLEViv5+usWBQKP5rc8MRwIgcqf87y2Ik2CBdou+3mn00QDE+l5NC6ZR4FN43X88x5LAcndMTu3JdDCxFYr+frrFgUCj+a3PDEcCIHKn/O8tiJNggXaLvt5p9NEAxPpeTQumUeBTeN1/PMeSwHJ3TE7tyXQwsRWK/n66xYFAo/mtzwxHAiByp/zvLYiTYIF2i77eafTRAMT6Xk0LplHgU3jdfzzHksByd0xO7cl0MLEViv5+usWBQKP5rc8MRwIgcqf87y2Ik2CBdou+3mn00QDE+l5NC6ZR4FN43X88x5LAcndMTu3JdDCxFYr+frrFgUCj+a3PDEcCIHKn/O8tiJNggXaLvt5p9NEAxPpeTQumUeBTeN1/PMeSwHJ3TE7tyXQwsRWK/n66xYFAo/mtzwxHAiByp/zvLYiTYIF2i77eafTRAMT6Xk0LplHgU3jdfzzHksByd0xO7cl0MLEViv5+usWBQKP5rc8MRwIgcqf87y2Ik2CBdou+3mn00QDE+l5NC6ZR4FN43X88x5LAcndMTu3JdDCxFYr+frrFgUCj+a3PDEcCIHKn/O8tiJNggXaLvt5p9NEAxPpeTQumUeBTeN1/PMeSwHJ3TE7tyXQwsRWK/n66xYFAo/mtzwxHAiByp/zvLYiTYIF2i77eafTRAM" />
      </audio>
    </div>
  );
}
