import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, ChevronDown, X, Search, ShoppingBag, Heart } from "lucide-react";

import { NAV } from "@/data/site";
import { CATEGORIES } from "@/data/shop";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="ISMAILIFY home">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary font-display text-lg text-secondary-foreground">
        I
      </span>
      <span className="font-display text-lg font-semibold tracking-[0.18em] uppercase">
        Ismailify
      </span>
    </Link>
  );
}

function SearchForm({ onDone }: { onDone?: () => void }) {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    navigate({ to: "/shop", search: { q: q.trim() || undefined } });
    onDone?.();
  }

  return (
    <form onSubmit={submit} className="relative w-full" role="search">
      <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search products"
        aria-label="Search products"
        className="pl-9"
      />
    </form>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="surface-navy">
        <p className="container-page py-2 text-center text-xs tracking-[0.14em] text-white/80 uppercase">
          Free delivery on orders over $150 · 30-day returns
        </p>
      </div>

      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Wordmark />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-primary" }}
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/shop"
            activeProps={{ className: "text-primary" }}
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Shop
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors outline-none hover:text-primary data-[state=open]:text-primary">
              Categories <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {CATEGORIES.map((c) => (
                <DropdownMenuItem key={c.slug} asChild>
                  <Link to="/category/$slug" params={{ slug: c.slug }} className="cursor-pointer">
                    {c.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            to="/about"
            activeProps={{ className: "text-primary" }}
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            to="/contact"
            activeProps={{ className: "text-primary" }}
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden w-56 xl:block">
            <SearchForm />
          </div>
          <Button asChild variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Link to="/shop" search={{ wishlist: true }} aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" className="relative">
            <Link to="/cart" aria-label={`Cart, ${count} items`}>
              <ShoppingBag className="h-5 w-5" />
              {count > 0 ? (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[0.65rem] font-bold text-primary-foreground">
                  {count}
                </span>
              ) : null}
            </Link>
          </Button>

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
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="px-5 pt-5">
                <SearchForm onDone={() => setOpen(false)} />
              </div>
              <nav className="flex flex-col gap-1 px-5 py-6" aria-label="Mobile">
                {NAV.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-base font-medium hover:bg-accent"
                  >
                    {item.label}
                  </Link>
                ))}
                <p className="mt-4 px-3 text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">
                  Categories
                </p>
                {CATEGORIES.map((c) => (
                  <Link
                    key={c.slug}
                    to="/category/$slug"
                    params={{ slug: c.slug }}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-base font-medium hover:bg-accent"
                  >
                    {c.name}
                  </Link>
                ))}
                <Button asChild size="lg" className="mt-5">
                  <Link to="/cart" onClick={() => setOpen(false)}>
                    View Cart ({count})
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
