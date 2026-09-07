import { useState, type FormEvent } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Check, CreditCard, Lock, Truck } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/data/shop";
import { Section } from "@/components/site/Sections";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — ISMAILIFY" },
      {
        name: "description",
        content: "Complete your ISMAILIFY purchase securely.",
      },
      { property: "og:title", content: "Checkout — ISMAILIFY" },
      { property: "og:description", content: "Secure checkout for your ISMAILIFY order." },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { items, subtotal, shipping, total, clear } = useCart();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  if (items.length === 0) {
    return (
      <Section className="pt-20">
        <div className="card-premium mx-auto max-w-md p-10 text-center">
          <h1 className="text-2xl">Your bag is empty</h1>
          <p className="mt-2 text-muted-foreground">Add something to your bag before checkout.</p>
          <Button asChild className="mt-6 w-full">
            <Link to="/shop">Start Shopping</Link>
          </Button>
        </div>
      </Section>
    );
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate order processing
    setTimeout(() => {
      clear();
      toast.success("Order placed successfully!");
      navigate({ to: "/shop" });
    }, 1200);
  }

  return (
    <Section className="pt-10 md:pt-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-4xl">Checkout</h1>
        <p className="mt-2 text-muted-foreground">Review your bag and enter your details.</p>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-10 lg:grid-cols-[1fr_24rem]">
          {/* Customer + shipping */}
          <div className="space-y-6">
            <div className="card-premium p-6 md:p-8">
              <h2 className="flex items-center gap-2 text-xl">
                <Truck className="h-5 w-5 text-primary" />
                Shipping Details
              </h2>
              <div className="mt-6 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" required placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" required placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" required placeholder="123 Main Street" />
                </div>
                <div className="grid gap-5 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required placeholder="New York" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP</Label>
                    <Input id="zip" required placeholder="10001" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" required placeholder="United States" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card-premium p-6 md:p-8">
              <h2 className="flex items-center gap-2 text-xl">
                <CreditCard className="h-5 w-5 text-primary" />
                Payment
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                This is a demo checkout — no real payment is processed.
              </p>
              <div className="mt-6 grid gap-5">
                <div className="space-y-2">
                  <Label htmlFor="cardName">Name on card</Label>
                  <Input id="cardName" required placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card number</Label>
                  <Input id="cardNumber" required placeholder="4242 4242 4242 4242" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry</Label>
                    <Input id="expiry" required placeholder="MM / YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" required placeholder="123" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="h-fit space-y-6">
            <div className="card-premium p-6 md:p-8">
              <h2 className="text-xl">Order Summary</h2>
              <ul className="mt-6 space-y-4">
                {items.map((item) => (
                  <li key={item.key} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.qty} × {item.product.name}
                    </span>
                    <span className="font-medium">
                      {formatPrice(item.product.price * item.qty)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
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
              </div>
              <div className="mt-4 flex justify-between border-t border-border pt-4 text-base font-semibold">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-8 w-full"
                disabled={submitting}
              >
                {submitting ? (
                  "Processing..."
                ) : (
                  <>
                    <Lock className="mr-2 h-4 w-4" />
                    Place Order
                  </>
                )}
              </Button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-primary" />
                Secure demo checkout
              </div>
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
}
