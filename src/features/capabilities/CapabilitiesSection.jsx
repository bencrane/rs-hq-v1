import { Section } from "../../components/layout/Section";
import { Entry } from "../../components/ui/Entry";

const CAPABILITIES = [
  {
    title: "Telemetry",
    desc: "We map operational metrics across the middle market well before capital is formally requested, creating an adversarial advantage in origination.",
  },
  {
    title: "Structuring",
    desc: "Every transaction is meticulously pre-structured to meet the exact yield, duration, and covenant requirements of our capital syndicate.",
  },
  {
    title: "Syndication",
    desc: "We route senior-secured paper directly to institutional credit funds, bypassing traditional advisory and brokerage channels entirely.",
  },
];

export const CapabilitiesSection = () => (
  <Section eyebrow="Capabilities" headline="Precision engineering applied to private markets.">
    <div className="space-y-16">
      {CAPABILITIES.map((item, i) => (
        <Entry key={item.title} index={String(i + 1).padStart(2, "0")} title={item.title}>
          {item.desc}
        </Entry>
      ))}
    </div>
  </Section>
);
