import { useState, useEffect } from "react";
import { THESIS_DATA } from "../../lib/data";
import { Section } from "../../components/layout/Section";
import { Subhead } from "../../components/typography/Subhead";
import { BodyText } from "../../components/typography/BodyText";
import { Label } from "../../components/typography/Label";
import { ArrowLink } from "../../components/ui/ArrowLink";

export const ThesisDetailView = ({ thesisId, onBack }) => {
  const data = THESIS_DATA[thesisId];
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);

  useEffect(() => {
    setActiveSectionIdx(0);
  }, [thesisId]);

  if (!data) return null;

  const activeSection = data.memo[activeSectionIdx];
  const totalSections = data.memo.length;

  const handleNext = () => {
    if (activeSectionIdx < totalSections - 1) setActiveSectionIdx(activeSectionIdx + 1);
  };
  const handlePrev = () => {
    if (activeSectionIdx > 0) setActiveSectionIdx(activeSectionIdx - 1);
  };

  return (
    <Section
      eyebrow={`Platform: ${data.title}`}
      headline={`${data.vehicle.name}.`}
      headlineMeta={<Label tone="muted">{data.vehicle.role}</Label>}
    >
      <div className="flex min-h-[360px] flex-col justify-between">
        <div key={activeSectionIdx} className="animate-enter">
          <Label className="mb-4 block">
            {String(activeSectionIdx + 1).padStart(2, "0")}
          </Label>
          <Subhead className="mb-6">{activeSection.heading}</Subhead>
          <BodyText>{activeSection.text}</BodyText>
        </div>

        <div className="mt-24 flex items-center justify-between border-t border-line pt-8">
          <Label>
            [ 0{activeSectionIdx + 1} / 0{totalSections} ]
          </Label>

          <div className="flex items-center gap-8">
            {activeSectionIdx > 0 ? (
              <ArrowLink direction="left" onClick={handlePrev}>
                Prev
              </ArrowLink>
            ) : (
              <div className="w-[60px]" />
            )}

            {activeSectionIdx < totalSections - 1 ? (
              <ArrowLink onClick={handleNext}>
                Next: {data.memo[activeSectionIdx + 1].heading}
              </ArrowLink>
            ) : (
              <ArrowLink onClick={onBack}>Close Thesis</ArrowLink>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};
