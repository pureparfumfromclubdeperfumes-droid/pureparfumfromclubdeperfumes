"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export default function AddToCartButton({ slug }: { slug: string }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      onClick={() => {
        addItem(slug);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
      }}
      className="rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white dark:bg-white dark:text-black"
    >
      {added ? "Added ✓" : "Add to Cart"}
    </button>
  );
}
