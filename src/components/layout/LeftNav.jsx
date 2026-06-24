import { SECTIONS } from "../../lib/sections";
import { NavItem } from "../ui/NavItem";
import { Label } from "../typography/Label";

export const LeftNav = ({ activeTab, onTabChange }) => {
  const home = SECTIONS[0].id;
  const items = SECTIONS.map((s) => (
    <NavItem key={s.id} active={activeTab === s.id} onClick={() => onTabChange(s.id)}>
      {s.navLabel}
    </NavItem>
  ));

  return (
    <nav className="z-40 flex w-full flex-col justify-between border-b border-line-soft bg-canvas p-8 shadow-nav md:fixed md:h-screen md:w-1/3 md:border-b-0 md:border-r md:p-16 lg:w-1/4">
      <div>
        <button
          onClick={() => onTabChange(home)}
          aria-label="Rare Structure — home"
          className="block text-left focus-visible:underline focus-visible:underline-offset-4 focus-visible:outline-none"
        >
          <h1 className="mb-1 font-serif text-2xl font-medium tracking-wide text-ink lg:text-3xl">
            Rare Structure
          </h1>
        </button>
        <Label tone="muted" className="block">
          Merchant Bank
        </Label>

        {/* Mobile nav — registry-driven, visible below md (desktop uses the rail) */}
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 pl-5 md:hidden">{items}</div>
      </div>

      {/* Desktop nav — the fixed left rail */}
      <div className="mt-32 hidden flex-col gap-10 md:flex">{items}</div>

      <div className="hidden h-[44px] md:block" />
    </nav>
  );
};
