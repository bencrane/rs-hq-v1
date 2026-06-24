import { useState } from 'react';
import { PageWrapper } from './components/layout/PageWrapper';
import { LeftNav } from './components/layout/LeftNav';
import { MainCanvas } from './components/layout/MainCanvas';

import { FirmSection } from './features/firm/FirmSection';
import { StructureSection } from './features/structure/StructureSection';
import { ThesesSection } from './features/theses/ThesesSection';
import { CapabilitiesSection } from './features/capabilities/CapabilitiesSection';
import { AccessSection } from './features/access/AccessSection';
import { ThesisDetailView } from './features/theses/ThesisDetailView';

export default function App() {
  const [activeTab, setActiveTab] = useState('firm');
  const [activeThesis, setActiveThesis] = useState(null);

  const handleTabClick = (id) => {
    setActiveTab(id);
    setActiveThesis(null);
  };

  return (
    <PageWrapper>
      <LeftNav activeTab={activeTab} onTabChange={handleTabClick} />
      
      <MainCanvas>
        {activeThesis ? (
          <ThesisDetailView thesisId={activeThesis} onBack={() => setActiveThesis(null)} />
        ) : (
          <>
            {activeTab === 'firm' && <FirmSection />}
            {activeTab === 'structure' && <StructureSection />}
            {activeTab === 'theses' && <ThesesSection onThesisSelect={setActiveThesis} />}
            {activeTab === 'routing' && <CapabilitiesSection />}
            {activeTab === 'access' && <AccessSection />}
          </>
        )}
      </MainCanvas>
    </PageWrapper>
  );
}
