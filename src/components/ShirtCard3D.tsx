'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

interface ShirtCard3DProps {
  frontImage: string;
  backImage?: string;
  alt: string;
}

export function ShirtCard3D({ frontImage, backImage, alt }: ShirtCard3DProps) {
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (flipped) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: -dy * 12, y: dx * 12 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      className="w-full h-64 cursor-pointer select-none"
      style={{ perspective: '1000px' }}
      onClick={() => setFlipped((f) => !f)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: flipped
            ? 'rotateY(180deg)'
            : `rotateY(${tilt.y}deg) rotateX(${tilt.x}deg)`,
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        {/* Front face */}
        <div
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          className="absolute inset-0 rounded-t-lg overflow-hidden bg-gradient-to-br from-surface to-secondary"
        >
          <Image
            src={frontImage}
            alt={alt}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <span className="absolute bottom-2 right-3 text-xs text-gray-500 uppercase tracking-wider">
            Click to flip ↺
          </span>
        </div>

        {/* Back face */}
        {backImage && (
          <div
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
            className="absolute inset-0 rounded-t-lg overflow-hidden bg-gradient-to-br from-secondary to-surface"
          >
            <Image
              src={backImage}
              alt={`${alt} — back`}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <span className="absolute bottom-2 right-3 text-xs text-gray-500 uppercase tracking-wider">
              Back side ↺
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
