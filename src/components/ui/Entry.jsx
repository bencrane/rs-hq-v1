import { Subhead } from "../typography/Subhead";
import { BodyText } from "../typography/BodyText";
import { Label } from "../typography/Label";
import { Rail } from "./Rail";

// Entry — the ONE content block every view uses. A rail-delimited unit with an
// optional mono index, an optional serif heading, body copy, and an optional
// meta/action row. This is the dossier's "01 / heading / body" rhythm applied to
// every tab, so the content layout is identical across the whole site.
export const Entry = ({ index, title, children, meta, interactive = false, onClick }) => {
  const inner = (
    <Rail interactive={interactive} className="py-1">
      {index && <Label className="mb-4 block">{index}</Label>}
      {title && <Subhead className="mb-3">{title}</Subhead>}
      {children && <BodyText className={meta ? "mb-8" : ""}>{children}</BodyText>}
      {meta}
    </Rail>
  );

  if (!interactive) return inner;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      className="group block w-full cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-muted focus-visible:ring-offset-4 focus-visible:ring-offset-canvas"
    >
      {inner}
    </div>
  );
};
