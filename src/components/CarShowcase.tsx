'use client';

import { useEffect, useState } from 'react';

const images = [
  '/car_1.jpg',
  '/car_2.jpg',
  '/car_3.jpg',
  '/car_4.jpg',
  '/DSC05116.jpg',
];

export function CarShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main stage */}
      <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-dark-border">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`INIXII view ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="speed-line" />
        <div className="absolute bottom-4 left-5 flex items-center gap-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-300">
            0{active + 1} / 0{images.length}
          </p>
          <div className="flex gap-1.5">
            {images.map((src, i) => (
              <span
                key={src}
                className={`h-0.5 w-6 rounded-full transition-colors duration-500 ${
                  i === active ? 'bg-primary-500' : 'bg-white/25'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            className={`flex-1 h-16 md:h-20 rounded overflow-hidden border transition-all duration-300 ${
              i === active
                ? 'border-primary-500 opacity-100'
                : 'border-dark-border opacity-50 hover:opacity-90'
            }`}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
