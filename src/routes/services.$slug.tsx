import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import {
  PageHero,
  Section,
  SectionHeading,
  ListCard,
  ProcessSteps,
  FaqAccordion,
  CTASection,
} from "@/components/site/Sections";
import { Button } from "@/components/ui/button";
import { SERVICES, getService } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found | Ismailify" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    const title = `${service.name} | Ismailify`;
    return {
      meta: [
        { title },
        { name: "description", content: service.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: service.tagline },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHero eyebrow="Service" title={service.name} text={service.tagline}>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/contact">Start Your Project</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link to="/services">All Services</Link>
          </Button>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow mb-3">Overview</p>
            <h2 className="text-3xl">What this service does</h2>
            {service.overview.map((p) => (
              <p key={p} className="mt-5 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <ListCard title="What's Included" items={service.includes} />
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-6 lg:grid-cols-2">
          <ListCard title="Benefits" items={service.benefits} />
          <ListCard title="Who It's For" items={service.audience} />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Process"
          title="How the project runs"
          text="A clear, predictable path from first conversation to final files."
        />
        <ProcessSteps />
      </Section>

      <Section muted>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <ListCard title="Deliverables" items={service.deliverables} />
          <div>
            <p className="eyebrow mb-3">FAQ</p>
            <h2 className="text-3xl">{service.name} questions</h2>
            <FaqAccordion items={service.faqs} />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Explore" title="Other services" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="card-premium p-7"
            >
              <h3 className="font-display text-lg">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
