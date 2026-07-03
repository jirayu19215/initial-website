import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';

export const metadata = {
  title: 'Partners | KMITL Formula Student',
  description: 'Partner with KMITL Formula Student - Partnership packages, benefits, and collaboration opportunities.',
};

export default function Partners() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-grid">
        <div className="float-orb w-80 h-80 bg-primary-500 -top-20 right-1/4" />
        <div className="racing-stripes" />
        <div className="speed-line" />

        <div className="container-section py-0 relative">
          <p className="eyebrow hero-enter">Partnership · 2025 Season</p>
          <h1 className="text-6xl md:text-[8rem] leading-none font-black uppercase mb-6 hero-enter-1">
            Our <span className="text-gradient-racing">Partners</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 hero-enter-2">
            Partner with Thailand's premier Formula Student team and showcase your brand to the engineering community.
          </p>

          {/* Stats chips */}
          <div className="flex flex-wrap gap-8 md:gap-14 hero-enter-3">
            {[
              { value: '50+', label: 'Partners' },
              { value: '5', label: 'Tiers' },
              { value: '20+', label: 'Years Racing' },
              { value: '2', label: 'Competitions / Year' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl md:text-5xl font-black text-white leading-none">
                  {s.value}
                </p>
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="divider-glow absolute bottom-0 left-0 right-0" />
      </section>

      {/* 2025 Season Partners */}
      <section className="container-section py-24">
        <Reveal>
          <p className="eyebrow">2025 Season</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-16 leading-tight">
            Powered by<br />the Best
          </h2>
        </Reveal>

        {([
          {
            tier: 'Supreme', color: '#C04040', logoH: 300,
            logos: [
              'WURTH_50.png', 'WATANYOO_51.png', 'TOZZHIN_52.png', 'PGM_CARBON_53.png', 'PART_RICH_55.png',
            ],
          },
          {
            tier: 'Platinum', color: '#30C4B0', logoH: 240,
            logos: [
              'AMITA_54.png', 'ANSYS_CADFEM_49.png', 'NOWABUTR_PRECISION_48.png',
            ],
          },
          {
            tier: 'Gold', color: '#C4A030', logoH: 200,
            logos: [
              'BENDIX_47.png', 'SUMMIT_LENSO_46.png',
            ],
          },
          {
            tier: 'Silver', color: '#9B8FD0', logoH: 160,
            logos: [
              'TE_CONNECTIVITY_36.png', 'SKF_37.png', 'MOTOR_SPORT_PARK_38.png', 'สุวรรณภูมิยางยนต์_39.png',
              'RC_TURBO_40.png', 'MTM_41.png', 'PSP_42.png', 'OSLIKA_43.png',
              'MOSMOD_44.png', 'BBPN_45.png', 'TRIUMPH_BRAKE_INDUSTRIAL_35.png', 'thinkBIG_34.png',
            ],
          },
          {
            tier: 'Bronze', color: '#A3B840', logoH: 120,
            logos: [
              'ECG_2.png', 'FANTASTIC_TRIUMPH_3.png', 'ALPHA_COMPOSITION_4.png', 'LACTASOY_5.png',
              'ETM_6.png', 'MKS_7.png', 'SAHAROONGROJ_8.png', 'ATCON_INSULATION_9.png',
              'AUTOWERKS_10.png', 'NEOTECH_11.png', 'ชาบูเถ้าแก่บิ๊ก_12.png', 'คู้บอน_COCKPIT_13.png',
              'APICHART_FARM_14.png', 'CLINICGEAR_15.png', 'IMERB_ENGINEERING_16.png', 'LBV_17.png',
              'TR_ELECTRIC_18.png', 'KA_19.png', 'WURTH_ELEKTRONIK_20.png', 'RACING_SPIRIT_THAILAND_21.png',
              'REAL_HELMET_22.png', 'SAC_23.png', 'THE_THESIS_CENTER_24.png', '3M_25.png',
              'WIRING_STUDIO_26.png', 'DIAB_27.png', 'ธกส_28.png', 'TDP_29.png',
              'LEGATOOL_30.png', 'SUPER_PIG_31.png', 'ลาดกระบังเรซิน_33.png',
            ],
          },
        ] as const).map((t) => {
          const logoH =
            t.logoH >= 300 ? 'h-20 md:h-28' :
            t.logoH >= 240 ? 'h-16 md:h-24' :
            t.logoH >= 200 ? 'h-14 md:h-20' :
            t.logoH >= 160 ? 'h-11 md:h-14' :
                             'h-9 md:h-12';
          return (
            <Reveal key={t.tier} className="mb-20">
              <div className="flex items-center gap-4 mb-12">
                <div className="flex-1 h-px" style={{ backgroundColor: t.color, opacity: 0.25 }} />
                <span
                  className="px-6 py-2 rounded-full border text-xl md:text-2xl font-black uppercase tracking-[0.35em]"
                  style={{ color: t.color, borderColor: `${t.color}55`, backgroundColor: `${t.color}0d` }}
                >
                  {t.tier}
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: t.color, opacity: 0.25 }} />
              </div>
              <div className="flex flex-wrap gap-x-12 md:gap-x-16 gap-y-10 items-center justify-center">
                {t.logos.map((file) => (
                  <img
                    key={file}
                    src={`/partner/${t.tier}/${file}`}
                    alt={file.replace(/[_\d]+\.png$/i, '').replace(/_/g, ' ').trim()}
                    className={`${logoH} w-auto max-w-[280px] object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200 grayscale hover:grayscale-0`}
                  />
                ))}
              </div>
            </Reveal>
          );
        })}
      </section>

      {/* Why Partner */}
      <section className="container-section py-24 bg-surface/30">
        <Reveal>
          <p className="eyebrow">Benefits</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 leading-tight">Why Partner with Us</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl">
            Collaborate with a student-led engineering team developing real electric race cars.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              ),
              title: 'Engineering Brand Exposure',
              desc: 'Showcase your brand on our race car, team gear, and competitions.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              ),
              title: 'Real Engineering Collaboration',
              desc: 'Work with students developing electric powertrain and control systems.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                </svg>
              ),
              title: 'Event & Competition Exposure',
              desc: 'Gain visibility through competitions, testing, and engineering events.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              ),
              title: 'Access to Engineering Talent',
              desc: 'Connect with skilled students in mechanical, electrical, and software.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              ),
              title: 'Building a Competitive Team',
              desc: 'Support the development of a Formula Student team in Thailand.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              ),
              title: 'Support Engineering Education',
              desc: 'Contribute to hands-on engineering education and real-world application.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                </svg>
              ),
              title: 'Partnership Benefits',
              desc: 'Logo placement, recruitment access, and collaboration opportunities.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="card-dark p-8 group transition-all duration-300 hover:border-primary-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.15)]"
            >
              <div className="text-gray-400 group-hover:text-primary-500 transition-colors mb-5">
                {item.icon}
              </div>
              <h3 className="font-bold uppercase text-sm tracking-wide mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Tiers Table */}
      <section className="container-section py-24">
        <Reveal>
          <p className="eyebrow">Packages</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 leading-tight">Partnership Packages</h2>
        </Reveal>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                {/* Header: tier labels */}
                <th className="text-left py-4 px-6 w-48">
                  <p className="font-black uppercase text-base">Partner Level</p>
                  <p className="text-gray-400 font-normal text-xs mt-1">THB</p>
                </th>
                {[
                  { tier: 'Bronze', price: '< 15,000', color: '#6B7A2A' },
                  { tier: 'Silver', price: '> 15,000', color: '#6B5FA0' },
                  { tier: 'Gold',   price: '> 30,000', color: '#8B7020' },
                  { tier: 'Platinum', price: '> 50,000', color: '#1E8A7A' },
                  { tier: 'Supreme', price: '> 100,000', color: '#7A1E1E' },
                ].map((t) => (
                  <th key={t.tier} className="text-center py-4 px-4 font-black uppercase text-base">
                    <span style={{ color: t.color === '#6B7A2A' ? '#A3B840' : t.color === '#6B5FA0' ? '#9B8FD0' : t.color === '#8B7020' ? '#C4A030' : t.color === '#1E8A7A' ? '#30C4B0' : '#C04040' }}>
                      {t.tier}
                    </span>
                    <p className="text-gray-400 font-normal text-xs mt-1">{t.price}</p>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {[
                {
                  benefit: 'Social Network',
                  cells: [true, true, true, true, true],
                  colors: ['#6B7A2A', '#6B5FA0', '#8B7020', '#1E8A7A', '#7A1E1E'],
                },
                {
                  benefit: 'Race Car',
                  cells: [false, true, true, true, true],
                  colors: ['', '#6B5FA0', '#8B7020', '#1E8A7A', '#7A1E1E'],
                },
                {
                  benefit: 'Team Shirt',
                  cells: [false, false, true, true, true],
                  colors: ['', '', '#8B7020', '#1E8A7A', '#7A1E1E'],
                },
                {
                  benefit: 'Racing Suit',
                  cells: [false, false, false, true, true],
                  colors: ['', '', '', '#1E8A7A', '#7A1E1E'],
                },
              ].map((row, idx) => (
                <tr key={idx} className="border-t border-dark-border">
                  <td className="py-5 px-6 font-bold uppercase text-xs tracking-widest text-gray-300">
                    {row.benefit}
                  </td>
                  {row.cells.map((filled, ci) => (
                    <td key={ci} className="py-5 px-4 text-center">
                      {filled ? (
                        <div
                          className="mx-auto w-16 h-8 rounded"
                          style={{ backgroundColor: row.colors[ci] }}
                        />
                      ) : (
                        <div className="mx-auto w-16 h-8 rounded bg-dark-border/30" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Download Section */}
      <section className="container-section py-24">
        <Reveal>
          <p className="eyebrow">Downloads</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 leading-tight">Resources</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card-dark p-8 text-center group">
            <p className="text-5xl mb-4">📄</p>
            <h3 className="font-bold uppercase text-lg mb-3">Partnership Deck</h3>
            <p className="text-gray-400 mb-6">Comprehensive presentation of our team, goals, and partnership opportunities.</p>
            <a href="#" className="btn-primary inline-block">Download PDF</a>
          </div>

          <div className="card-dark p-8 text-center group">
            <p className="text-5xl mb-4">🖼️</p>
            <h3 className="font-bold uppercase text-lg mb-3">Media Kit</h3>
            <p className="text-gray-400 mb-6">Logo files, brand guidelines, and photography for your use.</p>
            <a href="#" className="btn-primary inline-block">Download Zip</a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-28 overflow-hidden text-center border-t border-dark-border">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/15 via-transparent to-highlight/15" />
        <div className="float-orb w-72 h-72 bg-primary-500 top-0 left-1/4" />
        <div className="float-orb w-80 h-80 bg-highlight bottom-0 right-1/4" style={{ animationDelay: '-6s' }} />
        <div className="container-section py-0 relative z-10">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">
              Ready to <span className="text-gradient-racing">Partner?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
              Let's discuss how your brand can be part of this exciting journey in electric motorsport.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="mailto:initial.formula@gmail.com" className="btn-primary animate-pulse-glow">Email Us</a>
              <a href="/contact" className="btn-secondary">Contact Form</a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
