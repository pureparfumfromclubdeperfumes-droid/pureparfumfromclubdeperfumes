import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="block rounded-lg border border-black/10 p-5 transition hover:border-black/30 dark:border-white/15 dark:hover:border-white/40"
    >
      <p className="text-xs uppercase tracking-wide text-black/50 dark:text-white/50">
        {product.brand} · {product.category}
      </p>
      <h3 className="mt-1 text-base font-medium">{product.name}</h3>
      <p className="mt-1 text-sm text-black/60 dark:text-white/60">
        {product.size}
      </p>
      <p className="mt-3 font-semibold">₹{product.price.toLocaleString("en-IN")}</p>
    </Link>
  );
}
