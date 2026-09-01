import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ChevronDown, X } from "lucide-react";

import { NAV } from "@/data/site";
import { SERVICES } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="Ismailify home">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary font-display text-lg text-secondary-foreground">
        I
      </span>
      <span className="font-display text-xl font-semibold tracking-tight">Ismailify</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
        <Wordmark />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((item) =>
            item.label === "Services" ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors outline-none hover:text-primary data-[state=open]:text-primary">
                  Services <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64">
                  <DropdownMenuItem asChild>
                    <Link to="/services" className="cursor-pointer font-medium">
                      All Services
                    </Link>
                  </DropdownMenuItem>
                  {SERVICES.map((s) => (
                    <DropdownMenuItem key={s.slug} asChild>
                      <Link
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="cursor-pointer"
                      >
                        {s.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="lg">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm overflow-y-auto p-0">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Wordmark />
              <Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex flex-col gap-1 px-5 py-6" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="rounded-md py-2.5 text-base font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <p className="eyebrow mt-6 mb-2">Service Pages</p>
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  onClick={() => setOpen(false)}
                  className="rounded-md py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.name}
                </Link>
              ))}
              <Button asChild size="lg" className="mt-6">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Start Your Project
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
