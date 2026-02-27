import { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'Voor behandeling',
  afterAlt = 'Na behandeling',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <div
      className="relative w-full select-none overflow-hidden rounded-xl shadow-2xl cursor-col-resize"
      style={{ aspectRatio: '16/10' }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt={afterAlt}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
          NA
        </div>
      </div>

      {/* Before Image (Overlay with clip) */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
          VOOR
        </div>
      </div>

      {/* Slider Line and Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
        style={{
          left: `${sliderPosition}%`,
          transform: 'translateX(-50%)',
        }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-white hover:scale-110 transition-transform">
          <ArrowLeftRight className="text-[#34B8C3]" size={24} strokeWidth={2.5} />
        </div>

        {/* Top Cap */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg"></div>

        {/* Bottom Cap */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg"></div>
      </div>

      {/* Instruction Overlay (shows briefly on load) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm pointer-events-none opacity-0 animate-fade-in-out">
        Sleep om te vergelijken
      </div>
    </div>
  );
}
