import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <div className="text-center">
      <h1 className="mb-4 text-2xl font-semibold">Payment Successful</h1>
      <p className="text-black/60 dark:text-white/60">
        Thank you for your order! A confirmation will be sent to your email.
      </p>
      <Link
        href="/products"
        className="mt-6 inline-block underline underline-offset-4"
      >
        Continue shopping
      </Link>
    </div>
  );
}
