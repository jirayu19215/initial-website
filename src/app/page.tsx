import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/DSC05116.jpg"
            alt="INIXII electric race car"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/40 to-black/20" />
          <div className="racing-stripes" />
        </div>

        <div className="speed-line" />

        <div className="w-full flex justify-center md:justify-end px-6 md:px-12">
          <div className="text-center md:text-right max-w-xl">
            <p className="text-xs uppercase tracking-[0.4em] text-highlight mb-4 hero-enter">
              INITIAL · Formula Student · Est. 2003
            </p>
            <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight hero-enter-1">
              Engineered for
              <br />
              <span className="text-gradient-racing">
                Performance
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl hero-enter-2">
              Designing and building high-performance electric race cars
              for the next generation of engineers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end items-center hero-enter-3">
              <a href="/contact" className="btn-primary w-full sm:w-auto text-center">Become a Partner</a>
              <a href="/cars" className="btn-secondary w-full sm:w-auto text-center">Explore Our Car</a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-400">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="block w-px h-10 bg-gradient-to-b from-primary-500 to-transparent" />
        </div>
      </section>

      {/* Current Car Highlight + Stats */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="/Race2569-302.jpg" alt="INITIAL KMITL electric race car at competition" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Stats Bar */}
        <div className="border-b border-white/10 bg-black/40 backdrop-blur-sm relative overflow-hidden">
          <div className="speed-line" />
          <div className="container-section py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                  <AnimatedCounter target={2003} duration={1200} />
                </p>
                <p className="text-sm uppercase tracking-wide text-gray-400">Est.</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                  <AnimatedCounter target={30} suffix="+" />
                </p>
                <p className="text-sm uppercase tracking-wide text-gray-400">Members</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                  <AnimatedCounter target={20} suffix="+" />
                </p>
                <p className="text-sm uppercase tracking-wide text-gray-400">Cars Built</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                  <AnimatedCounter target={2} suffix="×" />
                </p>
                <p className="text-sm uppercase tracking-wide text-gray-400">National Champions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-24 container-section">
          <Reveal>
            <div className="max-w-xl">
              <p className="eyebrow">2025 Car · EV</p>
              <h2 className="section-title mb-8">INIXII</h2>

              <p className="text-lg text-gray-300 mb-8">
                Our latest electric race car — a 4WD machine with four in-hub motors,
                torque vectoring, and wind-tunnel-verified aerodynamics.
                Winner of the Ansys Simulation Award at TSAE Auto Challenge 2026.
              </p>

              <div className="flex flex-wrap gap-12 mb-12">
                <div className="border-l-4 border-primary-500 pl-6">
                  <p className="text-sm text-gray-400">Power Output</p>
                  <p className="text-3xl font-bold text-highlight">40.69 kW</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-6">
                  <p className="text-sm text-gray-400">Drivetrain</p>
                  <p className="text-3xl font-bold text-highlight">4WD · 4 Motors</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-6">
                  <p className="text-sm text-gray-400">Battery</p>
                  <p className="text-3xl font-bold text-highlight">6.75 kWh</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-6">
                  <p className="text-sm text-gray-400">Downforce</p>
                  <p className="text-3xl font-bold text-highlight">208 N</p>
                </div>
              </div>

              <a href="/cars" className="btn-primary">View Full Specs</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Partner Marquee */}
      <section className="py-16 border-t border-dark-border overflow-hidden bg-carbon">
        <p className="text-center text-xs uppercase tracking-[0.4em] text-gray-500 mb-10">Powered by Our Partners</p>
        <div className="relative">
          <div className="flex w-max animate-marquee items-center gap-20 px-10">
            {[
              '/partner/Supreme/WURTH_50.png',
              '/partner/Supreme/WATANYOO_51.png',
              '/partner/Supreme/TOZZHIN_52.png',
              '/partner/Supreme/PGM_CARBON_53.png',
              '/partner/Supreme/PART_RICH_55.png',
              '/partner/Platinum/AMITA_54.png',
              '/partner/Platinum/ANSYS_CADFEM_49.png',
              '/partner/Platinum/NOWABUTR_PRECISION_48.png',
              '/partner/Gold/BENDIX_47.png',
              '/partner/Gold/SUMMIT_LENSO_46.png',
            ].concat([
              '/partner/Supreme/WURTH_50.png',
              '/partner/Supreme/WATANYOO_51.png',
              '/partner/Supreme/TOZZHIN_52.png',
              '/partner/Supreme/PGM_CARBON_53.png',
              '/partner/Supreme/PART_RICH_55.png',
              '/partner/Platinum/AMITA_54.png',
              '/partner/Platinum/ANSYS_CADFEM_49.png',
              '/partner/Platinum/NOWABUTR_PRECISION_48.png',
              '/partner/Gold/BENDIX_47.png',
              '/partner/Gold/SUMMIT_LENSO_46.png',
            ]).map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Partner logo"
                className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="/partners" className="text-highlight text-sm font-semibold uppercase tracking-widest hover:text-white transition-colors">All Partners →</a>
        </div>
      </section>

      {/* About Section */}
      <section className="container-section py-24 border-t border-dark-border bg-grid">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">About Us</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 leading-tight">
              Building the Next Generation<br />of Engineers
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              INITIAL — KMITL Formula Student — is a multidisciplinary engineering team
              designing and building high-performance electric race cars since 2003.
            </p>
            <p className="text-lg text-gray-300 mb-10">
              From concept to track, our team integrates mechanical,
              electrical, and software systems into a fully functional
              formula vehicle.
            </p>
            <a href="/about" className="btn-secondary inline-block">Meet the Team →</a>
          </div>
        </Reveal>
      </section>

      {/* Race Calendar */}
      <section className="container-section py-24 border-t border-dark-border">
        <Reveal>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow">2026 Season</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">Where We Compete</h2>
            </div>
            <a href="/news" className="btn-secondary hidden md:inline-block">View Details →</a>
          </div>
        </Reveal>

        <div className="space-y-4 mb-8">
          {[
            { event: 'TSAE Auto Challenge 2026', location: 'Pathum Thani Speedway, Thailand', date: 'Feb 5–7, 2026', detail: '6th Overall · Ansys Simulation Award', status: 'Completed', href: 'https://www.tsae.or.th/', bg: '/TSAE.avif' },
            { event: 'Formula Student China', location: 'China', date: 'Oct 13–18, 2026', detail: 'EV & AV Class', status: 'Upcoming', href: 'https://formulastudent.sae-china.org/', bg: '/fsc-competition.jpg' },
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
                  <img src={race.bg} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/65" />
                </>
              )}
              {!race.bg && <div className="absolute inset-0 bg-surface/30" />}

              <div className="relative flex items-center gap-6">
                <span className="text-gray-500 font-mono text-sm w-4">{String(idx + 1).padStart(2, '0')}</span>
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
                  race.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
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
        <Reveal>
          <div className="mb-10">
            <p className="eyebrow">2026 Season Results</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">Competition Results</h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {/* TSAE 2026 Result */}
          <Reveal>
            <div className="relative overflow-hidden rounded-lg h-full" style={{ backgroundImage: "url('/Race2569-302.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-black/75" />
              <div className="relative z-10 p-8">
                <div className="mb-6">
                  <p className="font-bold uppercase text-sm tracking-wide">TSAE Auto Challenge 2026</p>
                  <p className="text-gray-400 text-xs mt-1">Pathum Thani Speedway · Feb 5–7, 2026 · INIXII</p>
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
          </Reveal>

          {/* Upcoming */}
          <Reveal delay={120}>
            <div className="glass-panel border-primary-500/30 p-8 flex flex-col gap-6 h-full">
              <div>
                <p className="eyebrow">Upcoming</p>
                <p className="font-black uppercase text-lg leading-tight">Next Competitions</p>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <p className="font-bold uppercase text-sm text-white">Formula Student China 2026</p>
                  <p className="text-gray-400 text-xs mt-1">Oct 13–18, 2026 · China</p>
                  <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded bg-primary-500/20 text-primary-400 uppercase tracking-wide">EV &amp; AV Class</span>
                </div>
                <div className="border-l-4 border-dark-border pl-4">
                  <p className="font-bold uppercase text-sm text-white">Formula Student Thailand 2027</p>
                  <p className="text-gray-400 text-xs mt-1">2027 · Thailand</p>
                  <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded bg-dark-border/60 text-gray-400 uppercase tracking-wide">Coming Soon</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sponsor CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-transparent to-highlight/20" />
        <div className="float-orb w-72 h-72 bg-primary-500 top-0 left-1/4" />
        <div className="float-orb w-80 h-80 bg-highlight bottom-0 right-1/4" style={{ animationDelay: '-6s' }} />
        <div className="divider-glow absolute top-0 left-0 right-0" />
        <div className="container-section relative z-10 text-center">
          <Reveal>
            <h2 className="section-title mb-6">Partner with the Next Generation</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join us in supporting engineering excellence and innovation in motorsport
            </p>
            <a href="/partners" className="btn-primary animate-pulse-glow">Become a Partner</a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
