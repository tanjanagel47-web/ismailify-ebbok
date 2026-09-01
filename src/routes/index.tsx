import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";

import heroBook from "@/assets/hero-ebook.jpg";
import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  ProcessSteps,
  FaqAccordion,
  CTASection,
} from "@/components/site/Sections";
import { SERVICES } from "@/data/services";
import { WHY } from "@/data/site";
import { FAQS, PORTFOLIO, TESTIMONIALS } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ismailify — Professional eBook Writing, Editing & Publishing" },
      {
        name: "description",
        content:
          "Complete professional eBook solutions: writing, ghostwriting, editing, proofreading, formatting, cover design, conversion, and publishing preparation.",
      },
      { property: "og:title", content: "Ismailify — Professional eBook Expert" },
      {
        property: "og:description",
        content:
          "Turn your ideas into professional eBooks that get read. Writing, editing, formatting, conversion, and publishing preparation.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="surface-navy relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-[-10rem] right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-primary/25 blur-3xl"
        />
        <div className="container-page relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-5">Professional eBook Expert</p>
            <h1 className="text-4xl leading-[1.08] text-white md:text-5xl lg:text-6xl">
              Turn Your Ideas Into Professional eBooks That Get Read.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              From writing and editing to formatting, conversion, and publishing preparation,
              Ismailify provides complete professional eBook solutions that transform ideas into
              polished, reader-ready books.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60">
              <li>Writing &amp; Ghostwriting</li>
              <li>Editing &amp; Proofreading</li>
              <li>Formatting &amp; Conversion</li>
              <li>Covers &amp; Publishing</li>
            </ul>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-6 rounded-[2rem] bg-primary/20 blur-2xl"
            />
            <img
              src={heroBook}
              alt="Professional eBook shown as a navy hardcover book beside a tablet displaying a formatted chapter"
              width={1280}
              height={1280}
              className="relative w-full rounded-3xl border border-white/10 bg-white object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <Section>
        <SectionHeading
          eyebrow="What I Do"
          title="Complete eBook Services"
          text="Every stage of the eBook journey, handled with the same standard of care — book one service or the full process."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="card-premium group flex flex-col p-7"
            >
              <h3 className="text-lg">{s.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.tagline}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">View all services</Link>
          </Button>
        </div>
      </Section>

      {/* Why */}
      <Section muted>
        <SectionHeading
          eyebrow="Why Ismailify"
          title="Why Choose Ismailify"
          text="A calm, professional process built around clarity, quality, and files that actually work on every platform."
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

      {/* Process */}
      <Section>
        <SectionHeading
          eyebrow="How It Works"
          title="A Simple 5-Step Process"
          text="Clear steps, agreed scope, and steady updates from first conversation to final delivery."
        />
        <ProcessSteps />
      </Section>

      {/* Portfolio */}
      <Section muted>
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Portfolio"
          text="A sample of the kinds of eBook projects handled end to end."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.slice(0, 6).map((p) => (
            <article key={p.id} className="card-premium overflow-hidden">
              <div className={`aspect-4/3 bg-gradient-to-br ${p.accent} p-8`}>
                <div className="flex h-full items-end">
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
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/portfolio">See full portfolio</Link>
          </Button>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading
          eyebrow="Client Words"
          title="Testimonials"
          text="Genuine client reviews are added here as projects complete."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <figure key={t.id} className="card-premium p-7">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold">
                {t.name}
                <span className="block text-xs font-normal text-muted-foreground">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/testimonials">Read all testimonials</Link>
          </Button>
        </div>
      </Section>

      {/* FAQ preview */}
      <Section muted>
        <SectionHeading
          eyebrow="Questions"
          title="Frequently Asked"
          text="Quick answers to the questions authors ask most before starting."
        />
        <FaqAccordion items={FAQS.slice(0, 6)} />
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/faq">View all FAQs</Link>
          </Button>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
