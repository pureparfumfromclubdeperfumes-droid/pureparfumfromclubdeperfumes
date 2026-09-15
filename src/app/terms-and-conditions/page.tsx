export const metadata = {
  title: "Terms & Conditions — Club de Perfumes",
};

export default function TermsPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-2xl font-semibold">Terms &amp; Conditions</h1>
      <p className="text-sm text-black/50 dark:text-white/50">
        Last updated: September 2026
      </p>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">1. General</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          By accessing and using clubdeperfumes.com (&quot;the Site&quot;),
          you agree to be bound by these Terms &amp; Conditions. If you do
          not agree, please do not use the Site.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">2. Products</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          We make every effort to display accurate product descriptions,
          sizes, and pricing. All products listed are subject to
          availability. We reserve the right to limit quantities or refuse
          any order.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">3. Pricing &amp; Payment</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          All prices are listed in Indian Rupees (INR) and are inclusive of
          applicable taxes unless stated otherwise. Payments are processed
          securely through Razorpay. An order is confirmed only once
          payment is successfully received.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">4. Order Acceptance</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          We reserve the right to cancel any order at our discretion,
          including in cases of pricing errors, suspected fraud, or stock
          unavailability. In such cases, a full refund will be issued to
          the original payment method.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">5. Intellectual Property</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          All content on this Site, including text, graphics, and logos, is
          the property of Club de Perfumes and may not be reproduced
          without permission.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">6. Governing Law</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          These Terms are governed by the laws of India. Any disputes shall
          be subject to the exclusive jurisdiction of the courts of India.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">7. Contact Us</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          For questions about these Terms, contact us at{" "}
          support@clubdeperfumes.com.
        </p>
      </section>
    </div>
  );
}
