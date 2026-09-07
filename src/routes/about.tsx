import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero, Section, SectionHeading } from "@/components/site/Sections";
import { SocialLinks } from "@/components/site/Social";
import { Button } from "@/components/ui/button";
import { WHY, TAGLINE } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ISMAILIFY — Style. Confidence. Identity." },
      {
        name: "description",
        content:
          "ISMAILIFY is a modern menswear brand built around considered design, premium materials, and a wardrobe that works together.",
      },
      { property: "og:title", content: "About ISMAILIFY" },
      {
        property: "og:description",
        content: "Modern menswear designed with intent. Style. Confidence. Identity.",
      },
    ],
  }),
  component: About,
});

const BLOCKS = [
  {
    title: "Who We Are",
    body: "ISMAILIFY is a modern menswear brand built on a simple belief: the right clothes should make the day feel easier. Every piece is designed in-house with proportions, fabric, and finish considered from the first sketch.",
  },
  {
    title: "What We Make",
    body: "A focused collection of shirts, trousers, shoes, belts, caps, and bags — each designed to sit together as one coherent wardrobe. No noise, no trends that expire in a season.",
  },
  {
    title: "Our Approach",
    body: "We start with the material, then the fit, then the detail. Each design goes through rounds of sampling until it feels right on the body and holds up over time.",
  },
  {
    title: "Why ISMAILIFY",
    body: "Premium doesn't have to mean complicated. We offer clear pricing, free delivery over $150, and a 30-day return window — so you can shop with confidence.",
  },
  {
    title: "Our Mission",
    body: "To build a wardrobe that earns its place — pieces that feel considered, fit well, and look better the more you wear them.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Style. Confidence. Identity."
        text="ISMAILIFY is a modern menswear brand designing shirts, trousers, shoes, belts, caps, and bags that work together as one wardrobe."
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
          eyebrow="The ISMAILIFY Standard"
          title="What You Can Expect"
          text="The principles behind every piece we release."
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
          <p className="eyebrow mb-3">{TAGLINE}</p>
          <h2 className="text-2xl">Connect With ISMAILIFY</h2>
          <p className="mt-3 text-muted-foreground">
            Follow along for new arrivals, styling notes, and behind-the-scenes drops.
          </p>
          <SocialLinks className="mt-6 justify-center" />
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
