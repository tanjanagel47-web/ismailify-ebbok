import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PROCESS } from "@/data/site";

export function Section({
  children,
  className,
  muted = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", muted && "bg-muted/60", className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="text-3xl leading-tight md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  children?: ReactNode;
}) {
  return (
    <section className="surface-navy relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
      />
      <div className="container-page relative py-20 md:py-28">
        <p className="eyebrow mb-4 text-primary-foreground/70">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl leading-[1.1] text-white md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">{text}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

export function ListCard({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="card-premium p-7">
      <h3 className="text-xl">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProcessSteps() {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {PROCESS.map((p) => (
        <div key={p.step} className="card-premium p-6">
          <span className="font-display text-3xl text-primary">{p.step}</span>
          <h3 className="mt-3 text-lg">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
        </div>
      ))}
    </div>
  );
}

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="mx-auto mt-12 w-full max-w-3xl">
      {items.map((item, i) => (
        <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
          <AccordionTrigger className="text-left font-display text-base md:text-lg">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function CTASection({
  title = "Let's Bring Your eBook Idea to Life.",
  text = "Tell me about your project and receive a clear scope, timeline, and quote before any work begins.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <div className="surface-navy relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl text-white md:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">{text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
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
          </div>
        </div>
      </div>
    </section>
  );
}
