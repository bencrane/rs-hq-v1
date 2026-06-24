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
    <nav className="z-40 flex w-full flex-col border-b border-line-soft bg-canvas p-8 shadow-nav md:fixed md:h-screen md:w-sidebar md:border-b-0 md:border-r md:p-10">
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

        {/* Mobile nav — registry-driven, visible below md */}
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 pl-5 md:hidden">{items}</div>
      </div>

      {/* Desktop nav — optically centered in the rail */}
      <div className="hidden flex-1 flex-col justify-center md:flex">
        <div className="flex flex-col gap-8">{items}</div>
      </div>
    </nav>
  );
};
