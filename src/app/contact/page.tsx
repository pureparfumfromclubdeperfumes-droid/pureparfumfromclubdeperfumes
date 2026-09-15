export const metadata = {
  title: "Contact — Club de Perfumes",
};

export default function ContactPage() {
  return (
    <div className="max-w-md">
      <h1 className="mb-4 text-2xl font-semibold">Contact Us</h1>
      <p className="text-black/70 dark:text-white/70">
        Have a question about an order or a product? Reach out and we'll get
        back to you.
      </p>
      <dl className="mt-6 space-y-2 text-sm">
        <div>
          <dt className="text-black/50 dark:text-white/50">Email</dt>
          <dd>support@clubdeperfumes.com</dd>
        </div>
        <div>
          <dt className="text-black/50 dark:text-white/50">Phone</dt>
          <dd>+91 00000 00000</dd>
        </div>
      </dl>
    </div>
  );
}
