import React, { useState, useEffect } from 'react';

const THESIS_DATA = {
  'heavy-civil': {
    title: 'Heavy Civil Infrastructure',
    summary: 'Infrastructure contractors have massive backlogs but cannot finance the equipment needed to do the work. We provide the heavy machinery they need.',
    memo: [
      {
        heading: 'Overview',
        text: 'The United States is undergoing a massive, federally mandated infrastructure rebuild. The contractors tasked with this work have record-high project backlogs.'
      },
      {
        heading: 'Market Dynamics',
        text: 'Despite having guaranteed government contracts, mid-sized civil contractors struggle to buy the heavy machinery required to actually do the work. Traditional banks do not understand how to value specialized construction equipment, so they refuse to lend against it.'
      },
      {
        heading: 'Core Insight',
        text: 'The government contracts themselves are bankable, but the physical equipment required to execute them is entirely misunderstood by traditional credit markets.'
      },
      {
        heading: 'Strategy',
        text: 'This creates a massive gap. The work is guaranteed by the government, the contractors are ready, but the machinery is missing. We step into this gap by purchasing the equipment outright and leasing it directly to the contractors.'
      },
      {
        heading: 'Execution',
        text: 'EquipmentWork operates as our direct market interface. We procure specialized yellow iron and lease it directly to contractors holding federal awards, managing the physical asset lifecycle from procurement to liquidation.'
      }
    ],
    vehicle: {
      name: 'EquipmentWork',
      role: 'Heavy Machinery Leasing & Deployment',
    }
  },
  'federal-compliance': {
    title: 'Federal Compliance',
    summary: 'The government is making it harder for small companies to win federal contracts due to strict new compliance rules. We build compliant entities to capture this abandoned work.',
    memo: [
      {
        heading: 'Overview',
        text: 'The Department of Defense and other federal agencies have rolled out extremely strict new compliance rules for anyone they do business with, especially regarding supply chain security and data protection.'
      },
      {
        heading: 'Market Dynamics',
        text: 'Most small and mid-sized contractors cannot afford the massive overhead required to meet these new standards. As a result, thousands of capable companies are being locked out of the federal contracting market entirely.'
      },
      {
        heading: 'Core Insight',
        text: 'Federal compliance is no longer just a legal checklist; it has become the primary barrier to entry. Companies that solve the compliance layer essentially hold absolute monopolies over their agency relationships.'
      },
      {
        heading: 'Strategy',
        text: 'The federal budget is still growing, but the pool of companies allowed to bid on the work is shrinking. We build and finance specialized, fully compliant logistics companies that step in to win the contracts left behind by those who couldn\'t adapt.'
      },
      {
        heading: 'Execution',
        text: 'Government Contracted serves as our compliant supply chain hub. We finance the clearance, cybersecurity infrastructure, and specialized working capital necessary to execute the federal contracts that traditional operators can no longer bid on.'
      }
    ],
    vehicle: {
      name: 'Government Contracted',
      role: 'Compliant Federal Supply Chain',
    }
  },
  'commercial-logistics': {
    title: 'Commercial Logistics',
    summary: 'The fragmentation of commercial freight creates structural pricing inefficiencies. We deploy capital to consolidate regional transit routes and equipment.',
    memo: [
      {
        heading: 'Overview',
        text: 'The commercial logistics sector remains highly fragmented. The vast majority of regional freight is handled by undercapitalized owner-operators who lack the infrastructure to scale.'
      },
      {
        heading: 'Market Dynamics',
        text: 'As supply chains tighten, major manufacturers and distributors are consolidating their vendor lists. They require logistics partners who can guarantee massive capacity and seamless technological integration. Small operators cannot meet these thresholds, resulting in a systemic mispricing of routes and equipment.'
      },
      {
        heading: 'Core Insight',
        text: 'Enterprise shippers care about uninterrupted capacity and vendor consolidation far more than they care about bottom-line transit rates. Aggregating capacity yields immense pricing power.'
      },
      {
        heading: 'Strategy',
        text: 'We do not compete on rate; we compete on capacity. We identify high-yield regional transit corridors and inject capital to deploy standardized, fully compliant fleets that can instantly integrate with enterprise supply chains.'
      },
      {
        heading: 'Execution',
        text: 'Through Licensed to Haul, we rapidly acquire and deploy commercial rolling stock into targeted regional networks. We pair this hardware advantage with centralized routing infrastructure to lock in long-term enterprise contracts.'
      }
    ],
    vehicle: {
      name: 'Licensed to Haul',
      role: 'Commercial Freight & Logistics',
    }
  }
};

const ThesisDetailView = ({ thesisId, onBack }) => {
  const data = THESIS_DATA[thesisId];
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  
  useEffect(() => {
    setActiveSectionIdx(0); // Reset pagination when thesis changes
  }, [thesisId]);

  if (!data) return null;

  const activeSection = data.memo[activeSectionIdx];
  const totalSections = data.memo.length;
  
  const handleNext = () => {
    if (activeSectionIdx < totalSections - 1) {
      setActiveSectionIdx(activeSectionIdx + 1);
    }
  };
  
  const handlePrev = () => {
    if (activeSectionIdx > 0) {
      setActiveSectionIdx(activeSectionIdx - 1);
    }
  };

  return (
    <div className="px-8 md:px-16 lg:px-32 pt-32 md:pt-48 lg:pt-[25vh] max-w-4xl min-h-[600px] animate-in fade-in duration-300 pb-32">
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#64748b] mb-12 block">
          Platform: {data.title}
        </span>
        
        {/* Unboxed Entity Title - Strict Left Alignment */}
        <div className="mb-32">
          <h2 className="font-serif text-6xl md:text-8xl text-white font-light tracking-tight mb-4">
            {data.vehicle.name}.
          </h2>
          <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-[#94a3b8] block">
            {data.vehicle.role}
          </span>
        </div>

        {/* Paginated Reading Frame */}
        <div className="min-h-[400px] flex flex-col justify-between max-w-2xl">
          <div className="animate-in fade-in duration-300">
            <h3 className="font-serif text-3xl text-white mb-6 italic">{activeSectionIdx + 1}. {activeSection.heading}</h3>
            <p className="font-sans text-sm md:text-base text-[#cbd5e1] leading-loose font-light">
              {activeSection.text}
            </p>
          </div>
          
          {/* Brutalist Typographic Controller */}
          <div className="mt-24 pt-8 border-t border-white/[0.05] flex items-center justify-between">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#64748b]">
              [ 0{activeSectionIdx + 1} / 0{totalSections} ]
            </span>
            
            <div className="flex items-center gap-8">
              {activeSectionIdx > 0 ? (
                <button 
                  onClick={handlePrev}
                  className="group flex items-center gap-3 font-sans text-[9px] uppercase tracking-[0.2em] text-[#64748b] hover:text-white transition-colors"
                >
                  <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
                  Prev
                </button>
              ) : <div className="w-[60px]"></div>}
              
              {activeSectionIdx < totalSections - 1 ? (
                <button 
                  onClick={handleNext}
                  className="group flex items-center gap-3 font-sans text-[9px] uppercase tracking-[0.2em] text-[#94a3b8] hover:text-white transition-colors"
                >
                  Next: {data.memo[activeSectionIdx + 1].heading}
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              ) : (
                <button 
                  onClick={onBack}
                  className="group flex items-center gap-3 font-sans text-[9px] uppercase tracking-[0.2em] text-[#94a3b8] hover:text-white transition-colors"
                >
                  Close Thesis
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              )}
            </div>
          </div>
        </div>

    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('firm');
  const [activeThesis, setActiveThesis] = useState(null);

  const handleTabClick = (id) => {
    setActiveTab(id);
    setActiveThesis(null);
  };

  return (
    <div className="min-h-screen bg-[#040a18] text-[#e2e8f0] flex flex-col md:flex-row relative">
      <div className="fixed inset-0 bg-texture pointer-events-none z-50"></div>

      {/* Fixed Left Navigation Pane */}
      <nav className="w-full md:w-1/3 lg:w-1/4 md:fixed md:h-screen p-8 md:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/[0.04] bg-[#040a18] z-40 shadow-[4px_0_24px_rgba(0,0,0,0.2)]">
        <div>
          <h1 className="font-serif text-2xl lg:text-3xl tracking-wide font-medium text-white mb-1 cursor-pointer" onClick={() => handleTabClick('firm')}>
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
              onClick={() => handleTabClick(item.id)}
              className={`text-left font-serif text-lg transition-colors italic tracking-wide ${activeTab === item.id ? 'text-white' : 'text-[#94a3b8] hover:text-white'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Empty div with exact height of previous text to perfectly maintain pixel placement */}
        <div className="hidden md:block h-[44px]"></div>
      </nav>

      {/* Main Content Area */}
      <main className="w-full md:w-2/3 lg:w-3/4 md:ml-auto min-h-screen flex flex-col">
        <div className="flex-grow">
          {activeThesis ? (
            <ThesisDetailView thesisId={activeThesis} onBack={() => setActiveThesis(null)} />
          ) : (
            <div className="px-8 md:px-16 lg:px-32 pt-32 md:pt-48 lg:pt-[25vh] max-w-4xl min-h-[600px] animate-in fade-in duration-300 pb-32">
              {activeTab === 'firm' && (
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#64748b] mb-12 block">The Firm</span>
                  <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-light leading-[1.05] tracking-tight mb-12">
                    <span className="block whitespace-nowrap">Systematic origination.</span>
                    <span className="block text-[#94a3b8] italic whitespace-nowrap">Institutional capital.</span>
                  </h2>
                  <div className="max-w-xl">
                    <p className="font-sans text-sm md:text-base text-[#cbd5e1] leading-loose font-light">
                      Rare Structure operates exclusively at the intersection of quantitative intelligence and senior-secured credit. We identify, structure, and syndicate private transaction flow for a select consortium of institutional partners. We do not accept unsolicited mandates.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'structure' && (
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#64748b] mb-12 block">Architecture</span>
                  <h2 className="font-serif text-4xl md:text-6xl text-white font-light leading-[1.1] mb-24 max-w-2xl">
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
                </div>
              )}

              {activeTab === 'theses' && (
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#64748b] mb-12 block">Investment Logic</span>
                  <h2 className="font-serif text-4xl md:text-6xl text-white font-light leading-[1.1] mb-24 max-w-2xl">
                    Active Investment Theses.
                  </h2>
                  
                  <div className="space-y-16 max-w-2xl">
                    {Object.entries(THESIS_DATA).map(([id, item]) => (
                      <div 
                        key={id} 
                        onClick={() => setActiveThesis(id)}
                        className="group cursor-pointer"
                      >
                        <div className="border-l border-white/[0.15] pl-8 py-2 group-hover:border-white/[0.4] transition-colors">
                          <h3 className="font-serif text-3xl text-white mb-4 italic">
                            {item.title}
                          </h3>
                          <p className="font-sans text-sm text-[#cbd5e1] leading-loose font-light mb-8 max-w-xl">
                            {item.summary}
                          </p>
                          <div className="flex items-center gap-6">
                            <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#64748b]">
                              Entity <span className="text-[#cbd5e1] font-medium ml-2">{item.vehicle.name}</span>
                            </span>
                            <span className="w-8 h-px bg-white/[0.05] group-hover:bg-white/[0.2] transition-colors"></span>
                            <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#64748b] group-hover:text-white flex items-center gap-2 transition-colors">
                              Read Memo <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'routing' && (
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#64748b] mb-12 block">Capabilities</span>
                  <h2 className="font-serif text-4xl md:text-6xl text-white font-light leading-[1.1] mb-24 max-w-2xl">
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
                </div>
              )}

              {activeTab === 'access' && (
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#64748b] mb-12 block">Institutional Access</span>
                  <h2 className="font-serif text-4xl md:text-6xl text-white font-light leading-[1.1] mb-24">
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
                </div>
              )}
            </div>
          )}
        </div>

        <footer className="px-8 py-8 md:px-24 md:py-12 lg:px-32 lg:py-12 border-t border-white/[0.04] flex justify-between items-center bg-[#030814] mt-auto">
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
