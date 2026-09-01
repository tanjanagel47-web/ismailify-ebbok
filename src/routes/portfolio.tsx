import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Section, SectionHeading, CTASection } from "@/components/site/Sections";
import { cn } from "@/lib/utils";
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from "@/data/content";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "eBook Portfolio — Writing, Editing, Formatting & Covers | Ismailify" },
      {
        name: "description",
        content:
          "Selected eBook projects across writing, editing, proofreading, formatting, cover design, publishing, and complete end-to-end builds.",
      },
      { property: "og:title", content: "Portfolio | Ismailify" },
      { property: "og:description", content: "A selection of professional eBook projects." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const items = filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Projects built to be read, not just published."
        text="A selection of eBook work across writing, editing, formatting, design, and publishing preparation."
      />

      <Section>
        <SectionHeading
          eyebrow="Selected Work"
          title="Browse by category"
          text="Filter the collection to see the type of work most relevant to your project."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {PORTFOLIO_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article key={p.id} className="card-premium overflow-hidden">
              <div className={`aspect-4/3 bg-gradient-to-br ${p.accent} p-8`}>
                <div className="flex h-full flex-col justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] text-white/60 uppercase">
                    Ismailify
                  </span>
                  <span className="font-display text-xl leading-snug text-white">{p.title}</span>
                </div>
              </div>
              <div className="p-6">
                <span className="eyebrow">{p.category}</span>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
              </div>
            </article>
          ))}
        </div>

        {items.length === 0 ? (
          <p className="mt-12 text-center text-muted-foreground">
            No projects in this category yet.
          </p>
        ) : null}
      </Section>

      <CTASection />
    </>
  );
}
