import { TrackingLabel } from '../../components/typography/TrackingLabel';
import { SectionHeading } from '../../components/typography/SectionHeading';
import { BodyText } from '../../components/typography/BodyText';

export const AccessSection = () => (
  <div>
    <TrackingLabel>Institutional Access</TrackingLabel>
    <SectionHeading className="!mb-24">
      By invitation only.
    </SectionHeading>
    
    <div className="max-w-md space-y-12">
      <div>
        <BodyText className="leading-relaxed mb-6">
          Access to the Rare Structure routing infrastructure is restricted to existing syndicate partners.
        </BodyText>
        <a href="#" className="inline-block font-sans text-[10px] uppercase tracking-[0.2em] text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
          Partner Authentication
        </a>
      </div>
      
      <div>
        <BodyText className="leading-relaxed mb-6">
          For general firm inquiries, please correspond via the address below.
        </BodyText>
        <a href="mailto:inquiries@rarestructure.com" className="inline-block font-sans text-[10px] uppercase tracking-[0.2em] text-[#94a3b8] hover:text-white transition-colors">
          inquiries@rarestructure.com
        </a>
      </div>
    </div>
  </div>
);
