import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

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
    <section id={id} className={cn("py-16 md:py-24", muted && "bg-muted/60", className)}>
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
      <div className="container-page relative py-16 md:py-24">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl leading-[1.1] text-white md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">{text}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
