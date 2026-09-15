export const metadata = {
  title: "Shipping Policy — Club de Perfumes",
};

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-2xl font-semibold">Shipping Policy</h1>
      <p className="text-sm text-black/50 dark:text-white/50">
        Last updated: September 2026
      </p>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">1. Shipping Coverage</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          We currently ship across India. All orders are shipped via
          registered courier partners to the address provided at checkout.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">2. Processing Time</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          Orders are processed and dispatched within 1–3 business days of
          payment confirmation. Orders placed on weekends or public
          holidays are processed the next business day.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">3. Delivery Time</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          Estimated delivery time is 3–7 business days from dispatch,
          depending on your location. You will receive a tracking number by
          email/SMS once your order ships.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">4. Shipping Charges</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          Shipping charges, if applicable, are calculated at checkout based
          on your order value and delivery location.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">5. Delays</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          While we strive to meet estimated delivery times, delays may
          occur due to courier logistics, weather, or other circumstances
          beyond our control.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">6. Contact Us</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          For questions about your shipment, contact us at{" "}
          support@clubdeperfumes.com.
        </p>
      </section>
    </div>
  );
}
