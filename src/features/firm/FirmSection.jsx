import { Section } from "../../components/layout/Section";
import { PagedContent } from "../../components/ui/PagedContent";

const ITEMS = [
  {
    body: "Rare Structure operates exclusively at the intersection of quantitative intelligence and senior-secured credit. We identify, structure, and syndicate private transaction flow for a select consortium of institutional partners. We do not accept unsolicited mandates.",
  },
];

export const FirmSection = () => (
  <Section
    eyebrow="The Firm"
    headline="Systematic origination."
    subtitle="Institutional capital."
  >
    <PagedContent items={ITEMS} />
  </Section>
);
