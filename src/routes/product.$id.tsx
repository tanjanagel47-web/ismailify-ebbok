import { useMemo, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Heart, Minus, Plus, ShoppingBag, Star, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart";
import { Section } from "@/components/site/Sections";
import { ProductCard } from "@/components/shop/ProductCard";
import { byCategory, getProduct, PRODUCTS, formatPrice } from "@/data/shop";

export const Route = createFileRoute("/product/$id")({
  head: ({ params }) => {
    const product = getProduct(params.id);
    return {
      meta: [
        { title: product ? `${product.name} — ISMAILIFY` : "Product — ISMAILIFY" },
        {
          name: "description",
          content: product ? product.description : "Shop ISMAILIFY menswear and accessories.",
        },
        { property: "og:title", content: product ? `${product.name} — ISMAILIFY` : "ISMAILIFY" },
        {
          property: "og:description",
          content: product ? product.description : "Premium menswear and accessories.",
        },
      ],
    };
  },
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { id: params.id };
  },
  component: ProductPage,
});

function ProductPage() {
  const { id } = Route.useLoaderData();
  const product = getProduct(id)!;
  const { add, wishlist, toggleWishlist } = useCart();
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [qty, setQty] = useState(1);
  const wished = wishlist.includes(product.id);

  const related = useMemo(
    () => byCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4),
    [product.category, product.id],
  );

  return (
    <>
      <Section className="pt-10 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            {product.badge ? (
              <span className="absolute top-4 left-4 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-secondary-foreground uppercase">
                {product.badge}
              </span>
            ) : null}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <p className="text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">
              {product.category}
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl">{product.name}</h1>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-2xl font-semibold">{formatPrice(product.price)}</span>
              {product.compareAt ? (
                <span className="text-lg text-muted-foreground line-through">
                  {formatPrice(product.compareAt)}
                </span>
              ) : null}
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-current text-primary" />
              <span>Not yet rated</span>
            </div>

            <p className="mt-6 leading-relaxed text-muted-foreground">{product.description}</p>

            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {product.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-primary" />
                  {d}
                </li>
              ))}
            </ul>

            {/* Color */}
            <div className="mt-8">
              <p className="text-sm font-semibold">
                Color: <span className="font-normal text-muted-foreground">{color}</span>
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColor(c)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm transition-colors",
                      color === c
                        ? "border-primary bg-accent font-medium text-accent-foreground"
                        : "border-border bg-card hover:border-primary/50",
                    )}
                    aria-pressed={color === c}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mt-6">
              <p className="text-sm font-semibold">
                Size: <span className="font-normal text-muted-foreground">{size}</span>
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={cn(
                      "h-11 min-w-[3rem] rounded-lg border px-3 text-sm transition-colors",
                      size === s
                        ? "border-primary bg-accent font-medium text-accent-foreground"
                        : "border-border bg-card hover:border-primary/50",
                    )}
                    aria-pressed={size === s}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-lg border border-border">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex h-11 w-11 items-center justify-center transition-colors hover:bg-accent"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex h-11 w-12 items-center justify-center text-sm font-semibold">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(99, q + 1))}
                  className="flex h-11 w-11 items-center justify-center transition-colors hover:bg-accent"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <Button
                size="lg"
                className="flex-1"
                onClick={() => {
                  add(product.id, size, color, qty);
                  toast.success(`${product.name} added to bag`);
                }}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="h-11 w-11"
                aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
                onClick={() => {
                  toggleWishlist(product.id);
                  toast(wished ? "Removed from wishlist" : "Saved to wishlist");
                }}
              >
                <Heart className={cn("h-5 w-5", wished && "fill-primary text-primary")} />
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 text-sm text-muted-foreground">
              <div className="flex flex-col items-center gap-2 text-center">
                <Truck className="h-5 w-5 text-primary" />
                <span>Free delivery over $150</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <RotateCcw className="h-5 w-5 text-primary" />
                <span>30-day returns</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>Secure checkout</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related products */}
      {related.length > 0 && (
        <Section muted>
          <div className="text-center">
            <p className="eyebrow mb-3">You May Also Like</p>
            <h2 className="text-2xl md:text-3xl">More in {product.category}</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
