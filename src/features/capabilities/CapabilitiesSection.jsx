import { TrackingLabel } from '../../components/typography/TrackingLabel';
import { SectionHeading } from '../../components/typography/SectionHeading';
import { SubHeading } from '../../components/typography/SubHeading';
import { BodyText } from '../../components/typography/BodyText';

export const CapabilitiesSection = () => {
  const capabilities = [
    { title: "Telemetry", desc: "We map operational metrics across the middle market well before capital is formally requested, creating an adversarial advantage in origination." },
    { title: "Structuring", desc: "Every transaction is meticulously pre-structured to meet the exact yield, duration, and covenant requirements of our capital syndicate." },
    { title: "Syndication", desc: "We route senior-secured paper directly to institutional credit funds, bypassing traditional advisory and brokerage channels entirely." }
  ];

  return (
    <div>
      <TrackingLabel>Capabilities</TrackingLabel>
      <SectionHeading>
        Precision engineering applied to private markets.
      </SectionHeading>
      
      <div className="space-y-16 max-w-2xl">
        {capabilities.map((item, idx) => (
          <div key={idx} className="flex gap-8 items-start border-l border-white/[0.1] pl-8">
            <div className="flex-1">
              <SubHeading className="!text-2xl !mb-3">{item.title}</SubHeading>
              <BodyText>{item.desc}</BodyText>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
