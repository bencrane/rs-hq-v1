// Eyebrow — the slot-1 section label. Mono uppercase (the data-terminal voice).
// Type identity only; the frame controls its position and the gap beneath it.
export const Eyebrow = ({ children, className = "" }) => (
  <span className={`block font-mono text-eyebrow uppercase text-faint ${className}`}>
    {children}
  </span>
);
