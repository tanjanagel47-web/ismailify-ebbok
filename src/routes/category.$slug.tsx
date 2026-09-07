import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/shop/ProductCard";
import { PageHero, Section } from "@/components/site/Sections";
import { CATEGORIES, PRODUCTS, getCategory, byCategory } from "@/data/shop";

export const Route = createFileRoute("/category/$slug")({
  head: ({ params }) => {
    const category = getCategory(params.slug);
    return {
      meta: [
        { title: category ? `${category.name} — ISMAILIFY` : "Category — ISMAILIFY" },
        {
          name: "description",
          content: category
            ? `Shop ISMAILIFY ${category.name.toLowerCase()}: ${category.blurb}`
            : "Shop ISMAILIFY menswear and accessories.",
        },
        { property: "og:title", content: category ? `${category.name} — ISMAILIFY` : "ISMAILIFY" },
        {
          property: "og:description",
          content: category ? category.blurb : "Premium menswear and accessories.",
        },
      ],
    };
  },
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { slug: params.slug };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { slug } = Route.useLoaderData();
  const category = getCategory(slug)!;
  const products = byCategory(slug);

  return (
    <>
      <PageHero
        eyebrow={category.short}
        title={category.name}
        text={category.blurb}
      />

      <Section>
        {products.length === 0 ? (
          <div className="text-center">
            <p className="text-lg">No products in this category yet.</p>
            <Button asChild className="mt-6" variant="outline">
              <Link to="/shop">Back to shop</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </Section>

      {/* Explore other categories */}
      <Section muted>
        <div className="text-center">
          <p className="eyebrow mb-3">Complete the Look</p>
          <h2 className="text-2xl md:text-3xl">Explore More Categories</h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CATEGORIES.filter((c) => c.slug !== slug).map((c) => (
            <Button key={c.slug} asChild variant="outline">
              <Link to="/category/$slug" params={{ slug: c.slug }}>
                {c.name}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          ))}
        </div>
      </Section>
    </>
  );
}
