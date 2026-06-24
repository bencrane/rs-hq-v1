import { useState, useEffect } from 'react';
import { THESIS_DATA } from '../../lib/data';
import { TrackingLabel } from '../../components/typography/TrackingLabel';

export const ThesisDetailView = ({ thesisId, onBack }) => {
  const data = THESIS_DATA[thesisId];
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  
  useEffect(() => {
    setActiveSectionIdx(0);
  }, [thesisId]);

  if (!data) return null;

  const activeSection = data.memo[activeSectionIdx];
  const totalSections = data.memo.length;
  
  const handleNext = () => {
    if (activeSectionIdx < totalSections - 1) setActiveSectionIdx(activeSectionIdx + 1);
  };
  
  const handlePrev = () => {
    if (activeSectionIdx > 0) setActiveSectionIdx(activeSectionIdx - 1);
  };

  return (
    <div>
      <TrackingLabel>Platform: {data.title}</TrackingLabel>
      
      <div className="mb-32">
        <h2 className="font-serif text-6xl md:text-8xl text-white font-light tracking-tight mb-4">
          {data.vehicle.name}.
        </h2>
        <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-[#94a3b8] block">
          {data.vehicle.role}
        </span>
      </div>

      <div className="min-h-[400px] flex flex-col justify-between max-w-2xl">
        <div className="animate-in fade-in duration-300">
          <h3 className="font-serif text-3xl text-white mb-6 italic">{activeSectionIdx + 1}. {activeSection.heading}</h3>
          <p className="font-sans text-sm md:text-base text-[#cbd5e1] leading-loose font-light">
            {activeSection.text}
          </p>
        </div>
        
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
