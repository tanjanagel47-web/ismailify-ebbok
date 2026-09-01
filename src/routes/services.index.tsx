import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero, Section, SectionHeading, ProcessSteps, CTASection } from "@/components/site/Sections";
import { Button } from "@/components/ui/button";
import { SERVICE_GROUPS } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "eBook Services — Writing, Editing, Formatting & Publishing | Ismailify" },
      {
        name: "description",
        content:
          "Complete eBook services: writing, ghostwriting, developmental and copy editing, proofreading, Kindle and EPUB formatting, cover design, KDP preparation, and conversion.",
      },
      { property: "og:title", content: "Complete eBook Services | Ismailify" },
      {
        property: "og:description",
        content: "One provider for writing, editing, quality, formatting, design, publishing, and conversion.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A complete eBook solution, from first idea to publish-ready files."
        text="Choose a single service or the full journey. Every stage is delivered to the same professional standard, with clear scope and structured revisions."
      >
        <Button asChild size="lg">
          <Link to="/contact">Start Your Project</Link>
        </Button>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Full Capability"
          title="Everything your eBook needs"
          text="Seven service areas covering the entire production process."
        />
        <div className="mt-14 space-y-14">
          {SERVICE_GROUPS.map((group) => (
            <div key={group.category}>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-border pb-4">
                <h3 className="text-2xl">{group.category}</h3>
                <p className="text-sm text-muted-foreground">{group.blurb}</p>
              </div>
              <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) =>
                  item.slug ? (
                    <Link
                      key={item.name}
                      to="/services/$slug"
                      params={{ slug: item.slug }}
                      className="card-premium group flex flex-col p-7"
                    >
                      <h4 className="font-display text-lg">{item.name}</h4>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  ) : (
                    <div key={item.name} className="card-premium p-7">
                      <h4 className="font-display text-lg">{item.name}</h4>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="How It Works"
          title="A Simple 5-Step Process"
          text="The same clear path applies to every service."
        />
        <ProcessSteps />
      </Section>

      <CTASection />
    </>
  );
}
