import { TrackingLabel } from '../../components/typography/TrackingLabel';
import { PlatformHeading } from '../../components/typography/PlatformHeading';
import { BodyText } from '../../components/typography/BodyText';

export const FirmSection = () => (
  <div>
    <TrackingLabel>The Firm</TrackingLabel>
    <PlatformHeading 
      title="Systematic origination." 
      subtitle="Institutional capital." 
    />
    <div className="max-w-xl">
      <BodyText>
        Rare Structure operates exclusively at the intersection of quantitative intelligence and senior-secured credit. We identify, structure, and syndicate private transaction flow for a select consortium of institutional partners. We do not accept unsolicited mandates.
      </BodyText>
    </div>
  </div>
);
