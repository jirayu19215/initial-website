'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useState } from 'react';

type OrgMember = {
  name: string;
  role: string;
  dept: string;
  image?: string;
  wrapChildren?: boolean;
  children?: OrgMember[];
};

const advisors = [
  { name: 'Asst.Prof.Dr.Mek Srlomsak',              role: 'Advisor', email: 'Mek.sr@kmitl.ac.th',    image: '/member/mek_zang.jpg' },
  { name: 'Asst.Prof.Dr.Chinda Charoenphonphanich', role: 'Advisor', email: 'chinda.ch@kmitl.ac.th', image: '/member/jinda_zang.jpg' },
  { name: 'Assoc.Prof.Dr.Preecha Karin',             role: 'Advisor', email: 'preecha.le@kmitl.ac.th', image: '' },
];

const assistantAdvisors = [
  { name: '—', role: 'Assistant Advisor', email: '—', image: '' },
  { name: '—', role: 'Assistant Advisor', email: '—', image: '' },
];

const org: OrgMember = {
  name: 'Punyapat Boontum',
  role: 'Team Captain',
  dept: '',
  image: '/member/nene_zang.jfif',
  children: [
    {
      name: 'Sittha Asawang',
      role: 'Chief Mechanical Operator',
      dept: '',
      image: '/member/tonmoke_zang.jpg',
      wrapChildren: true,
      children: [
        { name: '—', role: 'Lead', dept: 'Powertrain' },
        { name: '—', role: 'Lead', dept: 'Chassis' },
        { name: '—', role: 'Lead', dept: 'Suspension' },
        { name: '—', role: 'Lead', dept: 'Aerodynamics' },
        { name: '—', role: 'Lead', dept: 'Brakes' },
        { name: '—', role: 'Lead', dept: 'Cooling' },
        { name: '—', role: 'Lead', dept: 'Architecture Design' },
      ],
    },
    {
      name: '—',
      role: 'Chief Electrical Operator',
      dept: '',
      children: [
        { name: '—', role: 'Lead', dept: 'Electronics' },
      ],
    },
    {
      name: '—',
      role: 'Chief Financial Operator',
      dept: '',
      image: '/member/CFO.jpg',
      children: [
        { name: '—', role: 'Lead', dept: 'Business & Marketing' },
      ],
    },
  ],
};

// --- Constants ---
const CELL_W = 112;
const CELL_GAP = 16;

// --- Shared components ---

function Avatar({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="w-32 h-32 rounded-full bg-surface border-2 border-dark-border overflow-hidden flex items-center justify-center text-2xl mb-2 shrink-0">
      {src ? <img src={src} alt={alt} className="w-full h-full object-cover" /> : '👤'}
    </div>
  );
}

function NodeCard({ member, expandable, expanded }: { member: OrgMember; expandable?: boolean; expanded?: boolean }) {
  return (
    <div className="flex flex-col items-center w-28">
      <Avatar src={member.image} alt={member.name} />
      <p className="font-bold text-xs text-white text-center leading-tight">{member.name}</p>
      <div className="w-8 h-px bg-gray-600 my-1.5" />
      <p className="text-gray-400 text-xs text-center leading-tight">{member.role}</p>
      {member.dept && <p className="text-primary-400 text-xs text-center mt-1 leading-tight">{member.dept}</p>}
      {expandable && (
        <span className="text-gray-500 text-xs mt-1">{expanded ? '▲' : '▼'}</span>
      )}
    </div>
  );
}

function VLine({ height = 'h-8' }: { height?: string }) {
  return <div className={`w-px ${height} bg-gray-700`} />;
}

function WrappedChildren({ children }: { children: OrgMember[] }) {
  const row1 = children.slice(0, 4);
  const row2 = children.slice(4);

  return (
    <>
      <VLine />
      <div className="relative border-t-2 border-gray-700">
        <div className="flex pt-8" style={{ gap: CELL_GAP }}>
          {row1.map((child, i) => (
            <div key={child.dept} className="flex flex-col items-center" style={{ width: CELL_W }}>
              <div className="relative w-full flex flex-col items-center">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-gray-700" />
                <NodeCard member={child} />
              </div>
              {row2[i] && (
                <>
                  <VLine height="h-6" />
                  <NodeCard member={row2[i]} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function OrgNode({ member, defaultExpanded = false }: { member: OrgMember; defaultExpanded?: boolean }) {
  const hasChildren = (member.children?.length ?? 0) > 0;
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => hasChildren && setExpanded(e => !e)}
        className={hasChildren ? 'cursor-pointer' : 'cursor-default'}
      >
        <NodeCard member={member} expandable={hasChildren} expanded={expanded} />
      </button>

      {expanded && hasChildren && (
        member.wrapChildren ? (
          <WrappedChildren children={member.children!} />
        ) : (
          <>
            <VLine />
            <ul className="org-children">
              {member.children!.map((child) => (
                <li key={child.dept} className="org-child">
                  <OrgNode member={child} />
                </li>
              ))}
            </ul>
          </>
        )
      )}
    </div>
  );
}

export default function Team() {
  return (
    <>
      <Navigation />

      <style>{`
        .org-children {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .org-child {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 32px 12px 0;
          position: relative;
        }
        .org-child::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: #2a2a2a;
        }
        .org-child:first-child::before { left: 50%; }
        .org-child:last-child::before  { right: 50%; }
        .org-child:first-child:last-child::before { display: none; }
        .org-child::after {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 32px;
          background: #2a2a2a;
        }
      `}</style>

      {/* Hero */}
      <section className="pt-24 pb-12 container-section">
        <p className="text-xs uppercase tracking-widest text-primary-500 mb-4">The Team</p>
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-6">Our Team</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Meet the engineers behind KMITL Formula Student.
        </p>
      </section>

      {/* Advisors */}
      <section className="container-section pb-0 pt-4">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">Advisor</p>
        {/* main advisors */}
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          {advisors.map((a) => (
            <div key={a.email} className="flex flex-col items-center w-40">
              <Avatar src={a.image} alt={a.name} />
              <p className="font-bold text-xs text-white text-center leading-tight">{a.name}</p>
              <div className="w-8 h-px bg-gray-600 my-1.5" />
              <p className="text-primary-400 text-xs text-center">{a.role}</p>
              <p className="text-gray-500 text-xs text-center mt-1">{a.email}</p>
            </div>
          ))}
        </div>

        {/* assistant advisors — bottom right */}
        <div className="flex gap-6 justify-end mt-4">
          {assistantAdvisors.map((a, i) => (
            <div key={i} className="flex flex-col items-center w-40">
              <Avatar src={a.image} alt={a.name} />
              <p className="font-bold text-xs text-white text-center leading-tight">{a.name}</p>
              <div className="w-8 h-px bg-gray-600 my-1.5" />
              <p className="text-primary-400 text-xs text-center">{a.role}</p>
              <p className="text-gray-500 text-xs text-center mt-1">{a.email}</p>
            </div>
          ))}
        </div>

      </section>

      {/* Org Chart */}
      <section className="container-section pt-0 pb-24" style={{marginTop: '-9rem'}}>
        <div className="flex justify-center mb-2">
          <VLine height="h-16" />
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-max mx-auto w-fit">
            <OrgNode member={org} defaultExpanded />
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="container-section py-24 bg-surface/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">Join Our Team</h2>
          <p className="text-lg text-gray-300 mb-8">
            Are you passionate about engineering and motorsport? We&apos;re always looking for talented individuals to join our team.
          </p>
          <a href="/join" className="btn-primary">Learn More About Joining</a>
        </div>
      </section>

      <Footer />
    </>
  );
}
