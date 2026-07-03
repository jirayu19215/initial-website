import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CarTimeline } from '@/components/CarTimeline';
import { CarShowcase } from '@/components/CarShowcase';
import { Reveal } from '@/components/Reveal';
import { getCarBySlug } from '@/lib/cars-data';

export const metadata = {
  title: 'Cars | KMITL Formula Student',
  description:
    'Explore KMITL Formula Student racing vehicles - INIXII specifications, gallery, and 20+ years of car history.',
};

export default function Cars() {
  const inixii = getCarBySlug('inixii');

  return (
    <>
      <Navigation />

      {/* Cinematic Hero */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/car_1.jpg"
            alt="INIXII electric race car"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-black/40 to-black/30" />
          <div className="racing-stripes" />
        </div>
        <div className="speed-line" />

        <div className="container-section w-full pb-16 md:pb-24">
          <p className="text-xs uppercase tracking-[0.4em] text-highlight mb-4 hero-enter">
            2025 Car · Electric · 4WD
          </p>
          <h1 className="text-6xl md:text-[10rem] leading-none font-black uppercase mb-6 hero-enter-1">
            <span className="text-gradient-racing">INIXII</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 hero-enter-2">
            6th Overall &amp; Ansys Simulation Award winner at TSAE Auto Challenge 2026 —
            now preparing for Formula Student China 2026.
          </p>

          {/* Quick stat chips */}
          <div className="flex flex-wrap gap-3 hero-enter-3">
            {['40.69 kW', '4WD · 4 Motors', '6.75 kWh', '208 N Downforce'].map((chip) => (
              <span
                key={chip}
                className="glass-panel px-5 py-2.5 text-sm font-bold text-white uppercase tracking-wide"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-gray-400">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="block w-px h-10 bg-gradient-to-b from-primary-500 to-transparent" />
        </div>
      </section>

      {/* Showcase + Achievements */}
      <section className="container-section py-24 bg-grid">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="eyebrow">Showcase</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 leading-tight">
                Every Angle,<br />Engineered
              </h2>
              <CarShowcase />
            </Reveal>
          </div>

          <div className="lg:col-span-2 lg:pt-32">
            <Reveal delay={120}>
              <div className="glass-panel border-primary-500/30 p-8 mb-8 relative overflow-hidden">
                <div className="float-orb w-40 h-40 bg-primary-500 -top-10 -right-10" />
                <h3 className="text-lg font-bold text-highlight uppercase mb-5 relative">
                  2026 Achievements
                </h3>
                <ul className="space-y-3 text-sm text-gray-300 relative">
                  {(inixii?.competitions[0]?.awards ?? []).map((award) => (
                    <li key={award} className="flex gap-3">
                      <span className="text-primary-500 font-bold">✓</span>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-400 leading-relaxed">
                INIXII is our most advanced car to date — a ground-up 4WD electric
                design with four in-hub motors, torque vectoring, and a full
                wind-tunnel-verified aero package. Every subsystem below was
                designed, simulated, and built by our students.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Performance Metrics — big numbers */}
      <section className="relative py-20 bg-carbon overflow-hidden border-y border-dark-border">
        <div className="divider-glow absolute top-0 left-0 right-0" />
        <div className="container-section py-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { label: 'Peak Power', value: '40.69', unit: 'kW' },
              { label: 'Peak Torque', value: '121.74', unit: 'N·m' },
              { label: 'Downforce', value: '208', unit: 'N' },
              { label: 'System Voltage', value: '108', unit: 'V' },
            ].map((m, idx) => (
              <Reveal key={m.label} delay={idx * 100}>
                <div className="text-center">
                  <p className="text-5xl md:text-6xl font-black text-white leading-none">
                    {m.value}
                    <span className="text-xl md:text-2xl text-primary-500 ml-1">{m.unit}</span>
                  </p>
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mt-3">{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="divider-glow absolute bottom-0 left-0 right-0" />
      </section>

      {/* Full Specs — numbered rows */}
      <section id="specs" className="container-section py-24">
        <Reveal>
          <p className="eyebrow">Technical Data</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 leading-tight">
            Full Specifications
          </h2>
        </Reveal>

        <div className="border-t border-dark-border">
          {(inixii?.specs ?? []).map((spec, idx) => (
            <Reveal key={spec.system}>
              <div className="group grid md:grid-cols-[80px_1fr_1.2fr] gap-2 md:gap-8 items-baseline py-6 px-2 border-b border-dark-border hover:bg-surface/50 transition-colors">
                <span className="hidden md:block font-mono text-sm text-gray-600 group-hover:text-primary-500 transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="text-sm uppercase tracking-wide text-gray-400 group-hover:text-white transition-colors">
                  {spec.system}
                </p>
                <div>
                  <p className="text-lg md:text-xl font-bold text-white">{spec.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{spec.highlight}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Core Subsystems — numbered cards */}
      <section className="container-section py-24 bg-surface/30">
        <Reveal>
          <p className="eyebrow">Under the Skin</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 leading-tight">
            Core Subsystems
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'High Voltage & Powertrain',
              specs: ['4× WC-95 in-hub motors · 4WD', 'Peak 40.69 kW · 121.74 N·m', 'Planetary gearset 9.88:1 · SNCM420 carburized'],
            },
            {
              title: 'Energy Management',
              specs: ['Battery: 6.75 kWh · 30S1P · 108 V nominal', 'Pack weight 31.50 kg · 125 A (2C-rate)', 'Cell-level BMS monitoring'],
            },
            {
              title: 'Chassis & Aerodynamics',
              specs: ['Steel spaceframe 31.56 kg · FoS 2.13 · STKM13B', 'Torsional stiffness 2,804 Nm/deg', 'Downforce 208.13 N · DRS · Wind tunnel 1:4 verified'],
            },
            {
              title: 'Control, Brakes & Cooling',
              specs: ['Torque vectoring on Teensy 4.1 · live telemetry', 'Brake weight −50% via topology optimization', '10.9 kW heat load · ANSYS CFD verified cooling'],
            },
          ].map((system, idx) => (
            <Reveal key={idx} delay={(idx % 2) * 100}>
              <div className="card-dark p-8 relative overflow-hidden h-full">
                <span
                  className="absolute -top-4 -right-2 text-8xl font-black text-transparent select-none pointer-events-none"
                  style={{ WebkitTextStroke: '1px rgba(255,255,255,0.08)' }}
                >
                  0{idx + 1}
                </span>
                <h3 className="font-bold uppercase text-lg mb-6 text-highlight relative">{system.title}</h3>
                <ul className="space-y-3 relative">
                  {system.specs.map((spec, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <span className="text-primary-500 mt-1">▸</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery — mosaic */}
      <section className="container-section py-24">
        <Reveal>
          <p className="eyebrow">On Track</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 leading-tight">Gallery</h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[220px] gap-4">
          {[
            { src: '/DSC05116.jpg', span: 'col-span-2 row-span-2' },
            { src: '/car_1.jpg', span: '' },
            { src: '/car_2.jpg', span: '' },
            { src: '/car_3.jpg', span: 'col-span-2' },
            { src: '/car_4.jpg', span: '' },
            { src: '/Race2569-302.jpg', span: '' },
          ].map(({ src, span }) => (
            <Reveal key={src} className={span}>
              <div className="w-full h-full rounded-lg overflow-hidden border border-dark-border hover:border-highlight transition-all cursor-pointer group relative">
                <img
                  src={src}
                  alt="INITIAL race car"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* History Timeline */}
      <section className="container-section py-24 bg-surface/30">
        <Reveal>
          <p className="eyebrow">2005 — 2026</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 leading-tight">Car Evolution</h2>
        </Reveal>
        <CarTimeline />
      </section>

      {/* Follow Section */}
      <section className="relative py-24 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/15 via-transparent to-highlight/15" />
        <div className="float-orb w-72 h-72 bg-primary-500 top-0 left-1/4" />
        <div className="float-orb w-80 h-80 bg-highlight bottom-0 right-1/4" style={{ animationDelay: '-6s' }} />
        <div className="container-section py-0 relative z-10">
          <Reveal>
            <h2 className="section-title mb-6">Follow the Build</h2>
            <p className="text-gray-300 mb-10 max-w-xl mx-auto">
              Watch INIXII in action and follow our journey to Formula Student China 2026 on our social channels.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://www.facebook.com/initialteam/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Facebook</a>
              <a href="https://www.instagram.com/initialformula.kmitl/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Instagram</a>
              <a href="https://www.tiktok.com/@initialformula.kmitl" target="_blank" rel="noopener noreferrer" className="btn-secondary">TikTok</a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
