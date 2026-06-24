// Rail — the one left-accent container. Replaces the border-l white/[0.1] vs
// /[0.15] drift with a single hairline token; brightens on ancestor card hover.
export const Rail = ({ children, interactive = false, className = "" }) => (
  <div
    className={`border-l border-line pl-8 ${
      interactive ? "transition-colors group-hover:border-line-strong" : ""
    } ${className}`}
  >
    {children}
  </div>
);
