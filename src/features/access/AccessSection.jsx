import { Section } from "../../components/layout/Section";
import { PagedContent } from "../../components/ui/PagedContent";
import { ArrowLink } from "../../components/ui/ArrowLink";

const ITEMS = [
  {
    title: "Partner Authentication",
    body: "Access to the Rare Structure routing infrastructure is restricted to existing syndicate partners.",
    meta: (
      <ArrowLink href="#" tone="muted">
        Authenticate
      </ArrowLink>
    ),
  },
  {
    title: "Direct Correspondence",
    body: "For general firm inquiries, please correspond via the address below.",
    meta: (
      <ArrowLink href="mailto:inquiries@rarestructure.com" tone="muted">
        inquiries@rarestructure.com
      </ArrowLink>
    ),
  },
];

export const AccessSection = () => (
  <Section eyebrow="Institutional Access" headline="By invitation only.">
    <PagedContent items={ITEMS} />
  </Section>
);
