// Label — inline mono metadata (entity tags, role lines, the pager). One size,
// tone via prop. Replaces the text-[9px]/[10px], #64748b/#94a3b8 label drift.
const TONES = {
  faint: "text-faint",
  muted: "text-muted",
  body: "text-body",
  signal: "text-signal",
};

export const Label = ({ children, tone = "faint", className = "" }) => (
  <span className={`font-mono text-eyebrow uppercase ${TONES[tone]} ${className}`}>
    {children}
  </span>
);
