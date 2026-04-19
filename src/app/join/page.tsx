import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Join | KMITL Formula Student',
  description: 'Learn how to join KMITL Formula Student team. Application process, requirements, and opportunities.',
};

export default function Join() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 container-section">
        <h1 className="text-5xl md:text-6xl uppercase mb-6">Join Our Team</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Are you passionate about engineering, innovative thinking, and competitive motorsport? KMITL Formula Student is looking for talented individuals like you.
        </p>
      </section>

      {/* Why Join */}
      <section className="container-section py-24 bg-surface/30">
        <h2 className="section-title mb-12">Why Join Us</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold uppercase mb-6 text-primary-500">Grow Your Skills</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <span className="text-highlight">✓</span>
                <span>Work on cutting-edge electric vehicle technology</span>
              </li>
              <li className="flex gap-3">
                <span className="text-highlight">✓</span>
                <span>Learn from experienced engineers and mentors</span>
              </li>
              <li className="flex gap-3">
                <span className="text-highlight">✓</span>
                <span>Gain hands-on experience in real-world projects</span>
              </li>
              <li className="flex gap-3">
                <span className="text-highlight">✓</span>
                <span>Develop technical and leadership skills</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold uppercase mb-6 text-highlight">Build Your Network</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <span className="text-highlight">✓</span>
                <span>Connect with passionate engineers and innovators</span>
              </li>
              <li className="flex gap-3">
                <span className="text-highlight">✓</span>
                <span>Meet industry professionals and sponsors</span>
              </li>
              <li className="flex gap-3">
                <span className="text-highlight">✓</span>
                <span>Build relationships with international teams</span>
              </li>
              <li className="flex gap-3">
                <span className="text-highlight">✓</span>
                <span>Enhance your career prospects</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="container-section py-24">
        <h2 className="section-title mb-12">Open Positions</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              dept: 'Chassis',
              positions: ['Chassis Designer', 'Suspension Engineer', 'CAD Specialist'],
              skills: ['AutoCAD/CATIA', 'FEA', 'Composite materials'],
            },
            {
              dept: 'Powertrain',
              positions: ['Motor Engineer', 'Battery Specialist', 'Drivetrain Designer'],
              skills: ['Electric motors', 'Battery management', 'Power electronics'],
            },
            {
              dept: 'Electronics',
              positions: ['Control Systems Engineer', 'Software Developer', 'Circuit Designer'],
              skills: ['Firmware', 'C/Python', 'Embedded systems'],
            },
            {
              dept: 'Aerodynamics',
              positions: ['Aero Engineer', 'CFD Analyst'],
              skills: ['ANSYS/OpenFOAM', 'Vehicle dynamics', 'Aerodynamic design'],
            },
            {
              dept: 'Business & Marketing',
              positions: ['Sponsorship Manager', 'PR Specialist', 'Marketing Officer'],
              skills: ['Negotiation', 'Communication', 'Project management'],
            },
            {
              dept: 'Mechanical Integration',
              positions: ['Integration Engineer', 'Manufacturing Specialist'],
              skills: ['Assembly', 'Testing', 'Troubleshooting'],
            },
          ].map((item, idx) => (
            <div key={idx} className="card-dark p-8">
              <h3 className="font-bold uppercase text-lg mb-4 text-highlight">{item.dept}</h3>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">Open Positions</h4>
                <ul className="space-y-2">
                  {item.positions.map((pos, i) => (
                    <li key={i} className="text-gray-300">• {pos}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">Required Skills</h4>
                <ul className="space-y-2">
                  {item.skills.map((skill, i) => (
                    <li key={i} className="text-sm text-gray-400">• {skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Timeline */}
      <section className="container-section py-24 bg-surface/30">
        <h2 className="section-title mb-12">Application Timeline</h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-highlight" />

            {[
              { phase: 'Phase 1', title: 'Application Deadline', date: 'April 30, 2024', desc: 'Submit your application and resume online' },
              { phase: 'Phase 2', title: 'Online Assessment', date: 'May 1-15, 2024', desc: 'Complete technical and problem-solving tests' },
              { phase: 'Phase 3', title: 'Technical Interview', date: 'May 16-31, 2024', desc: 'Interview with department leads' },
              { phase: 'Phase 4', title: 'Team Integration', date: 'June 1-15, 2024', desc: 'Meet with the team and onboarding' },
            ].map((item, idx) => (
              <div key={idx} className={`relative md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'} pl-12 md:pl-0`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-4 -translate-x-6 top-2 w-4 h-4 bg-primary-500 rounded-full border-4 border-secondary" />
                
                <div className="card-dark p-6">
                  <p className="text-sm font-bold text-highlight uppercase mb-1">{item.phase}</p>
                  <h3 className="font-bold text-lg uppercase mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="container-section py-24">
        <h2 className="section-title mb-12">Eligibility Requirements</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold uppercase mb-6 text-primary-500">Essential</h3>
            <ul className="space-y-3">
              {[
                'Currently enrolled at KMITL',
                'Strong academic performance',
                'Passion for engineering and innovation',
                'Ability to commit 10-15 hours/week',
                'Teamwork and communication skills',
                'No conflicting club memberships',
              ].map((req, idx) => (
                <li key={idx} className="flex gap-3 text-gray-300">
                  <span className="text-primary-500">●</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold uppercase mb-6 text-highlight">Preferred</h3>
            <ul className="space-y-3">
              {[
                'CAD/CAM experience (AutoCAD, CATIA)',
                'Programming skills (Python, C++)',
                'Previous competition/project experience',
                'Internship experience in automotive field',
                'Fluent in English',
                'Previous leadership experience',
              ].map((pref, idx) => (
                <li key={idx} className="flex gap-3 text-gray-300">
                  <span className="text-highlight">●</span>
                  {pref}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Google Form Embed */}
      <section className="container-section py-24 bg-surface/30">
        <h2 className="section-title mb-8">Apply Now</h2>

        <div className="bg-secondary border border-dark-border rounded-lg p-8">
          <p className="text-gray-300 mb-6">
            Fill out the application form below to join KMITL Formula Student. We review applications on a rolling basis.
          </p>
          
          <div className="bg-surface p-8 rounded border border-dark-border text-center">
            <p className="text-gray-500 mb-4">📋 Google Form Embed</p>
            <p className="text-sm text-gray-600">Replace this with embedded Google Form</p>
            <p className="text-xs text-gray-500 mt-2">You can embed a Google Form here by using iframe</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-section py-24">
        <h2 className="section-title mb-12">Frequently Asked Questions</h2>

        <div className="max-w-2xl mx-auto space-y-6">
          {[
            { q: 'Do I need experience to apply?', a: 'While experience is helpful, we welcome applicants from all levels. We provide mentorship and training for those eager to learn.' },
            { q: 'How much time commitment is required?', a: 'Team members typically commit 10-15 hours per week during regular seasons, increasing to 20+ hours during competition preparation.' },
            { q: 'Can I join if I\'m not doing my major?', a: 'Yes! We welcome students from all engineering disciplines. Different perspectives strengthen our team.' },
            { q: 'Is there any financial benefit?', a: 'While the team provides an incredible learning experience, there is no direct stipend. However, we may offer travel reimbursement for competitions.' },
            { q: 'When is the next recruitment?', a: 'We recruit annually in April-May for the upcoming season. Keep an eye on our website and social media for announcements.' },
          ].map((item, idx) => (
            <details key={idx} className="card-dark p-6 group cursor-pointer">
              <summary className="font-bold uppercase text-lg group-open:text-highlight transition-colors flex justify-between items-center">
                {item.q}
                <span className="text-lg">+</span>
              </summary>
              <p className="text-gray-300 mt-4">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container-section py-24 text-center bg-gradient-to-r from-primary-500/20 via-transparent to-highlight/20 rounded-lg border border-dark-border">
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">Questions?</h2>
        <p className="text-lg text-gray-300 mb-8">
          Reach out to us for more information about joining our team.
        </p>
        <a href="/contact" className="btn-primary">Contact Us</a>
      </section>

      <Footer />
    </>
  );
}
