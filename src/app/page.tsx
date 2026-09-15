import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          Authentic Fragrances, Honest Prices
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-black/60 dark:text-white/60">
          Full bottles, decants, and testers from designer and Middle Eastern
          houses. 100% authentic, always.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-block rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white dark:bg-white dark:text-black"
        >
          Shop Now
        </Link>
      </section>

      <section>
        <h2 className="mb-6 text-xl font-semibold">Featured</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
