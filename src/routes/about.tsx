import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Section, SectionHeading, CTASection } from "@/components/site/Sections";
import { SocialLinks } from "@/components/site/Social";
import { WHY } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ismailify — eBook Expert & Ghostwriter" },
      {
        name: "description",
        content:
          "Ismailify helps authors, entrepreneurs, coaches, and businesses turn ideas and manuscripts into polished professional eBooks.",
      },
      { property: "og:title", content: "About Ismailify" },
      {
        property: "og:description",
        content: "An eBook expert focused on clarity, quality, and reader-ready books.",
      },
    ],
  }),
  component: About,
});

const BLOCKS = [
  {
    title: "Who I Am",
    body: "I'm Ismail — the person behind Ismailify, a professional eBook service built around one idea: good ideas deserve books that people actually finish. I work directly with the people I write, edit, and design for, so nothing gets lost in handovers or templates.",
  },
  {
    title: "What I Do",
    body: "I help authors, entrepreneurs, coaches, businesses, creators, and individuals turn ideas and manuscripts into polished professional eBooks. That covers writing and ghostwriting, developmental and line editing, proofreading, formatting for Kindle, EPUB and PDF, cover design, conversion, and publishing preparation.",
  },
  {
    title: "My Approach",
    body: "Every project starts with understanding your reader, not just your topic. Scope, structure, and timeline are agreed up front, work happens in visible stages, and revisions are built in. You always know what is being done, why, and when it lands.",
  },
  {
    title: "Why Ismailify",
    body: "Most authors end up stitching together several freelancers and hoping the pieces fit. Ismailify keeps the whole journey in one place, with one consistent standard — so the writing, editing, layout, cover, and final files all belong to the same book.",
  },
  {
    title: "My Mission",
    body: "To make professional publishing accessible to people with something worth saying — producing eBooks that read well, look premium, and are technically ready for every major platform.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A professional eBook expert for people with something worth publishing."
        text="Ismailify exists to take ideas, notes, and half-finished manuscripts and turn them into books readers finish and recommend."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          {BLOCKS.map((b) => (
            <article key={b.title} className="card-premium p-8">
              <h2 className="text-2xl">{b.title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{b.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Working Together"
          title="What you can expect"
          text="The standards that apply to every Ismailify project, regardless of size."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => (
            <div key={w.title} className="card-premium p-7">
              <h3 className="text-lg">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl">Connect with Ismailify</h2>
          <p className="mt-3 text-muted-foreground">
            Follow along for eBook tips, project updates, and publishing insights.
          </p>
          <SocialLinks className="mt-6 justify-center" />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
