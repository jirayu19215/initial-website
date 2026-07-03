'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    id: 'powertrain',
    image: '/car_1.jpg',
    label: 'Powertrain',
    title: '4 In-Hub Motors · 4WD',
    stat: '40.69 kW',
    desc: 'Four in-hub motors deliver true four-wheel drive with torque vectoring for maximum traction out of every corner.',
  },
  {
    id: 'battery',
    image: '/car_2.jpg',
    label: 'Battery',
    title: 'High-Density Accumulator',
    stat: '6.75 kWh · 108 V',
    desc: 'A 30S1P lithium accumulator weighing just 31.5 kg — enough energy to finish endurance with efficiency that took 1st Runner-Up at TSAE 2026.',
  },
  {
    id: 'aero',
    image: '/car_3.jpg',
    label: 'Aerodynamics',
    title: 'Wind-Tunnel Verified',
    stat: '208 N Downforce',
    desc: 'A full aero package simulated in Ansys and validated in the wind tunnel — the work behind our Ansys Simulation Award.',
  },
  {
    id: 'chassis',
    image: '/car_4.jpg',
    label: 'Chassis',
    title: 'Lightweight Spaceframe',
    stat: '31.56 kg',
    desc: 'A steel spaceframe with a factor of safety of 2.13 — stiff where it matters, light everywhere else.',
  },
];

export function ScrollySpecs() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="border-t border-dark-border bg-carbon relative">
      <div className="md:grid md:grid-cols-2">
        {/* Pinned visual */}
        <div className="sticky top-0 z-10 h-[45vh] md:h-screen overflow-hidden">
          {steps.map((s, i) => (
            <img
              key={s.id}
              src={s.image}
              alt={s.title}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <p className="text-xs uppercase tracking-[0.3em] text-highlight mb-1">
              0{active + 1} / 0{steps.length}
            </p>
            <p className="font-black uppercase text-xl md:text-2xl">
              {steps[active].label}
            </p>
          </div>
          {/* Progress bars */}
          <div className="absolute top-6 left-6 md:top-10 md:left-10 flex gap-2">
            {steps.map((s, i) => (
              <span
                key={s.id}
                className={`h-1 w-8 rounded-full transition-colors duration-500 ${
                  i <= active ? 'bg-primary-500' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scrolling steps */}
        <div className="relative z-0">
          {steps.map((s, i) => (
            <div
              key={s.id}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className={`min-h-[75vh] md:min-h-screen flex items-center px-6 md:px-14 py-16 transition-opacity duration-500 ${
                i === active ? 'opacity-100' : 'opacity-30'
              }`}
            >
              <div>
                <p className="eyebrow">{s.label}</p>
                <h3 className="mb-4">{s.title}</h3>
                <p className="text-4xl md:text-5xl font-black text-highlight mb-6">
                  {s.stat}
                </p>
                <p className="text-lg text-gray-300 max-w-md">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
