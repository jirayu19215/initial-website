'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  /** Positive = moves slower than scroll (background feel). ~0.2–0.5 works well. */
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = 0.3, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const viewH = window.innerHeight;
      // -1 when section is below viewport, +1 when above
      const progress =
        (rect.top + rect.height / 2 - viewH / 2) / (viewH / 2 + rect.height / 2);
      el.style.transform = `translateY(${(-progress * speed * 100).toFixed(2)}px)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}
