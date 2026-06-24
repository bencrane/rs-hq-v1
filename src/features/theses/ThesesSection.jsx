import { THESIS_DATA } from "../../lib/data";
import { Section } from "../../components/layout/Section";
import { Entry } from "../../components/ui/Entry";
import { Label } from "../../components/typography/Label";
import { ArrowLink } from "../../components/ui/ArrowLink";

export const ThesesSection = ({ onThesisSelect }) => (
  <Section eyebrow="Investment Logic" headline="Active Investment Theses.">
    <div className="space-y-16">
      {Object.entries(THESIS_DATA).map(([id, item], i) => (
        <Entry
          key={id}
          index={String(i + 1).padStart(2, "0")}
          title={item.title}
          interactive
          onClick={() => onThesisSelect(id)}
          meta={
            <div className="flex items-center gap-6">
              <Label>
                Entity <span className="ml-2 text-body">{item.vehicle.name}</span>
              </Label>
              <span className="h-px w-8 bg-line transition-colors group-hover:bg-line-strong" />
              <ArrowLink as="span">Read Memo</ArrowLink>
            </div>
          }
        >
          {item.summary}
        </Entry>
      ))}
    </div>
  </Section>
);
