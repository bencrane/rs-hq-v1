import { THESIS_DATA } from "../../lib/data";
import { Section } from "../../components/layout/Section";
import { Subhead } from "../../components/typography/Subhead";
import { BodyText } from "../../components/typography/BodyText";
import { Label } from "../../components/typography/Label";
import { Rail } from "../../components/ui/Rail";
import { ArrowLink } from "../../components/ui/ArrowLink";

export const ThesesSection = ({ onThesisSelect }) => (
  <Section eyebrow="Investment Logic" headline="Active Investment Theses.">
    <div className="space-y-16">
      {Object.entries(THESIS_DATA).map(([id, item]) => (
        <button
          key={id}
          onClick={() => onThesisSelect(id)}
          className="group block w-full rounded-sm text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-muted focus-visible:ring-offset-4 focus-visible:ring-offset-canvas"
        >
          <Rail interactive className="py-2">
            <Subhead className="mb-4">{item.title}</Subhead>
            <BodyText className="mb-8">{item.summary}</BodyText>
            <div className="flex items-center gap-6">
              <Label>
                Entity <span className="ml-2 text-body">{item.vehicle.name}</span>
              </Label>
              <span className="h-px w-8 bg-line transition-colors group-hover:bg-line-strong" />
              <ArrowLink as="span">Read Memo</ArrowLink>
            </div>
          </Rail>
        </button>
      ))}
    </div>
  </Section>
);
