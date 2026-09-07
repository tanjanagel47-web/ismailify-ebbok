import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";

import heroFashion from "@/assets/hero-fashion.jpg";
import promoBanner from "@/assets/promo-banner.jpg";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/shop/ProductCard";
import { Section, SectionHeading } from "@/components/site/Sections";
import { CATEGORIES, PRODUCTS, byBadge } from "@/data/shop";
import { WHY } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ISMAILIFY — Elevate Your Everyday Style" },
      {
        name: "description",
        content:
          "ISMAILIFY menswear: premium shirts, trousers, shoes, belts, caps, and bags designed with intent. Style. Confidence. Identity.",
      },
      { property: "og:title", content: "ISMAILIFY — Elevate Your Everyday Style" },
      {
        property: "og:description",
        content:
          "Modern menswear and accessories built to work together. Discover the new collection.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const bestSellers = byBadge("Best Seller").slice(0, 4);
  const newArrivals = byBadge("New").slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="surface-navy relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-[-10rem] right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-primary/25 blur-3xl"
        />
        <div className="container-page relative grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <p className="eyebrow mb-5">New Collection</p>
            <h1 className="text-4xl leading-[1.08] text-white md:text-5xl lg:text-6xl">
              Elevate Your Everyday Style.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Precision-cut menswear and refined accessories designed to work together — shirts,
              trousers, shoes, belts, caps, and bags for the man who dresses with intent.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/shop">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Shop Now
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/category/shirts">Explore Shirts</Link>
              </Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60">
              <li>Free delivery over $150</li>
              <li>30-day returns</li>
              <li>In-house design</li>
              <li>Premium materials</li>
            </ul>
          </div>

          <div className="relative order-1 lg:order-2">
            <div
              aria-hidden
              className="absolute inset-6 rounded-[2rem] bg-primary/20 blur-2xl"
            />
            <img
              src={heroFashion}
              alt="ISMAILIFY model in a crisp white shirt and tailored navy trousers against a deep navy backdrop"
              width={1280}
              height={1600}
              className="relative w-full rounded-3xl border border-white/10 bg-white object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <Section>
        <SectionHeading
          eyebrow="Shop by Category"
          title="Featured Collections"
          text="Six curated categories, each designed as a chapter of one coherent wardrobe."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-xs font-bold tracking-[0.16em] text-primary uppercase">
                  {c.short}
                </p>
                <h3 className="mt-1 text-2xl">{c.name}</h3>
                <p className="mt-2 max-w-xs text-sm text-white/80">{c.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                  Shop {c.short}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Best Sellers */}
      <Section muted>
        <SectionHeading
          eyebrow="Most Loved"
          title="Best Sellers"
          text="The pieces customers return for — refined staples that earn their place in any wardrobe."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/shop">View all products</Link>
          </Button>
        </div>
      </Section>

      {/* Promotional Banner */}
      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={promoBanner}
              alt="Two models wearing ISMAILIFY navy and violet pieces in a premium studio setting"
              width={1600}
              height={900}
              className="h-[28rem] w-full object-cover md:h-[32rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container-page max-w-xl px-6 text-white md:px-12">
                <p className="eyebrow mb-4">Limited Release</p>
                <h2 className="text-3xl leading-tight md:text-5xl">The Violet Edit.</h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
                  A seasonal capsule in deep navy and electric violet — designed for evenings that
                  turn into memories.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link to="/shop">Shop the Edit</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link to="/category/bags">Explore Bags</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <Section>
        <SectionHeading
          eyebrow="Just Dropped"
          title="New Arrivals"
          text="Fresh silhouettes, new colourways, and the latest additions to the ISMAILIFY wardrobe."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Section>

      {/* Why ISMAILIFY */}
      <Section muted>
        <SectionHeading
          eyebrow="Why ISMAILIFY"
          title="Designed With Intent"
          text="A wardrobe should feel considered, not complicated. Here's how we make that happen."
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

      {/* Newsletter */}
      <NewsletterSection />
    </>
  );
}

function NewsletterSection() {
  return (
    <section className="surface-navy relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
      />
      <div className="container-page relative text-center">
        <p className="eyebrow mb-4">Join the List</p>
        <h2 className="mx-auto max-w-2xl text-3xl text-white md:text-4xl">
          Private Releases & Early Access
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/75">
          Be the first to know about new arrivals, limited capsules, and member-only drops.
        </p>
        <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to="/contact">Subscribe</Link>
          </Button>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/60">
          <Star className="h-4 w-4 fill-current text-primary" />
          <span>Join 10,000+ style insiders</span>
        </div>
      </div>
    </section>
  );
}
