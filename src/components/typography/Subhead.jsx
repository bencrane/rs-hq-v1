// Subhead — secondary heading inside content (serif italic, one scale).
// Replaces the three hand-rolled "font-serif text-2xl/3xl italic" h3 variants.
export const Subhead = ({ children, className = "" }) => (
  <h3 className={`font-serif text-2xl italic text-ink ${className}`}>{children}</h3>
);
