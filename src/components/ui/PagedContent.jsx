import { useState } from "react";
import { Subhead } from "../typography/Subhead";
import { BodyText } from "../typography/BodyText";
import { Label } from "../typography/Label";
import { ArrowLink } from "./ArrowLink";

const pad = (n) => String(n).padStart(2, "0");

// PagedContent — every view's content lives here: ONE entry at a time inside a
// fixed-height container with a bottom rule + pager. Same container size on every
// tab, so the page is contained (no long scroll) and identical tab to tab. This
// is the EquipmentWork dossier rhythm applied everywhere.
export const PagedContent = ({ items, endLabel, onEnd }) => {
  const [idx, setIdx] = useState(0);
  const total = items.length;
  const item = items[idx];
  const atStart = idx === 0;
  const atEnd = idx === total - 1;

  return (
    <div className="flex min-h-[18rem] flex-col justify-between">
      <div key={idx} className="animate-enter">
        <Label className="mb-4 block">{pad(idx + 1)}</Label>
        {item.title && <Subhead className="mb-4">{item.title}</Subhead>}
        <BodyText>{item.body}</BodyText>
        {item.meta && <div className="mt-8">{item.meta}</div>}
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-line pt-8">
        <Label>
          [ {pad(idx + 1)} / {pad(total)} ]
        </Label>
        <div className="flex items-center gap-8">
          {!atStart ? (
            <ArrowLink direction="left" onClick={() => setIdx(idx - 1)}>
              Prev
            </ArrowLink>
          ) : (
            <span className="w-[52px]" />
          )}
          {!atEnd ? (
            <ArrowLink onClick={() => setIdx(idx + 1)}>Next</ArrowLink>
          ) : onEnd ? (
            <ArrowLink onClick={onEnd}>{endLabel}</ArrowLink>
          ) : (
            <span className="w-[52px]" />
          )}
        </div>
      </div>
    </div>
  );
};
