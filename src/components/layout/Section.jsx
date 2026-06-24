import { Eyebrow } from "../typography/Eyebrow";
import { Display } from "../typography/Display";

// Section — the one pinned template every view fills. Three fixed slots:
//   1. Eyebrow   — mono label at the hang line (same y on every view)
//   2. Headline  — Display inside a RESERVED band (one fixed height); an optional
//                  headlineMeta (e.g. the dossier's mono role) sits in the band too,
//                  so it never pushes the content slot.
//   3. Content   — children, at one measure, at a fixed start (same y everywhere).
// Tabs and the dossier use the SAME frame, scale, and band — no tiers. Sections
// supply content only; never position, scale, margin, or measure.
export const Section = ({
  eyebrow,
  headline,
  subtitle,
  headlineMeta,
  children,
  contentClassName = "max-w-measure",
}) => (
  <div>
    {eyebrow && <Eyebrow className="mb-10">{eyebrow}</Eyebrow>}
    <div className="min-h-[8rem] max-w-measure-wide md:min-h-headline-band">
      <Display subtitle={subtitle}>{headline}</Display>
      {headlineMeta && <div className="mt-3">{headlineMeta}</div>}
    </div>
    <div className={`mt-10 ${contentClassName}`}>{children}</div>
  </div>
);
