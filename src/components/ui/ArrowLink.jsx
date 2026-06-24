// ArrowLink — the single mono action cue with an animated arrow. Replaces every
// hand-rolled "Read Memo →" / "Prev" / "Next" / "Close" / Access link. The arrow
// shifts on the element's own hover (group/al) AND on an ancestor card hover
// (group), so one component serves both standalone controls and clickable cards.
export const ArrowLink = ({
  children,
  onClick,
  href,
  direction = "right",
  active = false,
  className = "",
  ...rest
}) => {
  const Comp = href ? "a" : "button";
  const arrow = direction === "left" ? "←" : "→";
  const shift =
    direction === "left"
      ? "group-hover/al:-translate-x-1 group-hover:-translate-x-1"
      : "group-hover/al:translate-x-1 group-hover:translate-x-1";
  return (
    <Comp
      onClick={onClick}
      href={href}
      className={`group/al inline-flex items-center gap-3 font-mono text-eyebrow uppercase transition-colors focus-visible:underline focus-visible:underline-offset-4 focus-visible:outline-none ${
        active ? "text-ink" : "text-faint hover:text-ink group-hover:text-ink focus-visible:text-ink"
      } ${className}`}
      {...rest}
    >
      {direction === "left" && (
        <span className={`transition-transform ${shift}`} aria-hidden="true">
          {arrow}
        </span>
      )}
      {children}
      {direction === "right" && (
        <span className={`transition-transform ${shift}`} aria-hidden="true">
          {arrow}
        </span>
      )}
    </Comp>
  );
};
