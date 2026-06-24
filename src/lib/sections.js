import { FirmSection } from "../features/firm/FirmSection";
import { StructureSection } from "../features/structure/StructureSection";
import { ThesesSection } from "../features/theses/ThesesSection";
import { CapabilitiesSection } from "../features/capabilities/CapabilitiesSection";
import { AccessSection } from "../features/access/AccessSection";

// Single source for the corporate tabs. Both the left nav and the router map
// over this array — add or reorder a tab HERE, once, and both stay in sync.
// (id 'routing' renders the Capabilities section; the nav label is the brand's
//  term for it. If the label should read "Capabilities", change it here only.)
export const SECTIONS = [
  { id: "firm", navLabel: "I. The Firm", Component: FirmSection },
  { id: "structure", navLabel: "II. Structure", Component: StructureSection },
  { id: "theses", navLabel: "III. Theses", Component: ThesesSection },
  { id: "routing", navLabel: "IV. Routing", Component: CapabilitiesSection },
  { id: "access", navLabel: "V. Access", Component: AccessSection },
];
