export const metadata = {
  title: "Cancellation & Refund Policy — Club de Perfumes",
};

export default function RefundPolicyPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-2xl font-semibold">Cancellation &amp; Refund Policy</h1>
      <p className="text-sm text-black/50 dark:text-white/50">
        Last updated: September 2026
      </p>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">1. No Cancellations</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          Once an order is placed and payment is confirmed, it cannot be
          cancelled. Please review your order carefully before completing
          checkout.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">2. No Refunds / Returns</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          Due to the nature of our products, we do not offer refunds or
          returns for change of mind, incorrect selection, or dissatisfaction
          with the fragrance. All sales are final.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">
          3. Damaged, Defective, or Incorrect Items
        </h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          If you receive a product that is damaged in transit, defective, or
          different from what you ordered, contact us at
          support@clubdeperfumes.com within 48 hours of delivery, along with
          your order number and photos/video of the item. We will verify the
          claim and, at our discretion, offer a free replacement of the same
          product. No cash refunds are issued for these cases.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">4. Failed / Duplicate Payments</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          If an amount is deducted from your account but the order was not
          placed successfully, the amount is automatically reversed by
          Razorpay to your original payment method, typically within 5–7
          business days. Contact us if this does not happen.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">5. Contact Us</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          For any concerns regarding your order, reach out to us at{" "}
          support@clubdeperfumes.com.
        </p>
      </section>
    </div>
  );
}
