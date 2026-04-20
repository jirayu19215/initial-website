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
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-primary-500" />

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
            <div key={idx} className={`relative md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'} pl-12 md:pl-0`}>
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-4 -translate-x-6 top-2 w-4 h-4 bg-primary-500 rounded-full border-4 border-secondary" />

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
        <h2 className="section-title">Team Structure</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { name: 'Chassis', icon: '🔧', desc: 'Frame, suspension, and structural design' },
            { name: 'Powertrain', icon: '⚡', desc: 'Motor, battery, inverter, and drivetrain' },
            { name: 'Electronics', icon: '💻', desc: 'Control systems and vehicle telemetry' },
            { name: 'Aerodynamics', icon: '💨', desc: 'Aerodynamic design and optimization' },
            { name: 'Business & Marketing', icon: '📈', desc: 'Sponsorship and team promotion' },
            { name: 'Mechanical Integration', icon: '⚙️', desc: 'Assembly and system integration' },
          ].map((dept, idx) => (
            <div key={idx} className="card-dark p-8 text-center">
              <p className="text-5xl mb-4">{dept.icon}</p>
              <h3 className="font-bold uppercase text-lg mb-2">{dept.name}</h3>
              <p className="text-gray-400 text-sm">{dept.desc}</p>
            </div>
          ))}
        </div>

        {/* Full Team Photo Placeholder */}
        <div className="bg-surface border border-dark-border rounded-lg h-96 flex items-center justify-center">
          <div className="text-center">
            <p className="text-5xl mb-4">👥</p>
            <p className="text-gray-500">Full Team Photo Placeholder</p>
            <p className="text-xs text-gray-600 mt-2">Replace with team group photo</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
