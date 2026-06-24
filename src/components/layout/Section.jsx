import { Eyebrow } from "../typography/Eyebrow";
import { Display } from "../typography/Display";

// Section — the pinned slot frame. Every view fills three fixed slots:
//   1. Eyebrow   — mono label at the hang line (same y on every tab)
//   2. Headline  — Display inside a RESERVED band; the band height is fixed so
//                  the content slot below always begins at the same y, whether
//                  the headline is one line ("By invitation only.") or three.
//   3. Content   — children, at one measure, with a fixed start position.
// Sections supply content only — never position, scale, margin, or measure.
export const Section = ({
  eyebrow,
  headline,
  subtitle,
  headlineMeta,
  tier = "section",
  children,
  contentClassName = "max-w-measure",
}) => {
  const band =
    tier === "vehicle"
      ? "min-h-[7rem] md:min-h-vehicle-band"
      : "min-h-[8rem] md:min-h-section-band";
  return (
    <div>
      {eyebrow && <Eyebrow className="mb-10">{eyebrow}</Eyebrow>}
      <div className={`${band} max-w-measure-wide`}>
        <Display tier={tier} subtitle={subtitle}>
          {headline}
        </Display>
        {headlineMeta && <div className="mt-3">{headlineMeta}</div>}
      </div>
      <div className={`mt-10 ${contentClassName}`}>{children}</div>
    </div>
  );
};
