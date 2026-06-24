import { SECTIONS } from "../../lib/sections";
import { NavItem } from "../ui/NavItem";
import { Label } from "../typography/Label";

export const LeftNav = ({ activeTab, onTabChange }) => {
  const home = SECTIONS[0].id;

  return (
    <>
      {/* Narrow widths — a thin stripe of roman numerals on the left */}
      <nav className="fixed left-0 top-0 z-40 flex h-screen w-rail flex-col items-center border-r border-line-soft bg-canvas py-8 md:hidden">
        <button
          onClick={() => onTabChange(home)}
          aria-label="Rare Structure — home"
          className="font-serif text-lg font-medium text-ink focus-visible:outline-none"
        >
          RS
        </button>
        <div className="flex flex-1 flex-col items-center justify-center gap-7">
          {SECTIONS.map((s) => {
            const numeral = s.navLabel.split(".")[0];
            const active = activeTab === s.id;
            return (
              <button
                key={s.id}
                onClick={() => onTabChange(s.id)}
                aria-label={s.navLabel}
                aria-current={active ? "page" : undefined}
                className={`relative flex h-7 w-full items-center justify-center font-serif text-base transition-colors focus-visible:outline-none ${
                  active ? "text-ink" : "text-faint hover:text-ink"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 h-5 w-px bg-signal transition-opacity duration-300 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
                {numeral}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Desktop — the full labeled sidebar */}
      <nav className="z-40 hidden bg-canvas shadow-nav md:fixed md:flex md:h-screen md:w-sidebar md:flex-col md:border-r md:border-line-soft md:p-10">
        <div>
          <button
            onClick={() => onTabChange(home)}
            aria-label="Rare Structure — home"
            className="block text-left focus-visible:underline focus-visible:underline-offset-4 focus-visible:outline-none"
          >
            <h1 className="font-serif text-2xl font-medium tracking-wide text-ink">Rare Structure</h1>
          </button>
          <Label tone="muted" className="mt-1 block">
            Merchant Bank
          </Label>
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <div className="flex flex-col gap-8">
            {SECTIONS.map((s) => (
              <NavItem key={s.id} active={activeTab === s.id} onClick={() => onTabChange(s.id)}>
                {s.navLabel}
              </NavItem>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};
