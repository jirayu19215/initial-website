import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 -z-10">
          <img
            src="/DSC05116.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="w-full flex items-start justify-center md:justify-end px-6 md:px-12 pt-24">
          <div className="text-center md:text-right max-w-xl">
            <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight">
              Engineered for
              <br />
              <span className="text-primary-500">
                Performance
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl">
              Designing and building high-performance electric race cars
              for the next generation of engineers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end items-center">
              <a href="/contact" className="btn-primary w-full sm:w-auto text-center">Become a Sponsor</a>
              <a href="/cars" className="btn-secondary w-full sm:w-auto text-center">Explore Our Car</a>
            </div>
          </div>
        </div>
      </section>

      {/* Current Car Highlight + Stats */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="/Race2569-302.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Stats Bar */}
        <div className="border-b border-white/10 bg-black/40 backdrop-blur-sm">
          <div className="container-section py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">2025</p>
                <p className="text-sm uppercase tracking-wide text-gray-400">Year Active</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-highlight mb-2">30+</p>
                <p className="text-sm uppercase tracking-wide text-gray-400">Members</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-highlight mb-2">1</p>
                <p className="text-sm uppercase tracking-wide text-gray-400">Electric Car</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-highlight mb-2">5+</p>
                <p className="text-sm uppercase tracking-wide text-gray-400">Subsystems</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-24 container-section">
          <div className="max-w-xl">
            <h2 className="section-title mb-8">KMITL-FS01</h2>

            <p className="text-lg text-gray-300 mb-8">
              Our flagship electric race car, engineered with cutting-edge technology and precision craftsmanship. Every component designed for maximum performance.
            </p>

            <div className="flex flex-wrap gap-12 mb-12">
              <div className="border-l-4 border-primary-500 pl-6">
                <p className="text-sm text-gray-400">0–100 km/h</p>
                <p className="text-3xl font-bold text-highlight">3.2s</p>
              </div>
              <div className="border-l-4 border-highlight pl-6">
                <p className="text-sm text-gray-400">Power Output</p>
                <p className="text-3xl font-bold text-highlight">85 kW</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-6">
                <p className="text-sm text-gray-400">Curb Weight</p>
                <p className="text-3xl font-bold text-highlight">280 kg</p>
              </div>
              <div className="border-l-4 border-highlight pl-6">
                <p className="text-sm text-gray-400">Battery Capacity</p>
                <p className="text-3xl font-bold text-highlight">14.4 kWh</p>
              </div>
            </div>

            <a href="/cars" className="btn-primary">View Full Specs</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container-section py-24 border-t border-dark-border">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-primary-500 mb-4">About Us</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 leading-tight">
            Building the Next Generation<br />of Engineers
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            KMITL Formula Student is a multidisciplinary engineering team
            designing and building high-performance electric race cars.
          </p>
          <p className="text-lg text-gray-300 mb-10">
            From concept to track, our team integrates mechanical,
            electrical, and software systems into a fully functional
            formula vehicle.
          </p>
          <a href="/about" className="btn-secondary inline-block">Meet the Team →</a>
        </div>
      </section>

      {/* Race Calendar */}
      <section className="container-section py-24 border-t border-dark-border">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary-500 mb-4">2026 Season</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight">Where We Compete</h2>
          </div>
          <a href="/news" className="btn-secondary hidden md:inline-block">View Details →</a>
        </div>

        <div className="space-y-4 mb-8">
          {[
            { event: 'Formula Student China', location: 'China (Location TBC)', date: 'Oct 13–18, 2026', detail: 'EV & AV Class', status: 'Upcoming', href: 'https://formulastudent.sae-china.org/', bg: '/fsc-competition.jpg' },
            { event: 'Formula Student Thailand', location: 'Thailand', date: '2025', detail: '', status: 'Confirmed', href: 'https://www.tsae.or.th/', bg: '/TSAE.avif' },
          ].map((race, idx) => (
            <a
              key={idx}
              href={race.href ?? '#'}
              target={race.href ? '_blank' : undefined}
              rel={race.href ? 'noopener noreferrer' : undefined}
              className="relative flex items-center justify-between border border-dark-border rounded-lg px-6 py-5 overflow-hidden hover:border-primary-500/50 transition-colors group"
            >
              {race.bg && (
                <>
                  <img src={race.bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/65" />
                </>
              )}
              {!race.bg && <div className="absolute inset-0 bg-surface/30" />}

              <div className="relative flex items-center gap-6">
                <span className="text-gray-600 font-mono text-sm w-4">{String(idx + 1).padStart(2, '0')}</span>
                <div>
                  <p className="font-bold uppercase text-sm tracking-wide group-hover:text-white transition-colors">{race.event}</p>
                  <p className="text-gray-400 text-xs mt-1">{race.location}</p>
                </div>
              </div>
              <div className="relative flex items-center gap-6 text-right">
                <div className="hidden sm:block">
                  <p className="text-gray-300 text-sm">{race.date}</p>
                  {race.detail && <p className="text-gray-500 text-xs mt-0.5">{race.detail}</p>}
                </div>
                <span className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${
                  race.status === 'Confirmed' ? 'bg-green-500/20 text-green-400' :
                  race.status === 'Upcoming' ? 'bg-primary-500/20 text-primary-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {race.status}
                </span>
              </div>
            </a>
          ))}
        </div>

        <a href="/news" className="btn-secondary inline-block md:hidden">View Details →</a>
      </section>

      {/* Latest Results */}
      <section className="container-section py-24 border-t border-dark-border">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-primary-500 mb-4">2025 Latest Results</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight">Competition Results</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {/* FST 2025 Result */}
          <div className="relative overflow-hidden rounded-lg" style={{ backgroundImage: "url('/DSCF5192.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black/75" />
            <div className="relative z-10 p-8">
              <div className="mb-6">
                <p className="font-bold uppercase text-sm tracking-wide">Formula Student Thailand 2025</p>
                <p className="text-gray-400 text-xs mt-1">Thailand · 2024</p>
              </div>
              <div className="flex gap-8 mb-8">
                <div className="border-l-4 border-primary-500 pl-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Overall</p>
                  <p className="text-3xl font-black text-white">6<span className="text-lg align-super">th</span></p>
                  <p className="text-xs text-gray-500 mt-1">ICV / EV</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-primary-500/20 text-primary-400 uppercase tracking-wide shrink-0">Winner</span>
                  <p className="text-sm text-gray-300">Ansys Simulation Award <span className="text-gray-500">(Presented by CADFEM Thailand)</span></p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-dark-border/60 text-gray-400 uppercase tracking-wide shrink-0">1st Runner-Up</span>
                  <p className="text-sm text-gray-300">Efficiency Event</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-dark-border/60 text-gray-400 uppercase tracking-wide shrink-0">1st Runner-Up</span>
                  <p className="text-sm text-gray-300">Category EV</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2026 Upcoming */}
          <div className="border border-primary-500/30 rounded-lg p-8 bg-secondary flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary-500 mb-3">Upcoming 2026</p>
              <p className="font-black uppercase text-lg leading-tight">Next Competitions</p>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-500 pl-4">
                <p className="font-bold uppercase text-sm text-white">Formula Student China 2026</p>
                <p className="text-gray-400 text-xs mt-1">Oct 13–18, 2026 · China</p>
                <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded bg-primary-500/20 text-primary-400 uppercase tracking-wide">EV &amp; AV Class</span>
              </div>
              <div className="border-l-4 border-dark-border pl-4">
                <p className="font-bold uppercase text-sm text-white">Formula Student Thailand 2026</p>
                <p className="text-gray-400 text-xs mt-1">2026 · Thailand</p>
                <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded bg-dark-border/60 text-gray-400 uppercase tracking-wide">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-transparent to-highlight/20" />
        <div className="container-section relative z-10 text-center">
          <h2 className="section-title mb-6">Partner with the Next Generation</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join us in supporting engineering excellence and innovation in motorsport
          </p>
          <a href="/sponsors" className="btn-primary">Download Sponsorship Deck</a>
        </div>
      </section>

      <Footer />
    </>
  );
}
