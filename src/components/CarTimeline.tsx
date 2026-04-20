'use client';

import Link from 'next/link';
import { useState } from 'react';
import { cars } from '@/lib/cars-data';

export function CarTimeline() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {cars.map((car) => (
        <div key={car.slug} className="bg-surface border border-dark-border rounded-lg overflow-hidden hover:border-primary-500/50 transition-all duration-300 group">
          {/* Main row */}
          <div className="flex items-center gap-4 md:gap-6 p-5 md:p-8">
            <div className="min-w-[64px] md:min-w-[80px]">
              <p className="text-xs text-gray-500 uppercase">Year</p>
              <p className="text-xl md:text-2xl font-bold text-primary-500">{car.year}</p>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-bold uppercase text-base md:text-lg group-hover:text-white transition-colors truncate">{car.model}</h3>
              <p className="text-xs text-gray-500 mt-1">
                {car.competitions.length === 1 ? '1 competition' : `${car.competitions.length} competitions`}
              </p>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-bold uppercase ${
                car.type === 'EV'
                  ? 'bg-primary-500/20 text-primary-400'
                  : 'bg-highlight/20 text-highlight'
              }`}>
                {car.type}
              </span>

              {/* Desktop: link arrow */}
              <Link href={`/cars/${car.slug}`} className="hidden md:block text-gray-600 hover:text-gray-400 transition-colors text-lg">
                →
              </Link>

              {/* Mobile: expand toggle */}
              <button
                className="md:hidden text-gray-500 hover:text-white transition-colors p-1"
                onClick={() => setOpenSlug(openSlug === car.slug ? null : car.slug)}
                aria-label="Toggle details"
              >
                <span className={`block transition-transform duration-200 ${openSlug === car.slug ? 'rotate-180' : ''}`}>▾</span>
              </button>
            </div>
          </div>

          {/* Desktop: hover expand */}
          <div className="hidden md:grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300">
            <div className="overflow-hidden">
              <div className="border-t border-dark-border px-8 pb-8 pt-5 flex flex-wrap gap-8">
                {car.competitions.map((comp, i) => (
                  <div key={i}>
                    <p className="text-xs font-bold text-highlight uppercase mb-3">{comp.name}</p>
                    <ul className="space-y-2">
                      {comp.awards.map((award, j) => (
                        <li key={j} className="flex gap-2 text-sm text-gray-300">
                          <span className="text-primary-500 shrink-0">▸</span>
                          {award}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link href={`/cars/${car.slug}`} className="self-end text-xs text-highlight hover:underline">
                  View Details →
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile: tap expand */}
          {openSlug === car.slug && (
            <div className="md:hidden border-t border-dark-border px-5 pb-5 pt-4 space-y-4">
              {car.competitions.map((comp, i) => (
                <div key={i}>
                  <p className="text-xs font-bold text-highlight uppercase mb-2">{comp.name}</p>
                  <ul className="space-y-1.5">
                    {comp.awards.map((award, j) => (
                      <li key={j} className="flex gap-2 text-sm text-gray-300">
                        <span className="text-primary-500 shrink-0">▸</span>
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link href={`/cars/${car.slug}`} className="inline-block mt-2 text-xs text-highlight hover:underline">
                View Details →
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
