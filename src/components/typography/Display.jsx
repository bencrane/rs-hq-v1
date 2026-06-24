// Display heading — the single hero type treatment. ONE fluid scale for every
// view (corporate tabs and the dossier alike); the frame owns position, margin,
// and measure. Optional italic subtitle (the second headline line, e.g. Firm).
export const Display = ({ children, subtitle, className = "" }) => (
  <h2 className={`font-serif text-display font-light text-ink ${className}`}>
    <span className="block">{children}</span>
    {subtitle && <span className="block italic text-muted">{subtitle}</span>}
  </h2>
);
