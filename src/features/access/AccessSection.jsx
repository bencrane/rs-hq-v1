import { Section } from "../../components/layout/Section";
import { BodyText } from "../../components/typography/BodyText";
import { ArrowLink } from "../../components/ui/ArrowLink";

export const AccessSection = () => (
  <Section
    eyebrow="Institutional Access"
    headline="By invitation only."
    contentClassName="max-w-measure-narrow space-y-12"
  >
    <div>
      <BodyText className="mb-6">
        Access to the Rare Structure routing infrastructure is restricted to
        existing syndicate partners.
      </BodyText>
      <ArrowLink href="#" tone="muted">
        Partner Authentication
      </ArrowLink>
    </div>
    <div>
      <BodyText className="mb-6">
        For general firm inquiries, please correspond via the address below.
      </BodyText>
      <ArrowLink href="mailto:inquiries@rarestructure.com" tone="muted">
        inquiries@rarestructure.com
      </ArrowLink>
    </div>
  </Section>
);
