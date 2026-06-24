import { Section } from "../../components/layout/Section";
import { Subhead } from "../../components/typography/Subhead";
import { BodyText } from "../../components/typography/BodyText";

export const StructureSection = () => (
  <Section
    eyebrow="Architecture"
    headline="The holding company model isolates operational friction from capital allocation."
    contentClassName="max-w-measure-wide"
  >
    <div className="grid gap-16 md:grid-cols-2">
      <div>
        <Subhead className="mb-4">Tactical Subsidiaries</Subhead>
        <BodyText>
          Our owned-and-operated brands function as the market interface. They
          originate opportunities in government contracting, heavy equipment, and
          commercial logistics directly from operators.
        </BodyText>
      </div>
      <div>
        <Subhead className="mb-4">The Apex Entity</Subhead>
        <BodyText>
          Rare Structure serves solely as the structuring and routing layer. We
          translate raw operational flow into pristine, senior-secured credit
          instruments.
        </BodyText>
      </div>
    </div>
  </Section>
);
