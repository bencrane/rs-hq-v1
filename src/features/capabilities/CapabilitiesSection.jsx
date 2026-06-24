import { Section } from "../../components/layout/Section";
import { PagedContent } from "../../components/ui/PagedContent";

const ITEMS = [
  {
    title: "Telemetry",
    body: "We map operational metrics across the middle market well before capital is formally requested, creating an adversarial advantage in origination.",
  },
  {
    title: "Structuring",
    body: "Every transaction is meticulously pre-structured to meet the exact yield, duration, and covenant requirements of our capital syndicate.",
  },
  {
    title: "Syndication",
    body: "We route senior-secured paper directly to institutional credit funds, bypassing traditional advisory and brokerage channels entirely.",
  },
];

export const CapabilitiesSection = () => (
  <Section eyebrow="Capabilities" headline="Precision engineering applied to private markets.">
    <PagedContent items={ITEMS} />
  </Section>
);
