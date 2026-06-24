import { THESIS_DATA } from "../../lib/data";
import { Section } from "../../components/layout/Section";
import { Label } from "../../components/typography/Label";
import { PagedContent } from "../../components/ui/PagedContent";

export const ThesisDetailView = ({ thesisId, onBack }) => {
  const data = THESIS_DATA[thesisId];
  if (!data) return null;

  const items = data.memo.map((m) => ({ title: m.heading, body: m.text }));

  return (
    <Section
      eyebrow={`Platform: ${data.title}`}
      headline={`${data.vehicle.name}.`}
      headlineMeta={<Label tone="muted">{data.vehicle.role}</Label>}
    >
      <PagedContent items={items} endLabel="Close Thesis" onEnd={onBack} />
    </Section>
  );
};
