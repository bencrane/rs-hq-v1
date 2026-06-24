import { Section } from "../../components/layout/Section";
import { Entry } from "../../components/ui/Entry";
import { ArrowLink } from "../../components/ui/ArrowLink";

export const AccessSection = () => (
  <Section eyebrow="Institutional Access" headline="By invitation only.">
    <div className="space-y-16">
      <Entry
        index="01"
        meta={
          <ArrowLink href="#" tone="muted">
            Partner Authentication
          </ArrowLink>
        }
      >
        Access to the Rare Structure routing infrastructure is restricted to
        existing syndicate partners.
      </Entry>
      <Entry
        index="02"
        meta={
          <ArrowLink href="mailto:inquiries@rarestructure.com" tone="muted">
            inquiries@rarestructure.com
          </ArrowLink>
        }
      >
        For general firm inquiries, please correspond via the address below.
      </Entry>
    </div>
  </Section>
);
