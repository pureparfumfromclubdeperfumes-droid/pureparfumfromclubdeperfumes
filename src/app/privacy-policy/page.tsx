export const metadata = {
  title: "Privacy Policy — Club de Perfumes",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-2xl font-semibold">Privacy Policy</h1>
      <p className="text-sm text-black/50 dark:text-white/50">
        Last updated: September 2026
      </p>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">1. Information We Collect</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          When you place an order on Club de Perfumes, we collect your name,
          email address, phone number, shipping address, and order details.
          Payment information (card, UPI, netbanking, etc.) is collected and
          processed directly by our payment partner, Razorpay, and is never
          stored on our servers.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">2. How We Use Your Information</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          We use your information to process and ship your orders, send
          order updates, respond to support requests, and improve our
          website and product offerings. We do not sell or rent your
          personal information to third parties.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">3. Payment Security</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          All payments are processed securely through Razorpay, a PCI-DSS
          compliant payment gateway. We do not have access to your card,
          UPI, or bank details at any point.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">4. Data Sharing</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          We share your order information only with third parties necessary
          to fulfil your order, such as our payment gateway (Razorpay) and
          shipping/courier partners.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">5. Cookies</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          We use cookies and browser local storage to remember items in
          your cart and improve your browsing experience.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium">6. Contact Us</h2>
        <p className="leading-relaxed text-black/70 dark:text-white/70">
          For any privacy-related questions, contact us at{" "}
          support@clubdeperfumes.com.
        </p>
      </section>
    </div>
  );
}
