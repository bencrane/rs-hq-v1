import { SECTIONS } from "../../lib/sections";
import { NavItem } from "../ui/NavItem";

export const LeftNav = ({ activeTab, onTabChange }) => (
  <nav className="z-40 flex w-full flex-col justify-between border-b border-line-soft bg-canvas p-8 shadow-[4px_0_24px_rgba(0,0,0,0.2)] md:fixed md:h-screen md:w-1/3 md:border-b-0 md:border-r md:p-16 lg:w-1/4">
    <div>
      <button
        onClick={() => onTabChange("firm")}
        className="block text-left focus-visible:underline focus-visible:underline-offset-4 focus-visible:outline-none"
      >
        <h1 className="mb-1 font-serif text-2xl font-medium tracking-wide text-ink lg:text-3xl">
          Rare Structure
        </h1>
      </button>
      <span className="font-mono text-eyebrow uppercase text-muted">Merchant Bank</span>
    </div>

    <div className="mt-32 hidden flex-col gap-10 md:flex">
      {SECTIONS.map((s) => (
        <NavItem
          key={s.id}
          active={activeTab === s.id}
          onClick={() => onTabChange(s.id)}
        >
          {s.navLabel}
        </NavItem>
      ))}
    </div>

    <div className="hidden h-[44px] md:block" />
  </nav>
);
