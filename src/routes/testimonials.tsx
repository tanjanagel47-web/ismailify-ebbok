import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";

import { PageHero, Section, SectionHeading, CTASection } from "@/components/site/Sections";
import { TESTIMONIALS } from "@/data/content";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials | Ismailify eBook Services" },
      {
        name: "description",
        content:
          "Genuine client feedback on Ismailify's eBook writing, editing, formatting, cover design, and publishing preparation services.",
      },
      { property: "og:title", content: "Testimonials | Ismailify" },
      { property: "og:description", content: "Client feedback from completed eBook projects." },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What clients say about working with Ismailify."
        text="Only genuine reviews from completed projects are published here. Reserved slots below are filled as clients share their feedback."
      />

      <Section>
        <SectionHeading
          eyebrow="Client Feedback"
          title="Reviews from real projects"
          text="Each card is a placeholder ready to hold a verified client review."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.id} className="card-premium relative p-8">
              <Quote className="h-7 w-7 text-primary/30" />
              <blockquote className="mt-4 leading-relaxed text-muted-foreground">
                “{t.quote}”
              </blockquote>
              <div className="mt-6 flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <figcaption className="mt-4 border-t border-border pt-4 text-sm font-semibold">
                {t.name}
                <span className="block text-xs font-normal text-muted-foreground">
                  {t.role} · {t.service}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CTASection
        title="Want to be the next success story?"
        text="Share your project details and let's build an eBook worth talking about."
      />
    </>
  );
}
