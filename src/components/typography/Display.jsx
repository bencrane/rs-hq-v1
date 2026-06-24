// Display heading — the single hero type treatment. ONE fluid scale per tier:
//   'section' (corporate) keeps every tab's headline identical in size;
//   'vehicle' (tactical dossier) is the larger, distinct register.
// Carries type identity only — the frame owns position, margin, and measure.
export const Display = ({ children, subtitle, tier = "section", className = "" }) => {
  const size = tier === "vehicle" ? "text-display-lg" : "text-display";
  return (
    <h2 className={`font-serif ${size} font-light text-ink ${className}`}>
      <span className="block">{children}</span>
      {subtitle && <span className="block italic text-muted">{subtitle}</span>}
    </h2>
  );
};
