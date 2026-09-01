import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

import { EMAIL, NAV } from "@/data/site";
import { SERVICES } from "@/data/services";
import { SocialLinks } from "./Social";

export function Footer() {
  return (
    <footer className="surface-navy mt-24">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <span className="font-display text-2xl font-semibold">Ismailify</span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Professional eBook expert helping authors, entrepreneurs, and businesses turn ideas and
            manuscripts into polished, reader-ready books.
          </p>
          <SocialLinks variant="dark" className="mt-6" />
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Navigation</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Get in touch</h3>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-4 inline-flex items-center gap-2 text-sm break-all text-white/80 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4 shrink-0" />
            {EMAIL}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Share your project details and receive a clear scope, timeline, and quote before any
            work begins.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start Your Project
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6">
          <p className="text-center text-xs text-white/60">
            © 2026 Ismailify. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
