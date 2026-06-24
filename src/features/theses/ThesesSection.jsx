import { THESIS_DATA } from "../../lib/data";
import { Section } from "../../components/layout/Section";
import { PagedContent } from "../../components/ui/PagedContent";
import { Label } from "../../components/typography/Label";
import { ArrowLink } from "../../components/ui/ArrowLink";

export const ThesesSection = ({ onThesisSelect }) => {
  const items = Object.entries(THESIS_DATA).map(([id, item]) => ({
    title: item.title,
    body: item.summary,
    meta: (
      <div className="flex items-center gap-6">
        <Label>
          Entity <span className="ml-2 text-body">{item.vehicle.name}</span>
        </Label>
        <span className="h-px w-8 bg-line" />
        <ArrowLink onClick={() => onThesisSelect(id)}>Read Memo</ArrowLink>
      </div>
    ),
  }));

  return (
    <Section eyebrow="Investment Logic" headline="Active Investment Theses.">
      <PagedContent items={items} />
    </Section>
  );
};
