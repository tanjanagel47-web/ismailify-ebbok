import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { toast } from "sonner";

import { EMAIL, NAV, TAGLINE } from "@/data/site";
import { CATEGORIES } from "@/data/shop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SocialLinks } from "./Social";

export function Footer() {
  const [email, setEmail] = useState("");

  function subscribe(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("Thanks — you're on the list.");
    setEmail("");
  }

  return (
    <footer className="surface-navy mt-20">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-xl font-semibold tracking-[0.18em] uppercase">
            Ismailify
          </span>
          <p className="mt-3 text-sm tracking-[0.18em] text-primary uppercase">{TAGLINE}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Modern menswear and accessories designed with intent — shirts, trousers, shoes, belts,
            caps, and bags built to work together.
          </p>
          <SocialLinks variant="dark" className="mt-6" />
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Explore</h3>
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
            <li>
              <Link to="/cart" className="text-sm text-white/70 transition-colors hover:text-white">
                Cart
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Shop categories">
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Shop</h3>
          <ul className="mt-4 space-y-2.5">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Newsletter</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            New arrivals and private releases, straight to your inbox.
          </p>
          <form onSubmit={subscribe} className="mt-4 flex gap-2">
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              aria-label="Email address"
              className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
            />
            <Button type="submit">Join</Button>
          </form>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-5 inline-flex items-center gap-2 text-sm break-all text-white/80 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4 shrink-0" />
            {EMAIL}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6">
          <p className="text-center text-xs text-white/60">
            © 2026 ISMAILIFY. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
