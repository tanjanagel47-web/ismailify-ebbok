import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { PRODUCTS, type Product } from "@/data/shop";

export type CartLine = {
  key: string;
  productId: string;
  size: string;
  color: string;
  qty: number;
};

type CartValue = {
  lines: CartLine[];
  items: (CartLine & { product: Product })[];
  count: number;
  subtotal: number;
  shipping: number;
  total: number;
  add: (productId: string, size: string, color: string, qty?: number) => void;
  setQty: (key: string, qty: number) => void;
  remove: (key: string) => void;
  clear: () => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
};

const CartContext = createContext<CartValue | null>(null);
const CART_KEY = "ismailify.cart";
const WISH_KEY = "ismailify.wishlist";

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLines(read<CartLine[]>(CART_KEY, []));
    setWishlist(read<string[]>(WISH_KEY, []));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(CART_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  const value = useMemo<CartValue>(() => {
    const items = lines
      .map((line) => {
        const product = PRODUCTS.find((p) => p.id === line.productId);
        return product ? { ...line, product } : null;
      })
      .filter(Boolean) as (CartLine & { product: Product })[];

    const subtotal = items.reduce((sum, i) => sum + i.product.price * i.qty, 0);
    const shipping = subtotal === 0 || subtotal >= 150 ? 0 : 12;

    return {
      lines,
      items,
      count: items.reduce((sum, i) => sum + i.qty, 0),
      subtotal,
      shipping,
      total: subtotal + shipping,
      add: (productId, size, color, qty = 1) =>
        setLines((prev) => {
          const key = `${productId}|${size}|${color}`;
          const found = prev.find((l) => l.key === key);
          if (found) return prev.map((l) => (l.key === key ? { ...l, qty: l.qty + qty } : l));
          return [...prev, { key, productId, size, color, qty }];
        }),
      setQty: (key, qty) =>
        setLines((prev) =>
          qty <= 0
            ? prev.filter((l) => l.key !== key)
            : prev.map((l) => (l.key === key ? { ...l, qty: Math.min(qty, 99) } : l)),
        ),
      remove: (key) => setLines((prev) => prev.filter((l) => l.key !== key)),
      clear: () => setLines([]),
      wishlist,
      toggleWishlist: (productId) =>
        setWishlist((prev) =>
          prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
        ),
    };
  }, [lines, wishlist]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
