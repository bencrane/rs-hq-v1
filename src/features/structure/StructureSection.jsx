import { TrackingLabel } from '../../components/typography/TrackingLabel';
import { SectionHeading } from '../../components/typography/SectionHeading';
import { SubHeading } from '../../components/typography/SubHeading';
import { BodyText } from '../../components/typography/BodyText';

export const StructureSection = () => (
  <div>
    <TrackingLabel>Architecture</TrackingLabel>
    <SectionHeading>
      The holding company model isolates operational friction from capital allocation.
    </SectionHeading>
    <div className="grid md:grid-cols-2 gap-16 max-w-3xl">
      <div>
        <SubHeading>Tactical Subsidiaries</SubHeading>
        <BodyText className="leading-relaxed">
          Our owned-and-operated brands function as the market interface. They originate opportunities in government contracting, heavy equipment, and commercial logistics directly from operators.
        </BodyText>
      </div>
      <div>
        <SubHeading>The Apex Entity</SubHeading>
        <BodyText className="leading-relaxed">
          Rare Structure serves solely as the structuring and routing layer. We translate raw operational flow into pristine, senior-secured credit instruments.
        </BodyText>
      </div>
    </div>
  </div>
);
