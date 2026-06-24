// Body copy — one prose treatment, token-driven. 16px floor (was text-sm/14px),
// one leading. Every paragraph routes through this; nothing re-rolls it inline.
export const BodyText = ({ children, className = "" }) => (
  <p className={`font-sans text-base font-light leading-loose text-body ${className}`}>
    {children}
  </p>
);
