import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2, Truck, X } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/data/shop";
import { PageHero, Section } from "@/components/site/Sections";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Shopping Bag — ISMAILIFY" },
      {
        name: "description",
        content: "Review your ISMAILIFY selections and proceed to checkout.",
      },
      { property: "og:title", content: "Shopping Bag — ISMAILIFY" },
      { property: "og:description", content: "Your selected ISMAILIFY pieces." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, count, subtotal, shipping, total, setQty, remove, clear } = useCart();

  return (
    <>
      <PageHero
        eyebrow="Your Bag"
        title="Shopping Bag"
        text={count > 0 ? `You have ${count} item${count === 1 ? "" : "s"} ready for checkout.` : "Your bag is empty."}
      />

      <Section>
        {items.length === 0 ? (
          <div className="card-premium flex flex-col items-center justify-center py-20 text-center">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            <h2 className="mt-6 text-2xl">Your bag is empty</h2>
            <p className="mt-2 max-w-md text-muted-foreground">
              Discover the collection and add pieces that match your style.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_24rem]">
            {/* Line items */}
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.key}
                  className="card-premium flex flex-col gap-4 p-4 sm:flex-row sm:items-center"
                >
                  <Link
                    to="/product/$id"
                    params={{ id: item.product.id }}
                    className="shrink-0 overflow-hidden rounded-xl bg-muted"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-28 w-24 object-cover"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col justify-center">
                    <p className="text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
                      {item.product.category}
                    </p>
                    <h3 className="mt-1 text-base">
                      <Link to="/product/$id" params={{ id: item.product.id }} className="hover:text-primary">
                        {item.product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.color} / {item.size}
                    </p>
                    <p className="mt-2 font-semibold">
                      {formatPrice(item.product.price * item.qty)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                    <div className="flex items-center rounded-lg border border-border">
                      <button
                        type="button"
                        onClick={() => setQty(item.key, item.qty - 1)}
                        className="flex h-9 w-9 items-center justify-center transition-colors hover:bg-accent"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="flex h-9 w-10 items-center justify-center text-sm font-semibold">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQty(item.key, item.qty + 1)}
                        className="flex h-9 w-9 items-center justify-center transition-colors hover:bg-accent"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        remove(item.key);
                        toast.success("Removed from bag");
                      }}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}

              <Button variant="outline" onClick={() => clear()} className="w-full sm:w-auto">
                <X className="mr-2 h-4 w-4" />
                Clear bag
              </Button>
            </div>

            {/* Order summary */}
            <div className="h-fit card-premium p-6 md:p-8">
              <h2 className="text-xl">Order Summary</h2>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? "Free" : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between border-t border-border pt-3 text-base font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-lg bg-muted p-4 text-sm text-muted-foreground">
                <Truck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p>
                  Free standard delivery on orders over $150. Orders under $150 ship for{" "}
                  {formatPrice(12)}.
                </p>
              </div>

              <Button asChild size="lg" className="mt-6 w-full">
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="mt-3 w-full">
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        )}
      </Section>
    </>
  );
}
