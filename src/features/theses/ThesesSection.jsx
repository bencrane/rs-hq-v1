import { THESIS_DATA } from '../../lib/data';
import { TrackingLabel } from '../../components/typography/TrackingLabel';
import { SectionHeading } from '../../components/typography/SectionHeading';

export const ThesesSection = ({ onThesisSelect }) => (
  <div>
    <TrackingLabel>Investment Logic</TrackingLabel>
    <SectionHeading>
      Active Investment Theses.
    </SectionHeading>
    
    <div className="space-y-16 max-w-2xl">
      {Object.entries(THESIS_DATA).map(([id, item]) => (
        <div 
          key={id} 
          onClick={() => onThesisSelect(id)}
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
);
