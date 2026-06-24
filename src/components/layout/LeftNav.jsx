export const LeftNav = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'firm', label: 'I. The Firm' },
    { id: 'structure', label: 'II. Structure' },
    { id: 'theses', label: 'III. Theses' },
    { id: 'routing', label: 'IV. Routing' },
    { id: 'access', label: 'V. Access' }
  ];

  return (
    <nav className="w-full md:w-1/3 lg:w-1/4 md:fixed md:h-screen p-8 md:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/[0.04] bg-[#040a18] z-40 shadow-[4px_0_24px_rgba(0,0,0,0.2)]">
      <div>
        <h1 className="font-serif text-2xl lg:text-3xl tracking-wide font-medium text-white mb-1 cursor-pointer" onClick={() => onTabChange('firm')}>
          Rare Structure
        </h1>
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#94a3b8]">Merchant Bank</span>
      </div>
      
      <div className="hidden md:flex flex-col gap-10 mt-32">
        {tabs.map((item) => (
          <button 
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`text-left font-serif text-lg transition-colors italic tracking-wide ${activeTab === item.id ? 'text-white' : 'text-[#94a3b8] hover:text-white'}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      
      <div className="hidden md:block h-[44px]"></div>
    </nav>
  );
};
