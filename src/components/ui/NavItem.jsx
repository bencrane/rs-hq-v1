// NavItem — serif italic nav link (the "wealth" voice). The active/"live" state
// is the one place the brass signal earns its keep: a short tick to the left.
export const NavItem = ({ children, active = false, onClick }) => (
  <button
    onClick={onClick}
    aria-current={active ? "page" : undefined}
    className={`group/nav relative text-left font-serif text-lg italic tracking-wide transition-colors focus-visible:underline focus-visible:underline-offset-4 focus-visible:outline-none ${
      active ? "text-ink" : "text-muted hover:text-ink"
    }`}
  >
    <span
      aria-hidden="true"
      className={`absolute -left-5 top-1/2 h-px w-3 -translate-y-1/2 bg-signal transition-opacity duration-300 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    />
    {children}
  </button>
);
