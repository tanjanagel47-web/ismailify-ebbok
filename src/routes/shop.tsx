import { useMemo, useState, type FormEvent } from "react";
import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { Heart, Search, SlidersHorizontal, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/shop/ProductCard";
import { PageHero, Section } from "@/components/site/Sections";
import { CATEGORIES, PRODUCTS, type CategorySlug } from "@/data/shop";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — ISMAILIFY Menswear & Accessories" },
      {
        name: "description",
        content:
          "Browse the full ISMAILIFY collection: shirts, trousers, shoes, belts, caps, and bags.",
      },
      { property: "og:title", content: "Shop ISMAILIFY" },
      {
        property: "og:description",
        content: "Premium menswear and accessories designed with intent.",
      },
    ],
  }),
  component: Shop,
});

type ShopSearch = {
  q?: string;
  category?: CategorySlug;
  wishlist?: boolean;
};

function Shop() {
  const { q, category, wishlist } = useSearch({ from: "/shop" }) as ShopSearch;
  const [query, setQuery] = useState(q ?? "");

  const filtered = useMemo(() => {
    let list = PRODUCTS;
    if (category) list = list.filter((p) => p.category === category);
    if (q?.trim()) {
      const term = q.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term),
      );
    }
    return list;
  }, [q, category]);

  function submit(e: FormEvent) {
    e.preventDefault();
    // Update URL search param via TanStack Router navigation
    window.history.replaceState(
      null,
      "",
      query.trim() ? `/shop?q=${encodeURIComponent(query.trim())}` : "/shop",
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="The Collection"
        text="Everything in one place — filter by category, search by name, and build your wardrobe."
      />

      <Section>
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar filters */}
          <aside className="lg:w-64 lg:shrink-0">
            <div className="card-premium p-5">
              <h2 className="flex items-center gap-2 text-lg">
                <SlidersHorizontal className="h-5 w-5 text-primary" />
                Filters
              </h2>

              <div className="mt-6">
                <h3 className="text-sm font-semibold tracking-wide uppercase">Search</h3>
                <form onSubmit={submit} className="relative mt-3" role="search">
                  <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products"
                    aria-label="Search products"
                    className="pl-9"
                  />
                </form>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold tracking-wide uppercase">Categories</h3>
                <ul className="mt-3 space-y-1">
                  <li>
                    <Link
                      to="/shop"
                      search={{}}
                      className={cn(
                        "block rounded-md px-3 py-2 text-sm transition-colors",
                        !category
                          ? "bg-accent font-medium text-accent-foreground"
                          : "text-foreground/80 hover:bg-accent/50",
                      )}
                    >
                      All Products
                    </Link>
                  </li>
                  {CATEGORIES.map((c) => (
                    <li key={c.slug}>
                      <Link
                        to="/shop"
                        search={{ category: c.slug }}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm transition-colors",
                          category === c.slug
                            ? "bg-accent font-medium text-accent-foreground"
                            : "text-foreground/80 hover:bg-accent/50",
                        )}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <Link
                  to="/shop"
                  search={{ wishlist: true }}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                    wishlist
                      ? "bg-accent font-medium text-accent-foreground"
                      : "text-foreground/80 hover:bg-accent/50",
                  )}
                >
                  <Heart className={cn("h-4 w-4", wishlist && "fill-primary text-primary")} />
                  Wishlist only
                </Link>
              </div>

              {(q || category || wishlist) && (
                <Button asChild variant="outline" size="sm" className="mt-6 w-full">
                  <Link to="/shop" search={{}}>
                    <X className="mr-1 h-4 w-4" />
                    Clear filters
                  </Link>
                </Button>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filtered.length} product{filtered.length === 1 ? "" : "s"}
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="card-premium flex flex-col items-center justify-center py-20 text-center">
                <p className="text-lg font-medium">No products found</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try a different search term or category.
                </p>
                <Button asChild className="mt-6" variant="outline">
                  <Link to="/shop" search={{}}>
                    Clear filters
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
