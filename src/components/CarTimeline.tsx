'use client';

import Link from 'next/link';
import { cars } from '@/lib/cars-data';

export function CarTimeline() {
  return (
    <div className="space-y-3">
      {cars.map((car) => (
        <Link
          key={car.slug}
          href={`/cars/${car.slug}`}
          className="bg-surface border border-dark-border rounded-lg block hover:border-primary-500/50 transition-all duration-300 group overflow-hidden"
        >
          {/* Main row — always visible */}
          <div className="flex items-center gap-6 p-6 md:p-8">
            <div className="min-w-[80px]">
              <p className="text-xs text-gray-500 uppercase">Year</p>
              <p className="text-2xl font-bold text-primary-500">{car.year}</p>
            </div>

            <div className="flex-1">
              <h3 className="font-bold uppercase text-lg group-hover:text-white transition-colors">{car.model}</h3>
              <p className="text-xs text-gray-500 mt-1">
                {car.competitions.length === 1 ? '1 competition' : `${car.competitions.length} competitions`}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                car.type === 'EV'
                  ? 'bg-primary-500/20 text-primary-400'
                  : 'bg-highlight/20 text-highlight'
              }`}>
                {car.type}
              </span>
              <span className="text-gray-600 group-hover:text-gray-400 transition-colors text-lg">→</span>
            </div>
          </div>

          {/* Expandable details — shows on hover */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300">
            <div className="overflow-hidden">
              <div className="border-t border-dark-border px-6 pb-6 md:px-8 md:pb-8 pt-5 flex flex-wrap gap-8">
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
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
