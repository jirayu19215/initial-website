import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'About | KMITL Formula Student',
  description: 'Learn about INIYAIL KMITL Formula Student Team - Our mission, vision, and team structure.',
};

export default function About() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 container-section">
        <h1 className="text-5xl md:text-6xl uppercase mb-6">About Us</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          INIYAIL KMITL Formula Student represents the pinnacle of engineering excellence and innovation in motorsport.
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
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-highlight" />

          {/* Timeline items */}
          {[
            { year: '2018', title: 'Team Formation', desc: 'INIYAIL KMITL Formula Student team officially established with 15 founding members.' },
            { year: '2019', title: 'First Car Built', desc: 'KMITL-FS01 prototype completed and entered in regional competition.' },
            { year: '2021', title: 'Electric Transition', desc: 'Transitioned to electric powertrain, embracing sustainable motorsport technology.' },
            { year: '2023', title: 'Major Milestone', desc: 'Expanded to 30+ members and secured multiple corporate sponsors.' },
            { year: '2024', title: 'Present Day', desc: 'Competing at national and international levels with cutting-edge technology.' },
          ].map((item, idx) => (
            <div key={idx} className={`relative md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'} pl-12 md:pl-0`}>
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-4 -translate-x-6 top-2 w-4 h-4 bg-primary-500 rounded-full border-4 border-secondary" />
              
              <div className="card-dark p-6">
                <p className="text-highlight font-bold text-lg mb-2">{item.year}</p>
                <h3 className="font-bold text-xl uppercase mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
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
