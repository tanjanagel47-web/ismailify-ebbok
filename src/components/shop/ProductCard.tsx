import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart";
import { formatPrice, type Product } from "@/data/shop";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  const { add, wishlist, toggleWishlist } = useCart();
  const wished = wishlist.includes(product.id);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-lift)]">
      <Link
        to="/product/$id"
        params={{ id: product.id }}
        className="relative block aspect-4/5 overflow-hidden bg-muted"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge ? (
          <span className="absolute top-3 left-3 rounded-full bg-secondary px-3 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-secondary-foreground uppercase">
            {product.badge}
          </span>
        ) : null}
      </Link>

      <button
        type="button"
        aria-label={wished ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
        aria-pressed={wished}
        onClick={() => {
          toggleWishlist(product.id);
          toast(wished ? "Removed from wishlist" : "Saved to wishlist");
        }}
        className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/90 backdrop-blur transition-colors hover:border-primary hover:text-primary"
      >
        <Heart className={cn("h-4 w-4", wished && "fill-primary text-primary")} />
      </button>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.65rem] font-bold tracking-[0.16em] text-muted-foreground uppercase">
          {product.category}
        </p>
        <h3 className="mt-1.5 text-base leading-snug">
          <Link to="/product/$id" params={{ id: product.id }} className="hover:text-primary">
            {product.name}
          </Link>
        </h3>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-semibold">{formatPrice(product.price)}</span>
          {product.compareAt ? (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.compareAt)}
            </span>
          ) : null}
        </div>

        <p className="mt-1 text-xs text-muted-foreground">Not yet rated</p>

        <Button
          className="mt-4 w-full"
          onClick={() => {
            add(product.id, product.sizes[0], product.colors[0]);
            toast.success(`${product.name} added to bag`);
          }}
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </article>
  );
}
