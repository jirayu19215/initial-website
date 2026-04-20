import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'About | KMITL Formula Student',
  description: 'Learn about INITIAL KMITL Formula Student Team - Our mission, vision, and team structure.',
};

export default function About() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 container-section">
        <h1 className="text-5xl md:text-6xl uppercase mb-6">About Us</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          INITIAL KMITL Formula Student represents the pinnacle of engineering excellence and innovation in motorsport.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="container-section py-24 bg-surface/30">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold uppercase mb-6 text-primary-500">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              To design, build, and race a high-performance electric Formula Student vehicle while fostering innovation, teamwork, and engineering excellence among our members. We aim to inspire the next generation of engineers and demonstrate Thailand's capability in advanced motorsport technology.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold uppercase mb-6 text-highlight">Our Vision</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              To become a leading Formula Student team recognized for technological innovation, sustainable practices, and superior engineering performance. We envision KMITL as a hub for developing world-class automotive engineers and demonstrating electric vehicle excellence on the international stage.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-section py-24">
        <h2 className="section-title">Our Journey</h2>

        <div className="relative space-y-12">
          <div className="absolute left-1.5 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-primary-500" />

          {[
            { year: '2003', title: 'Team Founded', desc: 'INITIAL was established by students from the Faculty of Engineering and Faculty of Architecture at KMITL, united by a shared passion for automotive design and motorsport innovation.', slug: null, compUrl: null },
            { year: '2005', title: 'First Competition', desc: 'Blackcat competed at TSAE Auto Challenge 2005, finishing 2nd Overall — marking the team\'s competitive debut.', slug: 'blackcat', compUrl: null },
            { year: '2008', title: 'International Debut: Japan', desc: 'Kabuto represented KMITL at Student Formula Japan 2008, winning Best Rookie Award, Best Design Award, and Sportsmanship Award.', slug: 'kabuto', compUrl: 'https://www.jsae.or.jp/en/' },
            { year: '2009', title: 'International: Australia', desc: 'KF2009 competed at SAE-A Australia 2009, expanding the team\'s international presence on the Formula Student stage.', slug: 'kf2009', compUrl: 'https://www.saea.com.au/home' },
            { year: '2010', title: 'National Champions', desc: 'Python claimed 1st place Overall at TSAE Auto Challenge 2010, then represented Thailand at Formula Student UK — finishing 24th.', slug: 'python', compUrl: null },
            { year: '2014', title: 'International: Germany', desc: 'Brutax MK2 competed at Formula Student Germany 2014, one of the most prestigious Formula Student events in the world.', slug: 'brutax-mk2', compUrl: 'https://www.formulastudent.de/' },
            { year: '2024', title: 'Electric Era Begins', desc: 'TARANTULA EV3 marked the team\'s transition to EV, winning 1st in EV Class at TSAE 2025 and the Ansys Simulation Award at Formula Student Thailand 2025.', slug: 'tarantula-ev3', compUrl: null },
            { year: '2026', title: 'Going Global', desc: 'INITIAL heads to Formula Student China 2026 (Oct 13–18) with INIXII — our most advanced electric race car to date.', slug: 'inixii', compUrl: null },
          ].map((item, idx) => (
            <div key={idx} className={`relative pl-10 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-4 -translate-x-2 top-2 w-4 h-4 bg-primary-500 rounded-full border-4 border-secondary" />

              <div className="bg-secondary border border-primary-500/30 rounded-lg p-6">
                {item.slug ? (
                  <Link href={`/cars/${item.slug}`} className="text-primary-500 font-black text-lg mb-1 hover:text-primary-600 transition-colors block">
                    {item.year} ↗
                  </Link>
                ) : (
                  <p className="text-primary-500 font-black text-lg mb-1">{item.year}</p>
                )}
                <h3 className="font-bold text-xl uppercase mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
                {item.compUrl && (
                  <a href={item.compUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-xs uppercase tracking-widest text-primary-500 hover:text-white transition-colors">
                    Official Website ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:text-left">
          <Link href="/cars" className="btn-primary inline-block">
            View All Cars & Competitions →
          </Link>
        </div>
      </section>

      {/* Team Structure */}
      <section className="container-section py-24 bg-surface/30">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h2 className="section-title mb-0">Team Structure</h2>
          <p className="text-xs text-gray-500 uppercase tracking-widest">Stats from INIXII (ME11) · 2025</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              name: 'High Voltage & Powertrain',
              desc: 'Motor, battery pack, inverter, and drivetrain development',
              stat: '40.69 kW · 108 V · 4WD',
              detail: '4× WC-95 · Peak Torque 121.74 N·m · 6.75 kWh',
            },
            {
              name: 'Chassis & Frame',
              desc: 'Structural design, suspension geometry, and ergonomics',
              stat: '31.56 kg · FoS 2.13',
              detail: 'Torsional Stiffness 2,804 Nm/deg · STKM13B Steel',
            },
            {
              name: 'Aerodynamics',
              desc: 'Aerodynamic design, CFD simulation, and wind tunnel testing',
              stat: 'Downforce 208.13 N',
              detail: 'Wind Tunnel 1:4 Verified · DRS · Front 55% / Rear 40%',
            },
            {
              name: 'Control & Electronics',
              desc: 'Vehicle control systems, real-time telemetry, and cooling',
              stat: '10.9 kW Heat Load',
              detail: 'Torque Vectoring · Teensy 4.1 · Live Telemetry',
            },
            {
              name: 'Brake & Mechanical Integration',
              desc: 'Brake system, gear design, and full vehicle assembly',
              stat: 'Brake −50% weight · Gear 9.88',
              detail: 'Topology Optimized · Planetary Gearset · SNCM420',
            },
            {
              name: 'Business & Marketing',
              desc: 'Sponsorship acquisition, team promotion, and event management',
              stat: null,
              detail: null,
            },
          ].map((dept, idx) => (
            <div key={idx} className="card-dark p-6 flex flex-col gap-3">
              <div>
                <h3 className="font-black uppercase text-sm tracking-wide text-white mb-1">{dept.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{dept.desc}</p>
              </div>
              {dept.stat && (
                <div className="border-t border-dark-border pt-3 mt-auto">
                  <p className="text-primary-500 font-bold text-sm">{dept.stat}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{dept.detail}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Full Team Photo Placeholder */}
        <div className="bg-surface border border-dark-border rounded-lg h-96 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 text-sm uppercase tracking-wide">Full Team Photo</p>
            <p className="text-xs text-gray-600 mt-2">Replace with team group photo</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
