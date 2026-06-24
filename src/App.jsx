import React, { useState, useEffect } from 'react';

const THESIS_DATA = {
  'heavy-civil': {
    title: 'Heavy Civil Infrastructure',
    summary: 'Infrastructure contractors have massive backlogs but cannot finance the equipment needed to do the work. We provide the heavy machinery they need.',
    memo: [
      {
        heading: 'Context',
        text: 'The United States is undergoing a massive, federally mandated infrastructure rebuild. The contractors tasked with this work have record-high project backlogs.'
      },
      {
        heading: 'The Problem',
        text: 'Despite having guaranteed government contracts, mid-sized civil contractors struggle to buy the heavy machinery required to actually do the work. Traditional banks do not understand how to value specialized construction equipment, so they refuse to lend against it.'
      },
      {
        heading: 'The Opportunity',
        text: 'This creates a massive gap. The work is guaranteed by the government, the contractors are ready, but the machinery is missing. We step into this gap by purchasing the equipment outright and leasing it directly to the contractors.'
      }
    ],
    vehicle: {
      name: 'EquipmentWork',
      role: 'Heavy Machinery Leasing & Deployment',
      metrics: [
        { label: 'Target Returns', value: '14.5% - 18.0%' },
        { label: 'Asset Focus', value: 'Construction Machinery' },
        { label: 'Timeline', value: '3 to 5 Years' },
        { label: 'Security', value: 'Physical Equipment Ownership' }
      ]
    }
  },
  'federal-compliance': {
    title: 'Federal Compliance',
    summary: 'The government is making it harder for small companies to win federal contracts due to strict new compliance rules. We build compliant entities to capture this abandoned work.',
    memo: [
      {
        heading: 'Context',
        text: 'The Department of Defense and other federal agencies have rolled out extremely strict new compliance rules for anyone they do business with, especially regarding supply chain security and data protection.'
      },
      {
        heading: 'The Problem',
        text: 'Most small and mid-sized contractors cannot afford the massive overhead required to meet these new standards. As a result, thousands of capable companies are being locked out of the federal contracting market entirely.'
      },
      {
        heading: 'The Opportunity',
        text: 'The federal budget is still growing, but the pool of companies allowed to bid on the work is shrinking. We build and finance specialized, fully compliant logistics companies that step in to win the contracts left behind by those who couldn\'t adapt.'
      }
    ],
    vehicle: {
      name: 'Government Contracted',
      role: 'Compliant Federal Supply Chain',
      metrics: [
        { label: 'Target Returns', value: '12.0% - 15.5%' },
        { label: 'Asset Focus', value: 'Federal Receivables' },
        { label: 'Timeline', value: '1 to 2 Years' },
        { label: 'Counterparty', value: 'US Government' }
      ]
    }
  }
};

const ThesisDetailView = ({ thesisId, onBack }) => {
  const data = THESIS_DATA[thesisId];
  
  // Instantly jump to top when rendering the thesis detail to prevent loading scrolled-down
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) return null;

  return (
    <div className="min-h-screen animate-in fade-in duration-700 pb-32">
      <div className="px-8 md:px-16 lg:px-32 pt-16 md:pt-24 lg:pt-32 max-w-4xl">
        <button 
          onClick={onBack}
          className="group flex items-center gap-4 font-sans text-[9px] uppercase tracking-[0.2em] text-[#64748b] hover:text-white transition-colors mb-24"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
          Return to Overview
        </button>

        <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#64748b] mb-8 block">Investment Memo</span>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.05] tracking-tight mb-24">
          {data.title}.
        </h2>

        <div className="space-y-16 mb-32">
          {data.memo.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-serif text-2xl text-white mb-6 italic">{idx + 1}. {section.heading}</h3>
              <p className="font-sans text-sm md:text-base text-[#cbd5e1] leading-loose font-light">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* Operational Vehicle - completely unboxed, integrated linearly */}
        <div className="border-t border-white/[0.05] pt-16">
          <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#64748b] mb-8 block">The Vehicle</span>
          <h4 className="font-serif text-4xl text-white mb-3">{data.vehicle.name}</h4>
          <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-[#94a3b8] block mb-12">
            {data.vehicle.role}
          </span>

          <div className="grid grid-cols-2 gap-8 md:gap-16">
            {data.vehicle.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col border-b border-white/[0.05] pb-4">
                <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-[#64748b] mb-2">{metric.label}</span>
                <span className="font-serif text-xl text-white italic">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default function App() {
  const [activeThesis, setActiveThesis] = useState(null);

  // Smooth scroll handler for elegant navigation
  const scrollTo = (id) => {
    if (activeThesis) {
      setActiveThesis(null);
      // Need a slight delay to allow React to render the main view before scrolling
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#040a18] text-[#e2e8f0] flex flex-col md:flex-row relative">
      <div className="fixed inset-0 bg-texture pointer-events-none z-50"></div>

      {/* Fixed Left Navigation Pane */}
      <nav className="w-full md:w-1/3 lg:w-1/4 md:fixed md:h-screen p-8 md:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/[0.04] bg-[#040a18] z-40 shadow-[4px_0_24px_rgba(0,0,0,0.2)]">
        <div>
          <h1 className="font-serif text-2xl lg:text-3xl tracking-wide font-medium text-white mb-1 cursor-pointer" onClick={() => scrollTo('firm')}>
            Rare Structure
          </h1>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#94a3b8]">Merchant Bank</span>
        </div>

        <div className="hidden md:flex flex-col gap-6">
          {[
            { id: 'firm', label: 'I. The Firm' },
            { id: 'structure', label: 'II. Structure' },
            { id: 'theses', label: 'III. Theses' },
            { id: 'routing', label: 'IV. Routing' },
            { id: 'access', label: 'V. Access' },
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left font-serif text-lg text-[#94a3b8] hover:text-white transition-colors italic tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Empty div with exact height of previous text to perfectly maintain pixel placement */}
        <div className="hidden md:block h-[44px]"></div>
      </nav>

      {/* Main Content Scroll Area */}
      <main className="w-full md:w-2/3 lg:w-3/4 md:ml-auto min-h-screen">
        
        {activeThesis ? (
          <ThesisDetailView thesisId={activeThesis} onBack={() => setActiveThesis(null)} />
        ) : (
          <>
            <section id="firm" className="min-h-screen flex flex-col justify-center p-8 md:p-24 lg:p-32 border-b border-white/[0.04]">
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.05] tracking-tight mb-12">
                Systematic origination.<br />
                <span className="text-[#94a3b8] italic">Institutional capital.</span>
              </h2>
              <div className="max-w-xl">
                <p className="font-sans text-sm md:text-base text-[#cbd5e1] leading-loose font-light">
                  Rare Structure operates exclusively at the intersection of quantitative intelligence and senior-secured credit. We identify, structure, and syndicate private transaction flow for a select consortium of institutional partners. We do not accept unsolicited mandates.
                </p>
              </div>
            </section>

            <section id="structure" className="min-h-screen flex flex-col justify-center p-8 md:p-24 lg:p-32 border-b border-white/[0.04]">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#64748b] mb-8 block">Architecture</span>
              <h2 className="font-serif text-4xl md:text-6xl text-white font-light leading-[1.1] mb-12 max-w-2xl">
                The holding company model isolates operational friction from capital allocation.
              </h2>
              <div className="grid md:grid-cols-2 gap-16 max-w-3xl">
                <div>
                  <span className="font-serif text-2xl text-white mb-4 block italic">Tactical Subsidiaries</span>
                  <p className="font-sans text-sm text-[#cbd5e1] leading-relaxed font-light">
                    Our owned-and-operated brands function as the market interface. They originate opportunities in government contracting, heavy equipment, and commercial logistics directly from operators.
                  </p>
                </div>
                <div>
                  <span className="font-serif text-2xl text-white mb-4 block italic">The Apex Entity</span>
                  <p className="font-sans text-sm text-[#cbd5e1] leading-relaxed font-light">
                    Rare Structure serves solely as the structuring and routing layer. We translate raw operational flow into pristine, senior-secured credit instruments.
                  </p>
                </div>
              </div>
            </section>

            <section id="theses" className="min-h-screen flex flex-col justify-center p-8 md:p-24 lg:p-32 border-b border-white/[0.04]">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#64748b] mb-8 block">Investment Logic</span>
              <h2 className="font-serif text-4xl md:text-6xl text-white font-light leading-[1.1] mb-16 max-w-2xl">
                Active Investment Theses.
              </h2>
              
              <div className="space-y-16 max-w-2xl">
                {Object.entries(THESIS_DATA).map(([id, item]) => (
                  <div 
                    key={id} 
                    onClick={() => {
                      setActiveThesis(id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex flex-col border-l border-white/[0.1] pl-8 cursor-pointer group hover:border-[#94a3b8] transition-colors"
                  >
                    <h3 className="font-serif text-2xl text-white mb-4 italic group-hover:text-[#94a3b8] transition-colors flex items-center justify-between">
                      {item.title}
                      <span className="font-sans text-sm opacity-0 group-hover:opacity-100 transition-opacity">Read Memo →</span>
                    </h3>
                    <p className="font-sans text-sm text-[#cbd5e1] leading-loose font-light mb-6">
                      {item.summary}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="h-px w-6 bg-[#64748b]"></span>
                      <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-[#94a3b8]">
                        Operational Vehicle: <span className="text-white font-medium ml-1">{item.vehicle.name}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="routing" className="min-h-screen flex flex-col justify-center p-8 md:p-24 lg:p-32 border-b border-white/[0.04]">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#64748b] mb-8 block">Capabilities</span>
              <h2 className="font-serif text-4xl md:text-6xl text-white font-light leading-[1.1] mb-16 max-w-2xl">
                Precision engineering applied to private markets.
              </h2>
              
              <div className="space-y-16 max-w-2xl">
                {[
                  { title: "Telemetry", desc: "We map operational metrics across the middle market well before capital is formally requested, creating an adversarial advantage in origination." },
                  { title: "Structuring", desc: "Every transaction is meticulously pre-structured to meet the exact yield, duration, and covenant requirements of our capital syndicate." },
                  { title: "Syndication", desc: "We route senior-secured paper directly to institutional credit funds, bypassing traditional advisory and brokerage channels entirely." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 items-start border-l border-white/[0.1] pl-8">
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl text-white mb-3 italic">{item.title}</h3>
                      <p className="font-sans text-sm text-[#cbd5e1] leading-loose font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="access" className="min-h-screen flex flex-col justify-center p-8 md:p-24 lg:p-32">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#64748b] mb-8 block">Institutional Access</span>
              <h2 className="font-serif text-4xl md:text-6xl text-white font-light leading-[1.1] mb-12">
                By invitation only.
              </h2>
              
              <div className="max-w-md space-y-12">
                <div>
                  <p className="font-sans text-sm text-[#cbd5e1] leading-relaxed font-light mb-6">
                    Access to the Rare Structure routing infrastructure is restricted to existing syndicate partners.
                  </p>
                  <a href="#" className="inline-block font-sans text-[10px] uppercase tracking-[0.2em] text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                    Partner Authentication
                  </a>
                </div>
                
                <div>
                  <p className="font-sans text-sm text-[#cbd5e1] leading-relaxed font-light mb-6">
                    For general firm inquiries, please correspond via the address below.
                  </p>
                  <a href="mailto:inquiries@rarestructure.com" className="inline-block font-sans text-[10px] uppercase tracking-[0.2em] text-[#94a3b8] hover:text-white transition-colors">
                    inquiries@rarestructure.com
                  </a>
                </div>
              </div>
            </section>
          </>
        )}

        <footer className="px-8 py-8 md:px-24 md:py-12 lg:px-32 lg:py-12 border-t border-white/[0.04] flex justify-between items-center bg-[#030814]">
          <span className="font-serif text-lg text-[#64748b] italic">
            &copy; {new Date().getFullYear()} Rare Structure HoldCo.
          </span>
          <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#64748b]">
            Strictly Confidential
          </span>
        </footer>

      </main>
    </div>
  );
}
