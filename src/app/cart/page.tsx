"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { getProductBySlug } from "@/data/products";

export default function CartPage() {
  const { items, setQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div>
        <h1 className="mb-4 text-2xl font-semibold">Your Cart</h1>
        <p className="text-black/60 dark:text-white/60">Your cart is empty.</p>
        <Link
          href="/products"
          className="mt-4 inline-block underline underline-offset-4"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl">
      <h1 className="mb-6 text-2xl font-semibold">Your Cart</h1>
      <ul className="divide-y divide-black/10 dark:divide-white/15">
        {items.map((item) => {
          const product = getProductBySlug(item.slug);
          if (!product) return null;
          return (
            <li key={item.slug} className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-black/60 dark:text-white/60">
                  {product.size} · ₹{product.price.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    setQuantity(item.slug, Number(e.target.value))
                  }
                  className="w-16 rounded border border-black/20 px-2 py-1 text-sm dark:border-white/25 dark:bg-transparent"
                />
                <button
                  onClick={() => removeItem(item.slug)}
                  className="text-sm text-black/50 underline underline-offset-4 dark:text-white/50"
                >
                  Remove
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-6 dark:border-white/15">
        <p className="text-lg font-semibold">
          Total: ₹{totalPrice.toLocaleString("en-IN")}
        </p>
        <Link
          href="/checkout"
          className="rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white dark:bg-white dark:text-black"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
