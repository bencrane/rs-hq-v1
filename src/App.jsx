import { useState } from "react";
import { PageWrapper } from "./components/layout/PageWrapper";
import { LeftNav } from "./components/layout/LeftNav";
import { MainCanvas } from "./components/layout/MainCanvas";
import { SECTIONS } from "./lib/sections";
import { ThesisDetailView } from "./features/theses/ThesisDetailView";

export default function App() {
  const [activeTab, setActiveTab] = useState(SECTIONS[0].id);
  const [activeThesis, setActiveThesis] = useState(null);

  const handleTabClick = (id) => {
    setActiveTab(id);
    setActiveThesis(null);
  };

  const active = SECTIONS.find((s) => s.id === activeTab) ?? SECTIONS[0];
  const ActiveSection = active.Component;

  return (
    <PageWrapper>
      <LeftNav activeTab={activeTab} onTabChange={handleTabClick} />

      <MainCanvas>
        <div key={activeThesis ?? activeTab} className="animate-enter">
          {activeThesis ? (
            <ThesisDetailView thesisId={activeThesis} onBack={() => setActiveThesis(null)} />
          ) : (
            <ActiveSection onThesisSelect={setActiveThesis} />
          )}
        </div>
      </MainCanvas>
    </PageWrapper>
  );
}
