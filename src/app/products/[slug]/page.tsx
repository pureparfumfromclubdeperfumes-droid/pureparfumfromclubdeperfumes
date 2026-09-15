import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="max-w-xl">
      <p className="text-xs uppercase tracking-wide text-black/50 dark:text-white/50">
        {product.brand} · {product.category}
      </p>
      <h1 className="mt-1 text-2xl font-semibold">{product.name}</h1>
      <p className="mt-1 text-black/60 dark:text-white/60">{product.size}</p>
      <p className="mt-4 leading-relaxed">{product.description}</p>
      <p className="mt-6 text-xl font-semibold">
        ₹{product.price.toLocaleString("en-IN")}
      </p>
      <div className="mt-6">
        <AddToCartButton slug={product.slug} />
      </div>
    </div>
  );
}
