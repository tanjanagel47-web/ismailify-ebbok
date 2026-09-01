import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Section, FaqAccordion, CTASection } from "@/components/site/Sections";
import { FAQS } from "@/data/content";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "eBook Services FAQ | Ismailify" },
      {
        name: "description",
        content:
          "Answers about eBook writing, ghostwriting, editing, proofreading, Kindle and EPUB formatting, cover design, KDP publishing, conversion, revisions, turnaround, and pricing.",
      },
      { property: "og:title", content: "Frequently Asked Questions | Ismailify" },
      {
        property: "og:description",
        content: "Everything authors ask before starting an eBook project with Ismailify.",
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers before you start."
        text="Clear, honest answers on scope, formats, timelines, revisions, and how projects run from start to delivery."
      />
      <Section>
        <FaqAccordion items={FAQS} />
      </Section>
      <CTASection />
    </>
  );
}
