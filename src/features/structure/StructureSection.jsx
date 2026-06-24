import { Section } from "../../components/layout/Section";
import { Entry } from "../../components/ui/Entry";

const ITEMS = [
  {
    title: "Tactical Subsidiaries",
    body: "Our owned-and-operated brands function as the market interface. They originate opportunities in government contracting, heavy equipment, and commercial logistics directly from operators.",
  },
  {
    title: "The Apex Entity",
    body: "Rare Structure serves solely as the structuring and routing layer. We translate raw operational flow into pristine, senior-secured credit instruments.",
  },
];

export const StructureSection = () => (
  <Section
    eyebrow="Architecture"
    headline="The holding company model isolates operational friction from capital allocation."
  >
    <div className="space-y-16">
      {ITEMS.map((item, i) => (
        <Entry key={item.title} index={String(i + 1).padStart(2, "0")} title={item.title}>
          {item.body}
        </Entry>
      ))}
    </div>
  </Section>
);
